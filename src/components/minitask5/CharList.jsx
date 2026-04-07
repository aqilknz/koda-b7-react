import React, { useEffect, useState } from 'react'
import Header from '../minitask4/Header.jsx'
import CardChar from './CardChar.jsx';
import Footer from '../minitask4/Footer.jsx'

function CharList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch(import.meta.env.VITE_API_RM)
      if (!response.ok) {
        throw new Error(`${response.status} : ${response.statusText}`);
      }

      const data = await response.json()
      setCharacters(data.results)
      console.log(data.results)

    })();

  }, []);
  return (
    <>
      <Header />
      <div className='px-10'> 
        <h1 className='font-bold text-3xl text-center my-10 text-pink-600'>Character Rick & Morty</h1>
        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {characters.map((char) => (
            <CardChar key={char.id} character={char} />
          ))}
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default CharList