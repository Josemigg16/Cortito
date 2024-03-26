import prisma from "../db.js"

export const register = async (req, res) => {

    const { email, name, posts } = req.body
    console.log(posts)

    try {

        const isDuplicated = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                id: true
            }
        })

        if (isDuplicated) {
            if (posts) addPosts({ authorId: isDuplicated.id, posts })
            return res.sendStatus(200)
        }
        const user = await prisma.user.create({
            data: {
                email,
                name,
                posts: {
                    connect: posts && fixedPosts
                }

            }
        })
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(404)
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

const addPosts = async ({ authorId, posts }) => {
    try {
        await posts.forEach(async (shortcut) => {
            await prisma.post.update({
                where: {
                    id: shortcut.id
                },
                data: {
                    authorId
                }
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.send(JSON.stringify(users))
    } catch (err) {
        console.log(err)
        res.sendStatus(404)
    }
}

export const getOneUser = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: req.params.email
            },
            select: {
                id: true,
                name: true,
                email: true,
                posts: true,
            }
        })
        res.send(JSON.stringify(user))
    } catch (err) {
        console.log(err)
        res.sendStatus(404)
    }
}

export const createLink = async (req, res) => {
    const { oldLink, newLink, title, authorEmail, description } = req.body
    if (oldLink === "") return
    try {
        if (authorEmail) {
            const link = await prisma.post.create({
                data: {
                    oldLink: oldLink,
                    newLink,
                    title: title || null,
                    author: {
                        connect: {
                            email: authorEmail,
                        }
                    },
                    description: description || null
                }
            })
        } else {
            const link = await prisma.post.create({
                data: {
                    oldLink: oldLink,
                    newLink,
                    title: title || null,
                    description: description || null
                }
            })
        }
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.send(404)
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
        res.send(404)
    }
}

export const getOneShortcut = async (req, res) => {
    console.log(req.params)
    try {
        const shortcut = await prisma.post.findFirst({
            where: {
                newLink: req.params.newlink
            },
            select: {
                id: true,
                oldLink: true,
                newLink: true,
                title: true,
                authorId: true,
            }
        })
        res.send(JSON.stringify(shortcut))

    } catch (err) {
        console.log(err)
        res.send(404)
    }
}

export const getUserShortcuts = async (req, res) => {

    try {
        const links = await prisma.post.findMany({
            select: {
                id: true,
                oldLink: true,
                newLink: true,
                title: true,
                description: true,
            },
            where: {
                authorId: req.body.authorId
            }
        })
        res.send(JSON.stringify(links))
    }
    catch (err) {
        console.log(err)
        res.send(404)
    }
}

export const deleteShortcut = async (req, res) => {
    console.log(req.body.id)
    try {
        const shortcut = await prisma.post.delete({
            where: {
                id: req.body.id
            }
        })
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.send(404)
    }
}

export const editShortcut = async (req, res) => {
    console.log(req.body)
    try {
        const shortcut = await prisma.post.update({
            where: {
                id: req.body.id
            },
            data: {
                title: req.body.title,
                description: req.body.description,
                oldLink: req.body.oldLink,
            }
        })
        console.log(shortcut)
        res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
        res.send(404)
    }
}