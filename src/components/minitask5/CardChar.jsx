import React from 'react'
import slugify from 'slugify'
// PERBAIKAN: Gunakan react-router-dom untuk web
import { useNavigate } from 'react-router-dom' 

function CardChar({ character }) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        const slug = slugify(character.name, { lower: true });
        navigate(`/characters/${character.id}/${slug}`);
    };
    return (
        <article 
            className='border-2 border-pink-600 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md'
            onClick={handleNavigate}
        >
            <img src={character.image} alt={character.name} className='w-full' />
            <div className='py-5 text-center font-semibold text-lg text-pink-600 bg-white'>
                {character.name}
            </div>
        </article>
    )
}

export default CardChar