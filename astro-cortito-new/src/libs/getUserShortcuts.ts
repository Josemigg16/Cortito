import type { Shortcut } from '../types'

export default async function getUserShortcuts(
  email: string | null | undefined
): Promise<Shortcut[] | undefined> {
  try {
    const res = await fetch(
      `${import.meta.env.PUBLIC_API_URL}/users/${email}/shortcuts`
    )
    const data = (await res.json())
    const shortcuts = data.posts as Shortcut[]
    return shortcuts
  } catch (error) {
    console.error(error)
    return undefined
  }
}
