import Form from '@/components/Form'

export default function Home () {
  return (
    <main className='overflow-hidden'>
    <article
      className="h-[30rem] flex flex-col justify-between border-2 border-gray-500
  rounded-md px-4 pt-20 md:p-14 pb-8 items-center relative"
    >
      <label
        className="uppercase md:text-5xl text-3xl font-bold text-center w-[17ch] cursor-pointer
    hover:text-gray-400"
        htmlFor="input"
      >
        Create your custom shortcut
      </label>
      <section className="h-full flex flex-col justify-end">
        <Form />

      </section>
      <a
        href="/shortcuts"
        className="bg-gray-700 absolute -bottom-24 w-full text-center rounded py-3 hover:outline"
      >
        Go to Your Shortcuts
        <i
          className="fa-solid fa-arrow-right absolute top-3.25 md:right-[8rem] right-10 text-4xl md:scale-100 scale-75"
        ></i>
      </a>
    </article>
  </main>
  )
}
