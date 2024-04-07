import { modalStore } from '../stores/modalStore'
import { isEditingStore } from '../stores/isEditingStore'
import { createdStore } from '../stores/createdStore'
import { clearStore } from '../stores/shortcutStore'

export const handleCloseModal = () => {
	modalStore.set(false)
	setTimeout(() => {
		isEditingStore.set(false)
		createdStore.set(false)
		clearStore()
	}, 450)
}
