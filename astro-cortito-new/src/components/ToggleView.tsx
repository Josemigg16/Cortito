import { useEffect } from 'react'
import { viewStore } from '../stores/viewStore'
import { useStore } from '@nanostores/react'
import ListIcon from './svg/ListIcon'
import GridIcon from './svg/GridIcon'

const ToggleView = () => {
  const view = useStore(viewStore)
  console.log(view)
  const setView = (value: string) => {
    viewStore.set(value)
    localStorage.setItem('view', value)
    return value
  }

  useEffect(() => {
    const $listButton = document.getElementById('listButton')
    const $gridButton = document.getElementById('gridButton')

    if (view === 'grid') {
      $gridButton?.classList.add('bg-gray-500')
      $listButton?.classList.remove('bg-gray-500')
    }
    if (view === 'list') {
      $listButton?.classList.add('bg-gray-500')
      $gridButton?.classList.remove('bg-gray-500')
    }
  }, [view])

  return (
    <div className="relative flex justify-around scale-[.7] md:scale-100 rounded-md p-2 bg-slate-800 text-gray-200">
      <button
        className="rounded transition-[background-color]"
        id="listButton"
        onClick={() => setView('list')}
      >
        <ListIcon className='w-12 p-2'/>
      </button>
      <button
        className="rounded transition-[background-color]"
        id="gridButton"
        onClick={() => setView('grid')}
      >
        <GridIcon className='w-12 p-2'/>
      </button>
    </div>
  )
}

export default ToggleView
