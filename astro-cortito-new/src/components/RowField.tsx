import { modalStore } from '../stores/modalStore'

interface Props {
	info: string
	className?: string
	isLink?: boolean
}

function RowInput ({ info, className, isLink }: Props) {
	return !isLink
		? (
			<div
				className={`inline-block h-full text-ellipsis text-nowrap bg-transparent focus-within:bg-gray-900 pt-2 ${className}`}
			>
				<p className='text-start text-ellipsis overflow-hidden pl-8'>{info}</p>
			</div>
		)
		: (
			<a
				tabIndex={-1}
				className={`overflow-hidden text-ellipsis bg-transparent pt-2 hover:underline z-20 ${className}`}
				target='_blank'
				href={info}
				onMouseUp={() => setTimeout(() => modalStore.set(false), 1)}
			>
				{info}
			</a>
		)
}

export default RowInput
