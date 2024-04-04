import useShortcutItem from '../hooks/useShortcutItem'
import type { ShortcutAsProp } from '../types'

const Card = ({ shortcut }: ShortcutAsProp) => {
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
    handleCopied,
  } = useShortcutItem(shortcut)

  return (
    <article
      id="item"
      className="relative mx-auto mt-6 flex h-56 min-h-64 min-w-[380px] flex-col justify-between overflow-hidden rounded-md bg-gray-800"
    >
      <header className="bg-gray-700 p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="cursor-default overflow-hidden text-ellipsis bg-gray-700 text-2xl font-bold
                    uppercase text-white outline-none focus-within:cursor-text"
        />
      </header>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="description text-md min-h-24 cursor-default resize-none overflow-hidden
            bg-gray-800 pl-2 text-gray-200 outline-none focus-within:cursor-text"
      ></textarea>
      <footer className="h-20 overflow-hidden text-ellipsis text-nowrap bg-gray-700 pl-4">
        <p>
          Link to: {''}
          <input
            className="cursor-default text-ellipsis bg-transparent font-bold outline-none focus-within:cursor-text"
            value={oldLink}
            onChange={(e) => setOldLink(e.target.value)}
          />
        </p>
        <p>
          Go: {''}
          <a
            className="text-ellipsis hover:underline"
            target="_blank"
            href={makeURL(shortcut.newLink)}
          >
            {makeURL(shortcut.newLink)}
          </a>
        </p>
      </footer>
      <div className="absolute right-4 top-2 flex gap-2">
        <div
          onClick={async (e) => await handleCopied(e)}
          className="hidden cursor-pointer border-2 bg-gray-800 p-1 px-2.5"
        >
          <i className="fa-regular fa-copy"></i>
        </div>
        <div
          id={`trash:${shortcut.newLink}`}
          onClick={async () => await deleteShortcut(shortcut)}
          className="hidden cursor-pointer border-2 bg-gray-800 p-1 px-2.5"
        >
          <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </article>
  )
}

export default Card
