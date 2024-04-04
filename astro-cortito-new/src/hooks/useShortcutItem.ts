import { useState, type MouseEvent } from 'react'
import { makeURL } from '../helpers/makeURL'
import editShortcut from '../libs/editShortcut'
import deleteShortcut from '../libs/deleteShortcut'
import type { Shortcut } from '../types'

const useShortcutItem = (shortcut: Shortcut) => {
  const [title, setTitle] = useState(shortcut?.title || 'Untitled')
  const [description, setDescription] = useState(
    shortcut?.description || 'There is no description.'
  )
  const [oldLink, setOldLink] = useState(shortcut?.oldLink)

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault()
    const shortcutToEdit = {
      id: shortcut.id,
      title,
      description,
      oldLink,
      newLink: shortcut.newLink,
      authorId: shortcut.authorId,
    } as Shortcut
    editShortcut(shortcutToEdit)
  }
  const handleCopied = async (e: MouseEvent<HTMLDivElement>) => {
    await navigator.clipboard.writeText(makeURL(shortcut.newLink))
    if (e.target instanceof HTMLElement) {
      const targetElement = e.target
      targetElement?.classList.add('text-green-400')
      setTimeout(() => {
        targetElement?.classList.remove('text-green-400')
      }, 1000)
    }
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
    handleCopied,
  }
}

export default useShortcutItem
