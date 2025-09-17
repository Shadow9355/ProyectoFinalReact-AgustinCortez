// services/products.js
import data from "../data/productos.json";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); 
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.find(p => p.id === parseInt(id)));
    }, 1000);
  });
};
