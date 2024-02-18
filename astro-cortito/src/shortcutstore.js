import { atom } from "nanostores"
export const $shortcut = atom("")
if (typeof window !== "undefined") {
    const state = JSON.parse(window.localStorage.getItem("shortcut"))
    if (state) {
        $shortcut.set(state)
    }
}

export const updateShortcut = (newState) => {
    window.localStorage.setItem("shortcut", JSON.stringify(newState));
    $shortcut.set(newState)
    console.log($shortcut.value)
}

export const checkState = () => {
    console.log($shortcut.value)
}