import handleKeyDown from "@/helpers/handleKeyDown"

const RowInput = ({ value, onChange, className, handleEdit }) => {
    return (
        <input
            onKeyDown={(e) => handleKeyDown({ e, handleEdit })}
            className={`bg-transparent text-ellipsis outline-none focus-within:bg-gray-900 h-full inline-block w-1/4 text-nowrap overflow-hidden pr-10 pl-3 cursor-default focus-within:cursor-text
                font-semibold ${className}`}
            type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    )
}

export default RowInput
