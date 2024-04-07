import { atom } from 'nanostores'

export const shortcutIdStore = atom<string | undefined>('')
export const titleStore = atom<string | undefined>('')
export const descriptionStore = atom<string | undefined>('')
export const oldLinkStore = atom<string | undefined>('')
export const newLinkStore = atom<string | undefined>('')

export const clearStore = () => {
	shortcutIdStore.set('')
	titleStore.set('')
	descriptionStore.set('')
	oldLinkStore.set('')
	newLinkStore.set('')
}
