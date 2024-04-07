import type { ShortcutWithEmail, Shortcut } from '../types'

export default async function editShortcut ({
	id,
	email,
	oldLink,
	title,
	description
}: ShortcutWithEmail): Promise<Shortcut | undefined> {
	try {
		const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/edit-shortcut`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id,
				email,
				oldLink,
				title,
				description
			})
		})
		const editedShortcut = await res.json()
		return editedShortcut
	} catch (error) {
		console.error(error)
		return undefined
	}
}
