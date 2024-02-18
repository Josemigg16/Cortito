export default async function getShortcuts() {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/get-shortcuts`)
        const links = await response.json()
        console.log(links)
        return links
    } catch (error) {
        console.log(error)
    }
}