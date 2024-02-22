import { atom } from "nanostores"
export const $shortcut = atom([])
if (typeof window !== "undefined") {
    try {
        const state = JSON.parse(window.localStorage.getItem("shortcuts")) || []
        $shortcut.set(state)
    } catch {
        $shortcut.set([])
    }
}

export const updateShortcut = ({ newLink, title, oldLink, id, authorId, description }) => {
    const newShortcut = { newLink, title, oldLink, id, authorId, description }
    window.localStorage.setItem("shortcuts", JSON.stringify([...$shortcut.get(), newShortcut]));
    $shortcut.set([...$shortcut.get(), newShortcut])
}

export const editStateShortcut = ({ newLink, title, oldLink, id, authorId, description }) => {
    const newState = $shortcut.get().map(shortcut => {
        if (shortcut.id === id) return { newLink, title, oldLink, id, authorId, description }
        return shortcut
    })
    window.localStorage.setItem("shortcuts", JSON.stringify(newState));
    $shortcut.set(newState)
}

export const deleteStateShortcut = ({ id }) => {
    const newState = $shortcut.get().filter(shortcut => shortcut.id !== id)
    window.localStorage.setItem("shortcuts", JSON.stringify(newState));
    $shortcut.set(newState)
}

export const checkState = () => {
    return $shortcut.get()
}

export const clearState = () => {
    $shortcut.set([])
    window.localStorage.removeItem("shortcuts")
}