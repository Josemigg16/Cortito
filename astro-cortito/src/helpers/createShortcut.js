import randomString from "./randomString.js"

export default async function createShortcut(oldLink) {
    const newLink = randomString()
    try {
        const response = await fetch(`http://localhost:3001/api/create-link`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                oldLink,
                newLink,
            })
        })
        return newLink
    } catch (error) {
        console.log(error)
    }
}