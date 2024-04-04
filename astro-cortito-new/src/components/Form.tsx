import { type FormEvent, useState } from 'react'
import { makeURL } from '../helpers/makeURL'
import Loading from './svg/Loading'
import Share from './svg/Share'
import Copy from './svg/Copy'

interface Props {
  className?: string
}

export default function Form({ className }: Props) {
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState('')
  const [shortcut, setShortcut] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/create-link`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldLink: link,
        }),
      })
      const data = await res.json()
      setShortcut(makeURL(data.shortcut))
      setLoading(false)
    }
    catch (err) {
      console.error(err)
    }
  }
  return (
    <form onSubmit={handleSubmit} className={className}>
      {!shortcut
        ? (
            !loading
              ? (
                <>
                  <input
                    id="link-input"
                    className="block w-full rounded-lg px-3 py-2 shadow-xl outline-none"
                    placeholder="Enter your link"
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                  />
                  <button className="mx-auto mt-2 block h-8 w-full rounded-lg bg-slate-900 px-3 text-white shadow-xl transition-colors hover:bg-slate-950 md:h-10">
                    Create
                  </button>
                </>
                )
              : (
                <Loading className="mx-auto w-10 animate-spin ease-in-out" />
                )
          )
        : (
          <>
            <h4 className="text-white text-lg pl-2">Your shortchut:</h4>
            <a
              target="_blank"
              className="mb-2 flex h-12 items-center rounded-xl bg-gray-700  bg-opacity-40 px-2 text-white"
              href={shortcut}
            >
              <p className="overflow-hidden text-ellipsis">{shortcut}</p>
            </a>
            <footer className="flex gap-2">
              <button className="relative block h-8 w-full rounded-xl bg-gray-700 bg-opacity-40 text-white transition-colors hover:bg-gray-600">
                <Copy className="absolute left-2 top-2 w-4" />
                Copy
              </button>
              <button className="relative block h-8 w-full rounded-xl bg-gray-700 bg-opacity-40 text-white transition-colors hover:bg-gray-600">
                <Share className="absolute left-2 top-2 w-4" />
                Share
              </button>
            </footer>
            <button
              onClick={() => {
                setLink('')
                setShortcut('')
              }}
              className="relative mt-2 block w-full rounded-xl bg-gray-700 bg-opacity-40 px-4 py-1 pl-7 text-white transition-colors hover:bg-gray-600"
            >
              Volver
            </button>
          </>
          )}
    </form>
  )
}
