import Header from '../minitask4/Header.jsx'
import Footer from '../minitask4/Footer.jsx'
import useFetch from "./useFetch.js";

function PokemonGallery() {
    const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    if (loading) return <h1 className='font-bold text-2xl text-center my-20 '>Sedang memuat data pokemon...</h1>;
    
    if (error) return <h1>Error: {error}</h1>;
    if (!data || data.results.length === 0) {
        return error;
    }

    return (
        <>
            <Header />
            <div className=" min-h-full mx-10 my-22 flex flex-col gap-10 justify-center items-center">
                <h2 className="font-bold text-3xl ">Koleksi Pokemon</h2>
                <div className="grid grid-cols-5 gap-2 w-full justify-center items-center mx-">
                    {data?.results.map((pokemon, index) => (
                        <div key={index} className="border-2 border-solid border-pink-600 flex justify-center items-center">
                            <p>{pokemon.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PokemonGallery;