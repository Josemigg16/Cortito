import randomString from '@/helpers/randomString.js'

export default async function createShortcut ({ oldLink, authorEmail, title, description }) {
  const newLink = randomString()
  try {
    await fetch(`${import.meta.env.PUBLIC_API_URL}/create-link`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        oldLink,
        newLink,
        authorEmail: authorEmail && authorEmail,
        title: title && title,
        description: description && description
      })
    })
    await fetch(`${import.meta.env.PUBLIC_API_URL}/shortcuts/${newLink}`)
    return newLink
  } catch (error) {
    console.log(error)
  }
}
