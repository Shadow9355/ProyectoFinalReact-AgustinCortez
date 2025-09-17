// services/products.js
import data from "../Public/productos.json";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); 
  });
};