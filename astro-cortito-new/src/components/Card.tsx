import { handleEdit } from '../helpers/handleEdit'
import { makeURL } from '../helpers/makeURL'
import type { ShortcutAsProp } from '../types'

function Card ({ shortcut }: ShortcutAsProp) {
	return (
		<button
			onMouseUp={(e: unknown) => handleEdit({ shortcut, e: e as MouseEvent })}
			className='item relative mx-auto mt-6 flex h-56 min-h-64 w-[80vw] max-w-[320px] sm:max-w-[350px] sm:w-[320px] lg:w-[350px] flex-col justify-between overflow-hidden rounded-md bg-gray-900 text-white text-start hover:opacity-80 transition-[transform_opacity] hover:scale-105 animate-fromOpacity'
		>
			<p
				className='overflow-hidden text-ellipsis bg-gray-800 text-2xl font-bold
                    uppercase text-white p-4 h-16 w-full text-start'
			>
				{shortcut.title || 'untitled'}
			</p>
			<p
				className='description text-md min-h-24 overflow-hidden
            pl-2 text-gray-200 outline-none xt w-full'
			>
				{shortcut.description}
			</p>
			<footer className='h-20 bg-gray-800 p-4 w-full text-start'>
				<p className='overflow-hidden text-ellipsis text-nowrap'>
					Link to:{` ${shortcut.oldLink}`}
				</p>
				<p className='overflow-hidden text-ellipsis text-nowrap'>
					Go:{` ${makeURL(shortcut.newLink)}`}
				</p>
			</footer>
		</button>
	)
}

export default Card
