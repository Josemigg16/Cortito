export default function handleKeyDown({ e, handleEdit }) {
    if (e.key === 'Enter') {
        handleEdit(e)
        e.target.blur()
    }
    if (e.key === 'Escape') {
        handleEdit(e)
        e.target.blur()
    }
}