import { useEffect, useState } from 'react'
import { useStore } from "@nanostores/react"
import { $shortcut, clearState } from "../shortcutstore.js"
import getOneUser from "@/libs/getOneUser.js";
import ToggleView from './ToggleView.jsx'
import Card from "./Card.jsx"
import ListItem from "./ListItem.jsx"
import ShortcutsListHeader from './ShortcutsListHeader.jsx'


const ShowShortcuts = ({ session }) => {

  const [shortcuts, setShortcuts] = useState([])
  const [view, setView] = useState('grid')
  const state = useStore($shortcut)


  useEffect(() => {
    const getUser = async () => {
      if (session) {
        const user = await getOneUser({ email: session.user.email })
        $shortcut.set(user.posts)
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    setShortcuts(state)
  }, [state])

  return (
    <article>
      <header className='w-full md:flex md:justify-between md:items-center'>
        <h1 className='text-[2.75rem] md:text-5xl h-full uppercase font-bold text-nowrap -ml-3.5 md:ml-0 mb-16 mt-5 md:mb-5'
        >Your Shortcuts</h1>
        <ToggleView view={view} setView={setView} />
      </header>
      {view === 'grid' ?
        (<section className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          {
            shortcuts?.map((shortcut) => (
              <Card key={crypto.randomUUID()} shortcut={shortcut} />
            ))
          }
        </section>)
        : (
          <section className='mt-6 rounded overflow-hidden min-w-[1360px]'>
            <ShortcutsListHeader />
            {
              shortcuts?.map((shortcut) => (
                <ListItem key={crypto.randomUUID()} shortcut={shortcut} />
              ))
            }
          </section>
        )
      }
    </article>
  )
}

export default ShowShortcuts
