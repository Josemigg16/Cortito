import type { Shortcut } from '../types'

export default async function editShortcut({
  id,
  oldLink,
  title,
  description,
}: Shortcut): Promise<Shortcut | undefined> {
  try {
    const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/edit-shortcut`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        oldLink,
        title,
        description,
      }),
    })
    const editedShortcut = await res.json()
    return editedShortcut
  } catch (error) {
    console.log(error)
    return undefined
  }
}
