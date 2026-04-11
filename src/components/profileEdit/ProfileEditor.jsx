import React, { useState, useEffect } from 'react';

export default function ProfileEditor({ currentUser, onSave, onClose }) {
    const [user, setUser] = useState({
        username: currentUser.username || "",
        img: currentUser.img || "/",
    });

    // Sinkronisasi dengan sistem eksternal (Memori Browser)
    useEffect(() => {
        // Kita simpan URL saat ini di variabel
        const currentImg = user.img;

        // Cleanup function: Dijalankan saat komponen unmount atau img berubah
        return () => {
            // Kita hanya revoke jika itu adalah blob URL (hasil upload), bukan path gambar default/server
            if (currentImg && currentImg.startsWith('blob:')) {
                URL.revokeObjectURL(currentImg);
            }
        };
    }, [user.img]); // Dijalankan setiap kali user.img berganti

    const submitHandler = (e) => {
        e.preventDefault();
        onSave(user);
    };

    return (
        <div className='fixed inset-0 bg-black/70 z-50 flex justify-center items-center'>
            <form className='bg-white w-100 p-10 rounded-2xl relative flex flex-col items-center gap-5' onSubmit={submitHandler}>
                <button
                    className='text-red-500 font-mono text-2xl font-bold absolute top-5 right-5 cursor-pointer'
                    type='button'
                    onClick={onClose}
                >X</button>

                <header className='font-mono text-2xl text-center font-bold'>Edit Profile</header>

                <label className='h-40 w-40 border-2 border-dashed border-pink-300 overflow-hidden rounded-full cursor-pointer flex items-center justify-center' htmlFor='img'>
                    <img className='w-full h-full object-cover' src={user.img} alt='Avatar' />
                </label>

                <input
                    className='hidden' type='file' id='img' accept="image/*"
                    onChange={(e) => {
                        if (e.target.files.length > 0) {
                            setUser({ ...user, img: URL.createObjectURL(e.target.files[0]) });
                        }
                    }}
                />

                <div className='w-full flex flex-col gap-5'>
                    <input
                        className='border w-full p-2 rounded-md focus:outline-pink-600'
                        type='text'
                        value={user.username}
                        placeholder="Username"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                    <button className='w-full bg-pink-600 text-white rounded-md py-3 font-bold hover:bg-pink-700 transition-colors cursor-pointer' type='submit'>
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}