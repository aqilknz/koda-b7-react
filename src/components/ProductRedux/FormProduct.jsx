import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProduct,
    updateProduct,
} from "../../redux/slice/productSlice.js";

const FormProduct = ({ editData, setEditData }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.products);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [count, setCount] = useState(0);

    // isi form saat edit
    useEffect(() => {
        if (editData) {
            setName(editData.name);
            setCategory(editData.category);
            setBrand(editData.brand);
            setCount(editData.count);
        }
    }, [editData]);

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            id: editData ? editData.id : Date.now(),
            name,
            category,
            brand,
            count: Number(count),
        };

        try {
            if (editData) {
                await dispatch(updateProduct(product)).unwrap();
                setEditData(null);
            } else {
                await dispatch(addProduct(product)).unwrap();
            }

            // reset hanya jika sukses
            setName("");
            setCategory("");
            setBrand("");
            setCount(0);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <section className="w-3/4 mx-auto mt-12 mb-20">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 py-10 rounded-3xl"
            >
                <h1 className="text-3xl font-bold text-center">
                    {editData ? "Update Product" : "Form Product"}
                </h1>

                <div className="flex flex-col gap-4 w-1/2 mx-auto mt-10">

                    {/* NAME */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Product Name
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="border-2 rounded-lg p-3 w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Category
                        </label>
                        <select
                            className="w-full border-2 rounded-lg p-3"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={loading}
                        >
                            <option value="">Select Category</option>
                            <option value="Makanan">Makanan</option>
                            <option value="Minuman">Minuman</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Brand
                        </label>
                        <select
                            className="w-full border-2 rounded-lg p-3"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            disabled={loading}
                        >
                            <option value="">Select Brand</option>
                            <option value="Indofood">Indofood</option>
                            <option value="Mayora">Mayora</option>
                            <option value="Nestle">Nestle</option>
                            <option value="Garuda">Garuda Food</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">
                            Count
                        </label>
                        <input
                            type="number"
                            placeholder="Count"
                            className="border-2 rounded-lg p-3 w-full"
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`text-lg text-white rounded-lg p-3 transition
                    ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-700"
                            }
                        `}
                    >
                        {loading
                            ? "Loading..."
                            : editData
                                ? "Update Product"
                                : "Submit"}
                    </button>

                    {loading && (
                        <p className="text-blue-500 text-center mt-2">
                            Sedang menyimpan data...
                        </p>
                    )}
                </div>
            </form>
        </section>
    );
};

export default FormProduct;