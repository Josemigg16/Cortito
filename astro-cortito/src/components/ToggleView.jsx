import { useEffect, useState } from 'react'

const ToggleView = ({ view, setView }) => {

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
        <div className='bg-slate-800 p-1 w-28 rounded-md relative flex justify-around h-fit text-gray-200'>
            <button className='rounded transition-[background-color]' id='listButton' onClick={() => setView('list')}>
                <i className="fa-solid fa-list-ul text-4xl p-1 pr-2"></i>
            </button>
            <button className='rounded transition-[background-color]' id='gridButton' onClick={() => setView('grid')}>
                <i className="fa-solid fa-grip text-4xl p-1 px-2"></i>
            </button>
        </div>
    )
}

export default ToggleView