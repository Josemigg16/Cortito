import { $shortcut } from "../shortcutstore.js"

const ShowState = () => {

    const shortcut = `${window.location.origin}/${$shortcut.value}`

    return (
        <div
            className="relative h-12 w-full min-w-[200px] flex items-center border-2 border-gray-500 rounded-md pl-4"
        >
            <p>{shortcut || ""}</p>
        </div>
    )
}

export default ShowState
