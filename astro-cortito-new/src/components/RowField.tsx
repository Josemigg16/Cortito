interface Props {
  info: string
  className?: string
  isLink?: boolean
}

const RowInput = ({ info, className, isLink }: Props) => {
  return !isLink ? (
    <div
      className={`inline-block h-full overflow-hidden text-ellipsis text-nowrap bg-transparent focus-within:bg-gray-900 ${className} pl-6 pt-2`}
    >
      {info}
    </div>
  ) : (
    <a
      tabIndex={-1}
      className={`overflow-hidden text-ellipsis bg-transparent pt-2 hover:underline ${className}`}
      target="_blank"
      href={info}
    >
      {info}
    </a>
  )
}

export default RowInput
