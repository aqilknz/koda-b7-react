import React from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

function App() {
  const [products, setProducts] = React.useState([]);
  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Product Management
        </h1>
        <FormProduct onAdd={handleAddProduct} />
        <TableProduct products={products} />
      </div>
    </div>
  );
}

export default App;