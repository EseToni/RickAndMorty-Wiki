import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../redux/actions';
import Filter from '../filter/filter';

export default function SearchBar() {
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        dispatch(setSearchTerm(searchTerm))
    };
    
    return (
        <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-8/12 text-sm  lg:w-4/5 md:w-4/5  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow"
                    placeholder="Rick, Morty, Smith..."
                    onChange={handleSearchChange}
                    required
                />
                <div className='absolute right-0 top-0 z-10 lg:right-10' >
                    <Filter/>
                </div>
            </div>
        </form>
    );
}
