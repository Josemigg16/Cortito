import { $shortcut } from "../shortcutstore.js"
import { useStore } from "@nanostores/react"
import makeURL from "@/helpers/makeURL.js"

const ShowState = () => {

    const createdShorcut = useStore($shortcut)
    console.log(createdShorcut)
    const lastShortcut = createdShorcut[createdShorcut.length - 1]
    console.log(createdShorcut)
    const shortcut = makeURL(lastShortcut.newLink)

    return (
        <div
            className="relative h-12 w-full min-w-[200px] flex items-center border-2 border-gray-500 rounded-md pl-4" tabIndex={0}
        >
            <p>{createdShorcut ? shortcut : "An error has been ocurred"}</p>
        </div>
    )
}

export default ShowState
