export default async function getOneUser({ email }) {
    try {
        const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/users/${email}`)
        const user = await response.json()
        console.log(user)
        return user
    } catch (error) {
        console.log(error)
    }
}