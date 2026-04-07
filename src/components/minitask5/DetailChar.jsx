import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../minitask4/Header.jsx';
import Footer from '../minitask4/Footer.jsx';

const BASE_URL = "https://rickandmortyapi.com/api/character"
function DetailChar() {
    const [data, setData] = useState(null);
    const { id, slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${BASE_URL}/${id}`);
                const data = await response.json();

                if (data.name) {
                    const correctSlug = data.name.toLowerCase().replace(/\s+/g, '-');

                    if (slug !== correctSlug) {
                        navigate(`/characters/${id}/${correctSlug}`, { replace: true });
                    }
                    setData(data);
                }
            } catch (error) {
                console.error("Error fetching detail:", error);
            }
        })();
    }, [id, slug, navigate]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className=" flex items-center justify-center p-10 min-h-screen">
                {data ? (
                    <div className="bg-white border-4 border-pink-600 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row">

                        <div className="md:w-1/2 bg-pink-100">
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="md:w-1/2 p-8 flex flex-col justify-center gap-6">
                            <h1 className="text-3xl font-black text-pink-600 uppercase border-b-2 border-pink-100 pb-4">
                                Detail Character
                            </h1>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Name : <span className="text-pink-500">{data.name}</span>
                                </h2>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Status :
                                    <span className={`ml-2 ${data.status === 'Alive' ? 'text-green-500' : 'text-red-500'}`}>
                                        {data.status}
                                    </span>
                                </h2>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Species : <span className="text-gray-600">{data.species}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-2xl font-bold text-pink-600 animate-pulse">
                        Loading Character...
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default DetailChar;