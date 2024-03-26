export default async function getOneShortcut(newLink) {
    console.log(newLink)
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/shortcuts/${newLink}`)
        const shortcut = await response.json()
        return shortcut
    } catch (error) {
        console.log(error)
    }
}