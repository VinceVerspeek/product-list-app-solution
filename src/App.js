import React, { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import ProductForm from "./components/ProductForm";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./api/productApi";

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAddProduct = async (product) => {
    await addProduct(product);
    fetchProducts();
  };

  const handleEditProduct = async (product) => {
    await updateProduct(product.id, product);
    setCurrentProduct(null);
    fetchProducts();
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    fetchProducts();
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductForm
        addProduct={handleAddProduct}
        editProduct={handleEditProduct}
        currentProduct={currentProduct}
      />
      <ProductsList
        products={products}
        onEdit={setCurrentProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
}

export default App;
