import React from "react";
import "../../App.css";

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col items-center border border-gray-100 hover:shadow-lg transition-shadow">
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-32 h-32 object-contain"
                loading="lazy"
            />
            <h3 className="text-xl font-bold capitalize mt-2 text-gray-800">{pokemon.name}</h3>
            <div className="flex gap-2 mt-2">
                {pokemon.types.map((t) => (
                    <span
                        key={t.type.name}
                        className="px-3 py-1 text-xs font-semibold text-white bg-pink-600 rounded-full capitalize"
                    >
                        {t.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;