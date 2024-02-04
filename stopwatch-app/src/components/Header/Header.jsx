import React from 'react'

export default function Header() {
  return (
    <>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://www.linkedin.com/in/farzaam-ali-b54624271/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FZ</span>
          </a>
          
          <div class="items-center flex justify-between h   w-auto md:order-1" id="navbar-sticky">
            <div class=" p-4  m-auto font-medium justify-end   space-x-8  flex-row mt-0 border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white">
              STOPWATCH
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
