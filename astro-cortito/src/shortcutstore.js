import { atom } from "nanostores"
export const $shortcut = atom("")
if (typeof window !== "undefined") {
    try {
        const state = JSON.parse(window.localStorage.getItem("shortcut"))
        $shortcut.set(state.shortcut)
    } catch {
        $shortcut.set("")
    }
}

export const updateShortcut = (newState) => {
    window.localStorage.setItem("shortcut", JSON.stringify({ shortcut: newState }));
    $shortcut.set(newState)
    console.log($shortcut.value)
}

export const checkState = () => {
    console.log($shortcut.value)
}