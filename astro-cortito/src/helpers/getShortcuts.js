export default async function getShortcuts() {
    try {
        const response = await fetch(`http://localhost:3001/api/get-shortcuts`)
        const links = await response.json()
        console.log(links)
        return links
    } catch (error) {
        console.log(error)
    }
}