import { atom } from 'nanostores'

export const copiedStore = atom<boolean>(false)
export const copy = () => {
	copiedStore.set(true)
	setTimeout(() => copiedStore.set(false), 2000)
}