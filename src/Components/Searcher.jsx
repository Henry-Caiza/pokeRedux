import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { setFilter } from '../slices/dataSlice';

function Searcher() {
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <div className='w-full flex border border-violet-500 rounded-full px-6 py-2 justify-between items-center '>
            <input type="text" placeholder='Buscar...'
                className='bg-indigo-950 w-full focus:outline-none text-indigo-200 focus:text-indigo-200'
                onChange={handleOnChange}
            />
            <MagnifyingGlassIcon className='h-4 w-4 text-indigo-400  hover:text-gray-500 z-10 cursor-pointer'
            ></MagnifyingGlassIcon>
        </div>

    )
}

export { Searcher }