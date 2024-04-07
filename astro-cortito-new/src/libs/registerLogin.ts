import type { CreatingUser } from '../types'

export default async function registerLogin ({ name, email }: CreatingUser): Promise<void> {
	try {
		await fetch(`${import.meta.env.PUBLIC_API_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email
			})
		})
	} catch (error) {
		console.log(error)
	}
}
