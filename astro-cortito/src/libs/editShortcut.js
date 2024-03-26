import { editStateShortcut } from "../shortcutstore.js"

export default async function editShortcut({ id, oldLink, newLink, title, description, authorId }) {
    try {
        const edit = await fetch(`${import.meta.env.PUBLIC_API_URL}/edit-shortcut`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                oldLink,
                title,
                description,
            })
        })
        editStateShortcut({ newLink, title, oldLink, id, description, authorId })
    } catch (error) {
        console.log(error)
    }
}