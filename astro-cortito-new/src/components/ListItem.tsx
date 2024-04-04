import useShortcutItem from '../hooks/useShortcutItem'
import type { ShortcutAsProp } from '../types'
import RowField from './RowField'
const ListItem = ({ shortcut }: ShortcutAsProp) => {
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
      onSubmit={handleEdit}
      id="item"
      className="relative grid h-14 select-none grid-cols-2 place-content-center gap-2 bg-gray-800 text-xl text-white transition-[background-color] hover:bg-gray-700 md:grid-cols-4 pr-2 cursor-pointer"
    >
      <RowField info={title} className="uppercase" />
      <RowField info={description} className="hidden md:block" />
      <RowField info={oldLink} />
      <RowField
        info={makeURL(shortcut.newLink)}
        isLink={true}
        className="hidden md:block"
      />
    </article>
  )
}

export default ListItem
