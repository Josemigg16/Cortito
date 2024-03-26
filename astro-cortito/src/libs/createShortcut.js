import randomString from "../helpers/randomString.js"
import { updateShortcut } from "../shortcutstore.js"

export default async function createShortcut({ oldLink, authorEmail, title, description }) {
    const newLink = randomString()
    try {
        const create = await fetch(`${import.meta.env.PUBLIC_API_URL}/create-link`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                oldLink,
                newLink,
                authorEmail: authorEmail && authorEmail,
                title: title && title,
                description: description && description,
            })
        })
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/shortcuts/${newLink}`)
        const { id, authorId } = await response.json()
        updateShortcut({ newLink, title, oldLink, id, authorId, description })
        return newLink
    } catch (error) {
        console.log(error)
    }
}