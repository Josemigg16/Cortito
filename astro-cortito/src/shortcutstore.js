import { atom } from "nanostores"
export const $shortcut = atom("")

export const updateShortcut = (newState) => {
    window.localStorage.setItem("shortcut", JSON.stringify(newState));
    $shortcut.set(newState)
    console.log($shortcut.value)
}

export const checkState = () => {
    console.log($shortcut.value)
}