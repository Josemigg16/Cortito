import { $shortcut } from "../shortcutstore.js"
import { useStore } from "@nanostores/react"

const ShowState = () => {

    const state = useStore($shortcut)
    const lastShortcut = state[state.length - 1]
    console.log(state)
    const shortcut = `${window.location.origin}/${lastShortcut}`

    return (
        <div
            className="relative h-12 w-full min-w-[200px] flex items-center border-2 border-gray-500 rounded-md pl-4" tabIndex={0}
        >
            <p>{state ? shortcut : "An error has been ocurred"}</p>
        </div>
    )
}

export default ShowState
