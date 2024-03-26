export default function getLocalShortcuts() {
    if (typeof window === "undefined") {
        try {
            const localShortcuts = JSON.parse(window.localStorage.getItem("shortcut"))
            console.log(localShortcuts)
            return localShortcuts

        } catch (e) {
            
            console.log(e)
            return []
        }
    }
}