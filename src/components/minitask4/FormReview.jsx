import React from 'react'
import { useState, useEffect } from "react";
import ReviewCard from './ReviewCard.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function FormReview() {
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [submittedData, setSubmittedData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const saveData = localStorage.getItem('reviewData');
        if (saveData) {
            setSubmittedData(JSON.parse(saveData));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address!');
            return;
        }
        if (review.length < 10) {
            setError('Review terlalu pendek, minimal 10 karakter.');
            setTimeout(() => { setError('') }, 2000);
            return;
        }
        const formData = {
            id: Date.now(),
            email,
            review
        };
        console.log("formData:", formData);
        const updatedList = [formData, ...submittedData];
        setSubmittedData(updatedList);
        localStorage.setItem('reviewData', JSON.stringify(updatedList));
    };

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen bg-gray-50 p-8 items-center justify-center">
                <div className='bg-white p-10 rounded-xl shadow-md w-full max-w-xl mx-auto flex flex-col items-center justify-center border-2 border-pink-600'>
                    <h1 className='text-2xl font-bold text-pink-600 mb-4'>Form Review</h1>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-1 w-full justify-center items-center'>
                        <div className='flex flex-col gap-2 mb-4 w-full flex-1'>
                            <label htmlFor="email" className='text-pink-600 font-bold'>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='border border-zinc-800 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-600 hover:border-pink-600'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 mb-4 w-full'>
                            <label htmlFor="review" className='text-pink-600 font-bold'>Review:</label>
                            <textarea
                                id="review"
                                name="review"
                                className='h-32 border border-zinc-800 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-600 hover:border-pink-600'
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <p className='w-full h-5 text-center mb-4 text-sm text-red-600 font-medium'>
                            {error && (
                                <div className='text-red-600'>
                                    {error}
                                </div>
                            )}
                        </p>
                        <button type="submit" className='flex items-center justify-center w-1/2 bg-pink-600 font-bold text-white text-lg py-2 px-4 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 cursor-pointer'>
                            Submit
                        </button>
                    </form>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen p-4'>
                    {submittedData.length === 0 ? (
                        <p className="text-gray-400 italic text-center col-span-full mt-4">
                            Belum ada review yang masuk...
                        </p>
                    ) : (
                        submittedData.map((item) => (
                            <ReviewCard key={item.id} data={item} />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FormReview