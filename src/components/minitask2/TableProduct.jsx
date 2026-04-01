import React from "react";

const TableProduct = ({ products }) => {
    return (
        <section className="w-3/4 mx-auto mt-12 mb-20">
            <h2 className="text-2xl font-bold mb-4 text-center">List Product</h2>
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-left bg-white">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 border-b border-gray-400">No</th>
                            <th className="p-4 border-b border-gray-400">Product Name</th>
                            <th className="p-4 border-b border-gray-400">Category</th>
                            <th className="p-4 border-b border-gray-400">Brand</th>
                            <th className="p-4 border-b border-gray-400">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="p-4 border-b border-gray-400">{index + 1}</td>
                                    <td className="p-4 border-b border-gray-400">{item.name}</td>
                                    <td className="p-4 border-b border-gray-400">{item.category}</td>
                                    <td className="p-4 border-b border-gray-400">{item.brand}</td>
                                    <td className="p-4 border-b  border-gray-400">{item.count}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-10 text-center text-gray-400">Belum ada data produk.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TableProduct;