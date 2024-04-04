import { useEffect, useState, type SetStateAction } from 'react'
import getUserShortcuts from '../libs/getUserShortcuts'
import Card from './Card.jsx'
import ListItem from './ListItem.jsx'
import type { Session } from '@auth/core/types'
import type { Shortcut } from '../types'
import { viewStore } from '../stores/viewStore.js'
import { useStore } from '@nanostores/react'

interface Props {
  session: Session | null
}

const ShowShortcuts = ({ session }: Props) => {
  const [shortcuts, setShortcuts] = useState([] as Shortcut[])
  const view = useStore(viewStore)

  useEffect(() => {
    const getUser = async () => {
      if (session) {
        const userShortcuts = await getUserShortcuts(session?.user?.email)
        console.log(userShortcuts)
        if (userShortcuts !== undefined) setShortcuts(userShortcuts)
      }
    }
    getUser()
  }, [])

  return (
    <main className="">
      {view === 'grid' ? (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {shortcuts &&
            shortcuts?.map((shortcut) => (
              <Card key={shortcut.id} shortcut={shortcut} />
            ))}
        </section>
      ) : (
        <section className="mt-6 overflow-hidden rounded">
          {shortcuts &&
            shortcuts?.map((shortcut) => (
              <ListItem key={shortcut.id} shortcut={shortcut} />
            ))}
        </section>
      )}
    </main>
  )
}

export default ShowShortcuts
