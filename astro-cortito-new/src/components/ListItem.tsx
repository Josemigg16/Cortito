import type { ShortcutAsProp } from '../types'
import RowField from './RowField'
import { makeURL } from '../helpers/makeURL'
import { handleEdit } from '../helpers/handleEdit'

function ListItem ({ shortcut }: ShortcutAsProp) {
	return (
		<article>
			<button
				onMouseUp={(e: unknown) => handleEdit({ shortcut, e: e as MouseEvent })}
				className='item relative grid h-14 cursor-pointer select-none grid-cols-2 place-content-center gap-2 bg-gray-900 pr-2 text-xl text-white transition-[background-color_.1s] hover:bg-gray-700 md:grid-cols-4 w-full rounded animate-fromOpacity'
			>
				<RowField
					info={shortcut?.title || 'Untitled'}
					className='uppercase text-2xl font-semibold'
				/>
				<RowField
					info={shortcut?.description || 'There is no description.'}
					className='hidden md:block'
				/>
				<RowField info={shortcut?.oldLink} />
				<RowField info={makeURL(shortcut.newLink)} isLink={true} className='hidden md:block' />
			</button>
		</article>
	)
}

export default ListItem
