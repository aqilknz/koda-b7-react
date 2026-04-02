import React, { useEffect, useState } from "react";
import PokemonCard from "./card";
import Header from "../minitask4/Header.jsx";
import Footer from "../minitask4/Footer.jsx";

const FetchPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]); 
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");

                if (!response.ok) {
                    throw new Error(`${response.status} : ${response.statusText}`);
                }

                const data = await response.json();

                const detailPromises = data.results.map(async (p) => {
                    const res = await fetch(p.url);
                    if (!res.ok) throw new Error("Gagal mengambil detail");
                    return await res.json();
                });

                const detailData = await Promise.all(detailPromises);

                setPokemonList(detailData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        })();
    }, []);

    const filteredPokemon = pokemonList.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <Header />
        <div className="min-h-screen bg-gray-50 p-8 text-black">
            <div className="max-w-full mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-pink-600 mb-4">Pokemon List</h1>
                    <input
                        type="text"
                        placeholder="Cari nama pokemon..."
                        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </header>

                {loading ? (
                    <p className="text-center text-gray-500 text-xl font-medium">Loading...</p>
                ) : error ? (
                    <div className="text-center">
                        <p className="text-red-500 bg-red-50 p-4 rounded-lg border border-red-200 inline-block">
                            Terjadi Kesalahan: {error}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredPokemon.length > 0 ? (
                            filteredPokemon.map((p) => (
                                <PokemonCard key={p.id} pokemon={p} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-400 py-10 italic">
                                Pokemon "{searchQuery}" tidak ditemukan.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default FetchPokemon;