import React from 'react'

const ShortcutsListHeader = () => {
    return (
        <header className='grid-cols-4 grid-rows-1 bg-gray-800 m-1 p-2 pl-6 text-2xl font-bold uppercase'>
            <section className='inline-block w-1/4'>
                {'Title'}
            </section>
            <section className='inline-block w-1/4'>
                {'Description'}
            </section>
            <section className='inline-block w-1/4'>
                {'To:'}
            </section>
            <section className='inline-block w-1/4'>
                {'Shortcut:'}
            </section>
        </header>
    )
}

export default ShortcutsListHeader
