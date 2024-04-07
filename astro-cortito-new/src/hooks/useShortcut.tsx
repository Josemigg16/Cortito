import { createdStore } from '../stores/createdStore'
import { isEditingStore } from '../stores/isEditingStore'
import { loadingShortcutStore } from '../stores/loadingShortcutStore'
import { useStore } from '@nanostores/react'
import {
	titleStore,
	descriptionStore,
	oldLinkStore,
	newLinkStore,
	shortcutIdStore
} from '../stores/shortcutStore'

export function useShortcut () {
	const loadingShortcut = useStore(loadingShortcutStore)
	const setLoadingShortcut = (active: boolean) => loadingShortcutStore.set(active)
	const isEditing = useStore(isEditingStore)
	const created = useStore(createdStore)
	const setCreated = (active: boolean) => createdStore.set(active)
	const id = useStore(shortcutIdStore)
	const title = useStore(titleStore)
	const setTitle = (title: string) => titleStore.set(title)
	const description = useStore(descriptionStore)
	const setDescription = (description: string) => descriptionStore.set(description)
	const oldLink = useStore(oldLinkStore)
	const setOldLink = (oldLink: string) => oldLinkStore.set(oldLink)
	const newLink = useStore(newLinkStore)
	const setNewLink = (newLink: string) => newLinkStore.set(newLink)
	return {
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
	}
}
