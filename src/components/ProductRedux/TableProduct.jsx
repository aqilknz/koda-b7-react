import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slice/productSlice";

const TableProduct = ({ products, onEdit }) => {
    const dispatch = useDispatch();

    return (
        <section className="w-3/4 mx-auto mt-12 mb-20">
            <h2 className="text-2xl font-bold mb-4 text-center">List Product</h2>

            <table className="w-full text-center border">
                <thead className="border">
                    <tr className="border">
                        <th className="border">No</th>
                        <th className="border">Name</th>
                        <th className="border">Category</th>
                        <th className="border">Brand</th>
                        <th className="border">Stock</th>
                        <th className="border">Action</th>
                    </tr>
                </thead>

                <tbody className="border">
                    {products.map((item, index) => (
                        <tr key={item.id} className="border">
                            <td className="border">{index + 1}</td>
                            <td className="border">{item.name}</td>
                            <td className="border">{item.category}</td>
                            <td className="border">{item.brand}</td>
                            <td className="border">{item.count}</td>
                            <td className="border">
                                <button onClick={() => onEdit(item)}>
                                    <img src="/icons/edit.svg" className="w-4 h-4 cursor-pointer mr-2"/>
                                </button>
                                <button onClick={() => dispatch(deleteProduct(item.id))}>
                                    <img src="/icons/trash.svg" className="w-4 h-4 cursor-pointer ml-2"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default TableProduct;