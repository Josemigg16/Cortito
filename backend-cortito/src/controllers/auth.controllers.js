import prisma from "../db.js"
import { randomString } from "../helpers/randomString.js"

export const register = async (req, res) => {
  const { email, name, posts } = req.body

  try {
    const isDuplicated = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
      },
    })

    if (isDuplicated) {
      return res.sendStatus(200)
    }
    await prisma.user.create({
      data: {
        email,
        name,
      },
    })
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

export const login = async (req, res) => {
  const { email } = req.body
  const userPosts = await prisma.user.findMany({
    where: {
      email,
    },
    include: {
      posts: true,
    },
  })
  res.end()
}

const addPosts = async ({ authorId, posts }) => {
  try {
    await posts.forEach(async (shortcut) => {
      await prisma.post.update({
        where: {
          id: shortcut.id,
        },
        data: {
          authorId,
        },
      })
    })
  } catch (err) {
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
        email: req.params.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        posts: true,
      },
    })
    res.send(JSON.stringify(user))
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

export const createLink = async (req, res) => {
  const { oldLink, title, email, description } = req.body
  if (oldLink === "") return
  try {
    if (email) {
      const link = await prisma.post.create({
        data: {
          oldLink: oldLink,
          newLink: randomString(),
          title: title || null,
          author: {
            connect: {
              email,
            },
          },
          description: description || null,
        },
      })
      res.send({ shortcut: link.newLink })
    } else {
      const link = await prisma.post.create({
        data: {
          oldLink: oldLink,
          newLink: randomString(),
          title: title || null,
          description: description || null,
        },
      })
      res.send({ shortcut: link.newLink })
    }
  } catch (err) {
    console.log(err)
    res.send(404)
  }
}

export const getShortcuts = async (req, res) => {
  try {
    const links = await prisma.post.findMany({
      select: {
        oldLink: true,
        newLink: true,
      },
    })
    res.send(JSON.stringify(links))
  } catch (err) {
    console.log(err)
    res.send(404)
  }
}

export const getOneShortcut = async (req, res) => {
  try {
    const shortcut = await prisma.post.findFirst({
      where: {
        newLink: req.params.newlink,
      },
      select: {
        id: true,
        oldLink: true,
        newLink: true,
        title: true,
        authorId: true,
      },
    })
    res.send(shortcut)
  } catch (err) {
    console.log(err)
    res.send(404)
  }
}

export const getUserShortcuts = async (req, res) => {
  try {
    const links = await prisma.user.findFirst({
      where: {
        email: req.params.email,
      },
      select: {
        posts: true,
      },
    })
    res.send(JSON.stringify(links))
  } catch (err) {
    console.log(err)
    res.send(404)
  }
}

export const deleteShortcut = async (req, res) => {
  console.log(req.body.id)
  try {
    const shortcut = await prisma.post.delete({
      where: {
        id: req.body.id,
      },
    })
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.send(404)
  }
}

export const editShortcut = async (req, res) => {
  const { id, title, description, oldLink, email } = req.body

  try {
    if (id) {
      const shortcut = await prisma.post.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          oldLink,
          author: {
            connect: {
              email
            }
          }
        },
      })
      return res.send(JSON.stringify(shortcut))
    } else {
      const shortcut = await prisma.post.create({
        data: {
          title,
          description,
          oldLink,
          newLink: randomString(),
          author: {
            connect: {
              email,
            }
          }
        },
      })
      res.send(JSON.stringify(shortcut))
    }
  } catch (err) {
    console.log(err)
    res.send(404)
  }
}
