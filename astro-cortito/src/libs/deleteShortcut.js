import { deleteStateShortcut } from "@/shortcutstore"

export default async function deleteShortcut({ id }) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/delete-shortcut`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        })
        deleteStateShortcut({ id })
        return
    } catch (error) {
        console.log(error)
    }
}