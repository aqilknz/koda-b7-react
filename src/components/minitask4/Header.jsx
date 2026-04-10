import React from 'react'
import { NavLink } from "react-router"

function Nav() {
    return (
        <nav className='w-full sticky top-0'>
            <header className='sticky w-full bg-gray-800 text-white p-4'>
                <ul className='flex gap-10 justify-center items-center text-xl font-medium'>
                    <li ><NavLink to="/" className={({isActive}) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Home</NavLink></li>
                    <li ><NavLink to="/pokemon" className={({isActive}) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Pokemon List</NavLink></li>
                    <li><NavLink to="/app" className={({isActive}) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Form Product</NavLink></li>
                    <li><NavLink to="/count" className={({isActive}) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Count</NavLink></li>
                    <li><NavLink to="/characters" className={({isActive}) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Characters</NavLink></li>
                    <li><NavLink to="/customhook" className={({isActive}) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Custom Hook</NavLink></li>
                </ul>
            </header>
        </nav>
    )
}

export default Nav