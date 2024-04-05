import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { viewStore } from '../stores/viewStore'
import ListIcon from './svg/ListIcon'
import GridIcon from './svg/GridIcon'

function ToggleView () {
	const view = useStore(viewStore)
	const setView = (currentView: string) => {
		viewStore.set(currentView)
		localStorage.setItem('view', currentView)
		return currentView
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedView = localStorage.getItem('view')
			if (savedView) setView(savedView)
			else setView('grid')
		}
	}, [])

	return (
		<div className='relative flex justify-around scale-[.7] md:scale-100 rounded-md p-2 bg-slate-800 text-gray-200'>
			<button
				className={` ${view === 'list' ? 'bg-gray-500' : ''} rounded transition-[background-color]`}
				id='listButton'
				onClick={() => setView('list')}
			>
				<ListIcon className='w-12 p-2' />
			</button>
			<button
				className={` ${view === 'grid' ? 'bg-gray-500' : ''} rounded transition-[background-color]`}
				id='gridButton'
				onClick={() => setView('grid')}
			>
				<GridIcon className='w-12 p-2' />
			</button>
		</div>
	)
}

export default ToggleView
