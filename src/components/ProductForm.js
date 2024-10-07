import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, editProduct, currentProduct }) => {
  const [product, setProduct] = useState({
    id: null,
    name: "",
    description: "",
  });

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      setProduct({ id: null, name: "", description: "" });
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { id, ...productData } = product;

    if (id) {
      editProduct(product);
    } else {
      addProduct(productData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{product.id ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
        required
      />
      <button type="submit">{product.id ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
