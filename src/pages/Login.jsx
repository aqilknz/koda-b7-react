import React from 'react'
import { useState, useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router";


function Login() {
    const navigate = useNavigate()
    const { dispatch } = useContext(userContext)
    const [creds, setCreds] = useState({
        username: "",
        password: "",
    })

    const submitHandler = () => {
        const newCreds = {}

        Object.assign(newCreds, {
            username: creds.username,
        })

        dispatch({
            type: "LOGIN",
            payload: newCreds
        })
        setCreds({
            username: "",
            password: ""
        })
        navigate("/", { replace: true })
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setCreds((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <main className='w-full min-h-screen bg-pink-600 flex justify-center items-center'>
            <section className='bg-white w-[546px] p-20 rounded-2xl flex flex-col gap-8'>
                <h1 className='font-bold text-3xl text-center text-pink-600'>Form Login</h1>
                <form className='flex flex-col gap-5' onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor='username' className='text-pink-600 text-xl'>Username:</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='Enter your username'
                            value={creds.username}
                            onChange={onChangeHandler}
                            className='w-full h-13 text-lg border border-gray-500 rounded-sm p-1 mt-1 focus:outline-pink-600'
                        >
                        </input>
                    </div>
                    <div>
                        <label htmlFor='password' className='text-pink-600 text-xl'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                            value={creds.password}
                            onChange={onChangeHandler}
                            className='w-full h-13 text-lg border border-gray-500 rounded-sm p-1 mt-1 focus:outline-pink-600'
                        >
                        </input>
                    </div>
                    <button
                        onClick={submitHandler}
                        type='button'
                        className='text-pink-600 border-2 border-pink-600 px-5 py-2 rounded-lg cursor-pointer hover:bg-pink-600 hover:text-white'
                    >LOGIN
                    </button>


                </form>
            </section>
        </main>
    )
}

export default Login