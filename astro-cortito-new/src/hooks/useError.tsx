import { errorStore } from '../stores/errorStore'
import { useStore } from '@nanostores/react'

export function useError () {
	const error = useStore(errorStore)
	const setError = (value: boolean) => errorStore.set(value)
	return {
		Error,
		error,
		setError
	}
}

function Error () {
	return <p className='text-red-600'>The field must not be empty</p>
}
