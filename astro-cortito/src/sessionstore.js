import { atom } from "nanostores"
export const $session = atom(null)

export const updateSession = (session) => {
    try {
        window.localStorage.setItem("session", JSON.stringify(session))
        $session.set(session)
    } catch (e) {
        return
    }
}