import React from 'react';
import '../../App.css';

function Count() {
    const [count, setCount] = React.useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <section className='flex min-h-screen justify-center items-center text-white'>
            <div className='flex flex-col justify-center items-center gap-4 mt-4 bg-zinc-800 p-20 rounded-xl'>
                <p className='text-amber-500 text-4xl font-bold'>{count}</p>
                <div className='flex gap-10 p-5'>
                    <button onClick={handleIncrement} disabled={count >= 10} className='border-2border-solid rounded-full px-8 py-4 bg-pink-600 disabled:bg-pink-900'>Increment</button>
                    <button onClick={handleDecrement} disabled={count <= 0} className='border-2border-solid rounded-full px-8 py-4 bg-purple-600 disabled:bg-purple-900'>Decrement</button>
                </div>
            </div>
        </section>
    );
}
export default Count;