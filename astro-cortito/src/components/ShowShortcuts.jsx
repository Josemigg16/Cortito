import { useEffect, useState } from 'react'
import { useStore } from "@nanostores/react"
import { $shortcut, checkState, clearState } from "../shortcutstore.js"
import register from "@/libs/register";
import ToggleView from './ToggleView.jsx'
import Card from "./Card.jsx"
import ListItem from "./ListItem.jsx"
import ShortcutsListHeader from './ShortcutsListHeader.jsx'


const ShowShortcuts = ({ session }) => {

  const [shortcuts, setShortcuts] = useState([])
  const [view, setView] = useState('grid')
  const state = useStore($shortcut)
  console.log(state)
  const getUser = async () => {
    if (session) {
      const user = await register({
        name: session.user?.name,
        email: session.user?.email,
        posts: state,
      })
      $shortcut.set(user.posts)
    } else {
      clearState()
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    setShortcuts(state)
  }, [state])

  return (
    <article>
      <header className='w-full flex justify-between items-center'>
        <h1 className='text-5xl h-full uppercase font-bold'
        >Your Shortcuts</h1>
        <ToggleView view={view} setView={setView} />
      </header>
      {view === 'grid' ?
        (<section className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          {
            shortcuts?.map((shortcut) => (
              <Card key={crypto.randomUUID()} shortcut={shortcut} />
            ))
          }
        </section>)
        : (
          <section className='mt-6 rounded overflow-hidden'>
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
