import { atom } from "nanostores"
export const $shortcut = atom("")
if (typeof window !== "undefined") {
    try {
        const state = JSON.parse(window.localStorage.getItem("shortcut")) || []
        $shortcut.set(state)
    } catch {
        $shortcut.set("")
    }
}

export const updateShortcut = (newState) => {
    window.localStorage.setItem("shortcut", JSON.stringify(newState));
    $shortcut.set(newState)
}

export const checkState = () => {
    console.log($shortcut.get())
}