import { atom } from "nanostores"
export const $shortcut = atom(
    typeof window !== "undefined" ? JSON.parse(typeof window.localStorage.getItem("shortcut") !== "undefined" ? window.localStorage.getItem("shortcut") : "") : "")
export const updateShortcut = (newState) => {
    window.localStorage.setItem("shortcut", JSON.stringify(newState));
    $shortcut.set(newState)
    console.log($shortcut.value)
}

export const checkState = () => {
    console.log($shortcut.value)
}