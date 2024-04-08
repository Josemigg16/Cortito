import { type FormEvent, useState } from 'react'
import { useError } from '../hooks/useError'
import { makeURL } from '../helpers/makeURL'
import { copy } from '../stores/copiedStore'
import Loading from './svg/Loading'
import Share from './svg/Share'
import Copy from './svg/Copy'

interface Props {
	className?: string
	email: string | null | undefined
}

export default function Form ({ className, email }: Props) {
	const [loading, setLoading] = useState(false)
	const [link, setLink] = useState('')
	const [shortcut, setShortcut] = useState('')
	const { error, setError, Error } = useError()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (link.length === 0) return setError(true)
		setError(false)
		setLoading(true)
		try {
			const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/create-link`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					oldLink: link,
					email
				})
			})
			const data = await res.json()
			setShortcut(makeURL(data.shortcut))
			setLoading(false)
		} catch (err) {
			console.error(err)
		}
	}
	return (
		<form onSubmit={handleSubmit} className={className}>
			<div className='h-40 flex items-end'>
				{!shortcut
					? (
						!loading
							? (
								<div className='flex flex-col w-full'>
									{error && <Error />}
									<input
										id='link-input'
										className={`block w-full rounded-lg px-3 py-2 shadow-xl outline-none ${
											error ? 'border-2 border-red-600' : ''
										}`}
										placeholder='Enter your link'
										type='text'
										value={link}
										onChange={(e) => setLink(e.target.value)}
									/>
								</div>
							)
							: (
								<Loading className='mx-auto w-10 animate-spin ease-in-out mb-12' />
							)
					)
					: (
						<div className='w-full'>
							<h4 className='text-white text-lg pl-2'>Your shortchut:</h4>
							<a
								target='_blank'
								className='mb-2 flex h-12 items-center rounded-xl bg-gray-700  bg-opacity-40 px-2 text-white hover:bg-gray-600 transition-colors'
								href={shortcut}
							>
								<p className='overflow-hidden text-ellipsis'>{shortcut}</p>
							</a>
							<footer className='flex gap-2'>
								<button
									type='button'
									onClick={async () => {
										await navigator.clipboard.writeText(shortcut)
										copy()
									}}
									className='relative block h-8 w-full rounded-xl bg-gray-700 bg-opacity-40 text-white transition-colors hover:bg-gray-600'
								>
									<Copy className='absolute left-2 top-2 w-4' />
								Copy
								</button>
								<button
									type='button'
									onClick={async () => {
										await navigator.share({
											title: 'Shortcut cortito!',
											text: 'Look at my shortcut!',
											url: shortcut
										})
									}}
									className='relative block h-8 w-full rounded-xl bg-gray-700 bg-opacity-40 text-white transition-colors hover:bg-gray-600'
								>
									<Share className='absolute left-2 top-2 w-4' />
								Share
								</button>
							</footer>
						</div>
					)}
			</div>
			{!shortcut
				? (
					<button
						type='submit'
						className='mx-auto mt-2 block h-10 w-full rounded-lg bg-slate-900 px-3 text-white shadow-xl transition-colors hover:bg-slate-950 md:h-10'
					>
					Create
					</button>
				)
				: (
					<div
						onClick={() => {
							setLink('')
							setShortcut('')
						}}
						className='mx-auto mt-2 grid place-content-center h-8 w-full rounded-lg bg-slate-900 px-3 text-white shadow-xl transition-colors hover:bg-slate-950 md:h-10 cursor-pointer'
					>
					Return
					</div>
				)}
		</form>
	)
}
