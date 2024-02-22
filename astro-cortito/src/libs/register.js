export default async function register({ name, email, posts }) {
    try {
        const creatingUser = await fetch(`${import.meta.env.PUBLIC_API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, posts
            })
        })
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/users/${email}`)
        const user = await response.json()
        return user
    } catch (error) {
        console.log(error)
    }
}