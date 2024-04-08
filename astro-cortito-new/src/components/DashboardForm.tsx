import editShortcut from '../libs/editShortcut'
import { type FormEvent } from 'react'
import { makeURL } from '../helpers/makeURL'
import { useShortcut } from '../hooks/useShortcut'
import { useError } from '../hooks/useError'
import { handleCloseModal } from '../helpers/handleCloseModal'
import Loading from '../components/svg/Loading'
import deleteShortcut from '../libs/deleteShortcut'

interface Props {
	email: string | null | undefined
}

export default function DashboardForm ({ email }: Props) {
	const {
		loadingShortcut,
		setLoadingShortcut,
		isEditing,
		created,
		setCreated,
		id,
		title,
		setTitle,
		description,
		setDescription,
		oldLink,
		setOldLink,
		newLink,
		setNewLink
	} = useShortcut()

	const { error, setError } = useError()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!oldLink) return setError(true)
		setError(false)
		setLoadingShortcut(true)
		const shortcut = await editShortcut({ email, title, description, oldLink, id })
		if (shortcut) setNewLink(makeURL(shortcut.newLink))
		setLoadingShortcut(false)
		setCreated(true)
	}

	const handleDelete = async () => {
		await deleteShortcut({ id })
		handleCloseModal()
		setCreated(true)
	}

	return (
		<form
			id='dashboard-form'
			className='w-[292px] min-w-[218px] bg-slate-900 md:w-[400px] flex flex-col p-8 rounded-xl relative overflow-auto'
			onSubmit={handleSubmit}
		>
			<span
				onClick={handleCloseModal}
				className='block absolute text-white top-2 right-4 text-2xl font-medium cursor-pointer select-none hover:text-gray-400 pb-5 pl-5 pt-1 pr-1'
			>
				x
			</span>
			<label
				htmlFor='title-input'
				className='font-bold mt-4 mb-5 md:mb-10 uppercase text-center text-4xl md:text-5xl text-white text-ellipsis text-nowrap min-h-11 overflow-hidden'
			>
				{created ? 'Success' : !isEditing ? 'New shortcut' : title || 'Untitled'}
			</label>
			<div className='flex flex-col h-[312px]'>
				{loadingShortcut
					? (
						<div className='h-40 mb-auto grid place-content-center'>
							<Loading className='w-10 mt-24 animate-spin' />
						</div>
					)
					: (
						<>
							{created
								? (
									<div className='bg-slate-800 h-full rounded px-4'>
										<p className='text-white text-xl my-2 '>
											<strong>Title: </strong>
											{title}
										</p>
										<p className='text-white text-xl h-44 break-all overflow-hidden'>
											<strong>
										Description: <br />{' '}
											</strong>
											{description}
										</p>
										<p className='text-white text-xl text-ellipsis overflow-hidden text-nowrap'>
											<strong>link: </strong>
											{oldLink}
										</p>
									</div>
								)
								: (
									<div className='w-full flex flex-col'>
										<input
											id='title-input'
											className='my-1 py-3 pl-3 rounded outline-none hover:bg-slate-300 transition-colors'
											type='text'
											placeholder='Title'
											value={title}
											onChange={(e) => setTitle(e.target.value)}
										/>
										<textarea
											className='my-1 py-3 px-3 resize-none min-h-36 rounded outline-none hover:bg-slate-300 transition-colors'
											placeholder='Description'
											value={description}
											onChange={(e) => setDescription(e.target.value)}
											maxLength={100}
										/>
										<input
											className={`my-1 py-3 pl-3 rounded outline-none hover:bg-slate-300 transition-colors ${error ? 'bg-red-100' : ''}`}
											type='text'
											value={oldLink}
											placeholder='Old link'
											onChange={(e) => setOldLink(e.target.value)}
										/>
									</div>
								)}
							{isEditing && (
								<div className='flex gap-1 my-1 text-white md:gap-2'>
									<button
										type='button'
										className='bg-slate-800 w-full text-center p-2 text-xl rounded hover:bg-slate-700 transition-colors'
									>
									Share
									</button>
									<a
										className='block bg-slate-800 w-full text-center p-2 text-xl rounded hover:bg-slate-700 transition-colors'
										target='_blank'
										href={newLink}
									>
									Go
									</a>
								</div>
							)}
						</>
					)}
			</div>
			<button
				type={created ? 'button' : 'submit'}
				disabled={loadingShortcut}
				onClick={created ? handleCloseModal : undefined}
				className={`text-white bg-slate-800 py-3 text-nowrap rounded my-1 text-xl md:text-2xl md:mt-1 transition-colors ${
					!loadingShortcut ? 'hover:bg-slate-700' : ''
				}`}
			>
				{created ? 'Cerrar' : !isEditing ? 'Create shortcut' : 'Confirm'}
			</button>
			{isEditing && (
				<button
					type='button'
					onClick={handleDelete}
					className='bg-transparent py-3 text-nowrap rounded my-1 text-xl md:text-2xl md:mt-0.5 text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors'
				>
					Delete Shortcut
				</button>
			)}
		</form>
	)
}
