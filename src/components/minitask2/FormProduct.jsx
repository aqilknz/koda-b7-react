import React, { useState } from "react";
import '../../App.css';

const FormProduct = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [count, setCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !category || !brand || !count) {
            return alert("Please fill in all fields!");
        }
        const newProduct = {
            id: Date.now(),
            name,
            category,
            brand,
            count: Number(count)
        };
        onAdd(newProduct);
        setName("");
        setCategory("");
        setBrand("");
        setCount(0);
    };

    return (
        <section className="w-3/4 mx-auto mt-12 mb-20">
            <form onSubmit={handleSubmit} className="bg-gray-100 py-10 rounded-3xl">
                <h1 className="text-3xl font-bold text-center">Form Product</h1>
                <div className="flex flex-col gap-4 w-1/2 mx-auto mt-10">
                    <div>
                        <label className="block mb-2 font-medium">Product Name</label>
                        <input type="text" placeholder="Product Name" className="border-2 border-solid rounded-lg p-3 w-full" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Category</label>
                        <select className="w-full border-2 border-solid rounded-lg p-3" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="Makanan" className="font-medium">Makanan</option>
                            <option value="Minuman" className="font-medium">Minuman</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Brand</label>
                        <select className="w-full border-2 border-solid rounded-lg p-3 " value={brand} onChange={(e) => setBrand(e.target.value)}>
                            <option value="">Select Brand</option>
                            <option value="Indofood" className="font-medium">Indofood</option>
                            <option value="Mayora" className="font-medium">Mayora</option>
                            <option value="Nestle" className="font-medium">Nestle</option>
                            <option value="Garuda" className="font-medium">Garuda Food</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">Count</label>
                        <input type="number" placeholder="Count" className="border-2 border-solid rounded-lg p-3 w-full" value={count} onChange={(e) => setCount(e.target.value)} />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded-lg p-3">Submit</button>
                </div>
            </form>
        </section>
    )
}
export default FormProduct;