import { useState, useEffect } from "react"
import createShortcut from "../libs/createShortcut.js"

const Form = ({ session }) => {

    const [oldLink, setOldLink] = useState("")
    const [bluring, setBluring] = useState(true)
    const [error, setError] = useState(false)
    const [waitingMsg, setWaitingMsg] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (oldLink.length === 0) return setError(true)
        const waiting = await createShortcut({ oldLink, authorEmail: session && session.user?.email })
        if (typeof waiting !== String) return setWaitingMsg(true)
        else {
            setWaitingMsg(false)
            window.location.pathname = '/success'
            setError(false)
            setOldLink("")
        }
    }

    useEffect(() => {
        const $label = document.getElementById("Enter-your-link")
        if (oldLink.length > 0 && bluring) {

            $label.innerHTML = ""
        }
        else {
            $label.innerHTML = "Enter your link"
        }
    }, [bluring])
    return (
        <>
            {error && <p className="mr-40 mb-2 text-sm text-red-600">You have to enter a link</p>}
            {waitingMsg && <p className="mb-2 text-sm text-red-600">Database is waking up, wait a minute</p>}

            <form className="h-12 flex items-center gap-4 mb-4 md:scale-125" onSubmit={handleSubmit}>
                <div className="relative h-10 w-full min-w-[200px] flex">
                    <input className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent selected:bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        onFocus={() => { setBluring(false) }}
                        onBlur={() => { setBluring(true) }}
                        autoComplete="off"
                        id="input"
                        type="text"
                        placeholder=" "
                        value={oldLink}
                        onChange={(e) => setOldLink(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                        id="Enter-your-link">
                        Enter your link
                    </label>
                </div>
                <button className="text-center text-3xl font-black uppercase hover:text-gray-300
                hover:bg-indigo-800 cursor-pointer bg-indigo-700 rounded-md px-4 w-1/4 h-[105%]"
                    type="submit"
                >
                    Go
                </button>
            </form>
        </>
    )
}

export default Form
