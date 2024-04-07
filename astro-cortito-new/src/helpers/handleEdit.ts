import {
	titleStore,
	descriptionStore,
	oldLinkStore,
	shortcutIdStore,
	newLinkStore
} from '../stores/shortcutStore'
import { isEditingStore } from '../stores/isEditingStore'
import { modalStore } from '../stores/modalStore'
import type { Shortcut } from '../types'

interface Props {
	shortcut: Shortcut
	e: MouseEvent
}

export function handleEdit ({ shortcut, e }: Props) {
	const target = e.target as HTMLButtonElement
	if (target.tagName === 'A') return

	shortcutIdStore.set(shortcut.id)
	titleStore.set(shortcut.title || '')
	descriptionStore.set(shortcut.description || '')
	oldLinkStore.set(shortcut.oldLink)
	newLinkStore.set(shortcut.newLink)
	isEditingStore.set(true)
	modalStore.set(true)
}
