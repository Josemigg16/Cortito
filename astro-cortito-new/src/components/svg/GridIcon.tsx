import type { SVGProps } from '../../types'

export default function GridIcon({ className }: SVGProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 3.5H10.5V10.5H3.5V3.5Z"
        stroke="#eee"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M3.5 13.5H10.5V20.5H3.5V13.5Z"
        stroke="#eee"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3.5H20.5V10.5H13.5V3.5Z"
        stroke="#eee"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M13.5 13.5H20.5V20.5H13.5V13.5Z"
        stroke="#eee"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  )
}
