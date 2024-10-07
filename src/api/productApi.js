import axios from "axios";

const API_URL = "http://localhost:3001/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const updateProduct = async (productId, updatedProduct) => {
  await axios.put(`${API_URL}/${productId}`, updatedProduct, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteProduct = async (productId) => {
  await axios.delete(`${API_URL}/${productId}`);
};
