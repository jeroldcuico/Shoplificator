import React from 'react'

export default function Pagination({ goToPage, nextPage, previousPage, currentPage, total }) {
    return (
        <>
            <div className='flex items-center justify-center'>
                <ul className="inline-flex -space-x-px text-md">
                    <li>
                        <button disabled={currentPage <= 1} onClick={previousPage} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                    </li>
                    <li>
                        <a href="#!!" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{currentPage}</a>
                    </li>
                    <li>
                        <button disabled={currentPage * 10 === total} onClick={nextPage} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                    </li>
                </ul>
            </div>
        </>
    )
}
