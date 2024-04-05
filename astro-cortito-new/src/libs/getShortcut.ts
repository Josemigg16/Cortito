import type { Shortcut } from '../types'

export async function getShortcut (
	path: string | undefined
): Promise<Shortcut | undefined> {
	try {
		const response = await fetch(
			`${import.meta.env.PUBLIC_API_URL}/shortcuts/${path}`
		)
		const shortcut = (await response.json()) as Shortcut
		return shortcut
	} catch (error) {
		console.error(error)
		return undefined
	}
}
