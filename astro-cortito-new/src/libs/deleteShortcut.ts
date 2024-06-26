import type { ShortcutID } from '../types'

export default async function deleteShortcut ({ id }: ShortcutID): Promise<boolean> {
	try {
		const res = await fetch(
			`${import.meta.env.PUBLIC_API_URL}/delete-shortcut`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id
				})
			}
		)
		if (res.ok) { return true }
		return false
	} catch (error) {
		console.error(error)
		return false
	}
}
