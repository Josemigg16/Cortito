import { useState } from 'react'
import editShortcut from '@/libs/editShortcut'
import makeURL from "@/helpers/makeURL"
import deleteShortcut from "@/libs/deleteShortcut"
import RowInput from "@/components/RowInput"

const useShortcutItem = (shortcut) => {

    const [title, setTitle] = useState(shortcut?.title || "Untitled")
    const [description, setDescription] = useState(shortcut?.description || "There is no description.")
    const [oldLink, setOldLink] = useState(shortcut?.oldLink)

    const handleEdit = (e) => {
        e.preventDefault()
        const editedShortcut = {
            id: shortcut.id,
            title,
            description,
            oldLink,
            newLink: shortcut.newLink,
            authorId: shortcut.authorId,
        }
        editShortcut(editedShortcut)
    }
    const handleCopied = async (e) => {
        await navigator.clipboard.writeText(makeURL(shortcut.newLink))
        e.target.classList.add("text-green-400")
        setTimeout(() => {
            e.target.classList.remove("text-green-400")
        }, 1000)
    }


    return {
        title,
        setTitle,
        description,
        setDescription,
        oldLink,
        setOldLink,
        handleEdit,
        makeURL,
        deleteShortcut,
        RowInput,
        handleCopied
    }
}

export default useShortcutItem
