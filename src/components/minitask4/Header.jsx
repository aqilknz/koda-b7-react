import React, { useContext, useState } from 'react'
import { NavLink } from "react-router"
import { userContext } from '../../context/UserContext.jsx';
import ProfileEditor from '../profileEdit/ProfileEditor.jsx'

function Nav() {
    const { state, dispatch } = useContext(userContext);
    const [isShow, setIsShow] = useState(false);

    const handleSaveProfile = (updatedData) => {
        dispatch({ type: "EDIT_PROFILE", payload: updatedData });
        setIsShow(false);
    };

    return (
        <nav className='w-full sticky top-0'>
            <header className='sticky w-full flex gap-10 bg-gray-800 text-white p-4 justify-center items-center'>
                <ul className='flex gap-10 justify-center items-center text-xl font-medium'>
                    <li ><NavLink to="/" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Home</NavLink></li>
                    <li ><NavLink to="/pokemon" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Pokemon List</NavLink></li>
                    <li><NavLink to="/app" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Form Product</NavLink></li>
                    <li><NavLink to="/count" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Count</NavLink></li>
                    <li><NavLink to="/characters" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Characters</NavLink></li>
                    <li><NavLink to="/customhook" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Custom Hook</NavLink></li>
                    <li><NavLink to="/survey" className={({ isActive }) => {
                        return isActive ? "text-pink-600" : "text-white hover:text-pink-600"
                    }}>Survey</NavLink></li>
                </ul>
                <div className="flex gap-4 place-self-end">
                    {!state.user.username ? (
                        <NavLink to='/login' className='text-white border py-1 px-5 rounded-2xl cursor-pointer hover:bg-pink-600'>Login</NavLink>
                    ) : (
                        <div className='flex items-center gap-2 border p-1 rounded-md border-white'>
                            <div onClick={() => setIsShow(true)} className="cursor-pointer">
                                {state.user.img ? (
                                    <img className='w-10 h-10 rounded-full' src={state.user.img} alt="user" />
                                ) : (
                                    <div className='w-10 h-10 border rounded-full flex justify-center items-center'>+</div>
                                )}
                            </div>
                            <p className='font-mono text-xl'>{state.user.username}</p>
                            <button className='ml-4 cursor-pointer p-2 rounded-xl hover:bg-pink-600 hover:text-white' onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
                        </div>
                    )}
                </div>
            </header>
            {isShow && (
                <ProfileEditor
                    currentUser={state.user}
                    onSave={handleSaveProfile}
                    onClose={() => setIsShow(false)}
                />
            )}

        </nav >
    )
}

export default Nav