import React, {useState} from "react";
import FormProduct from "../components/ProductRedux/FormProduct.jsx";
import TableProduct from "../components/ProductRedux/TableProduct.jsx";
import Header from "../components/minitask4/Header.jsx";
import Footer from "../components/minitask4/Footer.jsx";
import { useSelector } from "react-redux";

function ProductRedux() {
    const products = useSelector((state) => state.products.list);
    const [editData, setEditData] = useState(null);
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="w-full mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8 text-black">
                        Product Management
                    </h1>
                    <FormProduct editData={editData} setEditData={setEditData}/>
                    <TableProduct products={products} onEdit={setEditData}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductRedux