import useShortcutItem from "@/hooks/useShortcutItem"
import handleKeyDown from "@/helpers/handleKeyDown"

const Card = ({ shortcut }) => {

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
        handleCopied
    } = useShortcutItem(shortcut)

    return (
        <article id="item"
            className='bg-gray-800 min-h-64 h-56 flex flex-col justify-between mt-6 rounded-md overflow-hidden relative min-w-[380px] w-[410px] mx-auto'>
            <header className="bg-gray-700 p-4">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => handleKeyDown({ e, handleEdit })}
                    className="text-2xl font-bold text-white uppercase text-ellipsis overflow-hidden
                    bg-gray-700 outline-none cursor-default focus-within:cursor-text"
                />

            </header>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={(e) => handleKeyDown({ e, handleEdit })}
                className="description min-h-24 text-md text-gray-200 overflow-hidden pl-2
            bg-gray-800 resize-none outline-none cursor-default focus-within:cursor-text"
            >
            </textarea>
            <footer className="h-20 pl-4 bg-gray-700 overflow-hidden text-nowrap text-ellipsis">
                <p>
                    Link to: {""}
                    <input className="font-bold text-ellipsis bg-transparent outline-none cursor-default focus-within:cursor-text"
                        value={oldLink}
                        onChange={(e) => setOldLink(e.target.value)}
                        onKeyDown={(e) => handleKeyDown({ e, handleEdit })}
                    />
                </p>
                <p>
                    Go: {""}
                    <a className="hover:underline text-ellipsis" target="_blank"
                        href={makeURL(shortcut.newLink)}>{makeURL(shortcut.newLink)}</a>
                </p>
            </footer>
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
        </article>
    )
}

export default Card
