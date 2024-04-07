import type { Shortcut } from '../types'
import type { Session } from '@auth/core/types'
import { viewStore } from '../stores/viewStore'
import { createdStore } from '../stores/createdStore'
import { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import getUserShortcuts from '../libs/getUserShortcuts'
import Card from './Card.jsx'
import ListItem from './ListItem.jsx'
import Loading from '../components/svg/Loading'

interface Props {
	session: Session | null
}

function ShowShortcuts ({ session }: Props) {
	const [loading, setLoading] = useState(false)
	const [shortcuts, setShortcuts] = useState([] as Shortcut[])
	const view = useStore(viewStore)
	const created = useStore(createdStore)

	useEffect(() => {
		const getUser = async () => {
			if (session) {
				setLoading(true)
				const userShortcuts = await getUserShortcuts(session?.user?.email)
				if (userShortcuts !== undefined) {
					setShortcuts(userShortcuts)
				}
				setLoading(false)
			}
		}
		getUser()
	}, [created])

	return (
		<>
			{loading
				? (
					<div className='h-full grid place-content-center'>
						<Loading className='w-10 mb-40 animate-spin' />
					</div>
				)
				: (
					<>
						{view === 'grid' && (
							<main className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-12'>
								{shortcuts &&
								shortcuts?.map((shortcut) => <Card key={shortcut.id} shortcut={shortcut} />)}
							</main>
						)}
						{view === 'list' && (
							<main className='mt-6 overflow-hidden rounded flex flex-col gap-1 pb-12'>
								{shortcuts &&
								shortcuts?.map((shortcut) => <ListItem key={shortcut.id} shortcut={shortcut} />)}
							</main>
						)}
					</>
				)}
		</>
	)
}

export default ShowShortcuts
