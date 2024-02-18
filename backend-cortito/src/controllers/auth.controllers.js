import prisma from "../db.js"
import { fixURL } from "../helpers/fixUrl.js"

export const register = async (req, res) => {

    const { email, name, posts } = req.body

    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                posts: posts && posts

            }
        })
        res.end()
    }
    catch (err) {
        console.log(err)
    }
}

export const login = async (req, res) => {

    const { email } = req.body
    const userPosts = await prisma.user.findMany({
        where: {
            email
        },
        include: {
            posts: true
        }
    })
    res.end()
}

export const createLink = async (req, res) => {
    const { oldLink, newLink, title, authorId } = req.body
    if(oldLink === "") return
    try {
        const link = await prisma.post.create({
            data: {
                oldLink: fixURL(oldLink),
                newLink,
                title: title || null,
                authorId: authorId || null,
            }
        })
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
    }
}

export const getShortcuts = async (req, res) => {

    try {
        const links = await prisma.post.findMany({
            select: {
                oldLink: true,
                newLink: true
            }
        })
        res.send(JSON.stringify(links))
    }
    catch (err) {
        console.log(err)
    }
}
