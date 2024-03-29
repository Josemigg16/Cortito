export default async function getOneShortcut(newLink) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/shortcuts/${newLink}`)
        const shortcut = await response.json()
        console.log(shortcut)
        return shortcut
    } catch (error) {
        console.log(error)
    }
}