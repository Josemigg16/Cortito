import useShortcutItem from "@/hooks/useShortcutItem"
const ListItem = ({ shortcut }) => {
    const {
        title,
        setTitle,
        description,
        setDescription,
        oldLink,
        setOldLink,
        handleEdit,
        makeURL,
        deleteShortcut,
        RowInput,
        handleCopied
    } = useShortcutItem(shortcut)

    return (
        <form onSubmit={handleEdit} id="item" tabIndex="-1"
            className='grid-cols-4 grid-rows-1 bg-gray-800 m-1 relative h-14 
        hover:bg-gray-700 outline-none transition-[background-color]' >
            <RowInput className={"uppercase"}
                handleEdit={handleEdit}
                value={title}
                onChange={setTitle} />

            <RowInput
                handleEdit={handleEdit}
                value={description}
                onChange={setDescription}
            />

            <RowInput
                handleEdit={handleEdit}
                value={oldLink}
                onChange={setOldLink}
            />
            <section className='inline w-1/4 text-ellipsis text-nowrap overflow-hidden pr-10 relative'>
                <a tabIndex="-1"
                    className="bg-transparent text-ellipsis hover:underline outline-none" target="_blank"
                    href={makeURL(shortcut.newLink)}>{makeURL(shortcut.newLink)}</a>
            </section>
            <div className="flex absolute right-4 top-2 gap-2">
                <div type="button"
                    onClick={handleCopied}
                    className="bg-gray-800 p-1 px-2.5 border-2 hidden cursor-pointer">
                    <i className="fa-regular fa-copy"></i>
                </div>
                <div type="button" id={`trash:${shortcut.newLink}`}
                    onClick={async () => await deleteShortcut({ id: shortcut.id })}
                    className="bg-gray-800 p-1 px-2.5 border-2 hidden cursor-pointer">
                    <i className="fa-solid fa-trash"></i>
                </div>
            </div>
        </form >
    )
}

export default ListItem