import React from 'react'
import Button from '../Button/Button'

export default function Panel(props) {
  return (
    <>
        
        <div class="flex mt-[200px] lg:mt-[300px] mx-auto p-4  w-full text-center text-white bg-black justify-around md:w-[70%] lg:w-[50%]">
                {/* hour element */}
                <div class="block text-black max-w-sm w-[15%] my-4 md:p-4 py-4 px-2  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                   {props.time.h}
                </div>

                <div class="block my-4 py-4">:</div>

                {/* Minute element */}
                <div class="block text-black max-w-sm w-[15%] my-4 md:p-4 py-4 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                {props.time.m}
                </div>

                <div class="block my-4 py-4">:</div>

                {/* Second element */}
               
                <div class="block text-black max-w-sm w-[15%] my-4 md:p-4 py-4 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    {props.time.s}
                </div>
                <div class="block my-4 py-4">:</div>

                {/* Mili-Second element */}
               
                <div class="block text-black max-w-sm w-[15%] my-4 md:p-4 py-4 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    {props.time.ms}
                </div>
               
            </div >
            

    </>
  )
}
