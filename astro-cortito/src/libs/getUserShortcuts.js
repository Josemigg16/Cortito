export default async function getNoUserPosts(id) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/get-user-posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        })
        const links = await response.json()
        console.log(links)
        return links
    } catch (error) {
        console.log(error)
    }
}