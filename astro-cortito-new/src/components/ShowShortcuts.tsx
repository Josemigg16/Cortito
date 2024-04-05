import { useEffect, useState } from 'react'
import type { Session } from '@auth/core/types'
import { useStore } from '@nanostores/react'
import getUserShortcuts from '../libs/getUserShortcuts'
import type { Shortcut } from '../types'
import { viewStore } from '../stores/viewStore.js'
import Card from './Card.jsx'
import ListItem from './ListItem.jsx'

interface Props {
	session: Session | null
}

function ShowShortcuts ({ session }: Props) {
	const [shortcuts, setShortcuts] = useState([] as Shortcut[])
	const view = useStore(viewStore)

	useEffect(() => {
		const getUser = async () => {
			if (session) {
				const userShortcuts = await getUserShortcuts(session?.user?.email)
				if (userShortcuts !== undefined) {
					setShortcuts(userShortcuts)
				}
			}
		}
		getUser()
	}, [])

	return (
		<>
			{view === 'grid' && (
				<main className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
					{shortcuts &&
						shortcuts?.map((shortcut) => <Card key={shortcut.id} shortcut={shortcut} />)}
				</main>
			)}
			{view === 'list' && (
				<main className='mt-6 overflow-hidden rounded'>
					{shortcuts &&
						shortcuts?.map((shortcut) => <ListItem key={shortcut.id} shortcut={shortcut} />)}
				</main>
			)}
		</>
	)
}

export default ShowShortcuts
