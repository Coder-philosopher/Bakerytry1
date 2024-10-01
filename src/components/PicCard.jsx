import React, { useState } from "react";
import pastry1 from "./images/pastry1.jpg";
import pastry2 from "./images/pastry2.jpg";
import pastry3 from "./images/pastry3.jpg";
import pastry4 from "./images/pastry4.jpg";
import pastry5 from "./images/pastry5.jpg";
import pastry6 from "./images/pastry6.jpg";
import pastry7 from "./images/pastry7.jpg";
import pastry8 from "./images/pastry8.jpg";
import pastry9 from "./images/pastry9.jpg";
import pastry10 from "./images/pastry10.jpg";
import pastry11 from "./images/pastry11.jpg";
import pastry12 from "./images/pastry12.jpg";
import pastry13 from "./images/pastry13.jpg";
import pastry14 from "./images/pastry14.jpg";
import pastry15 from "./images/pastry15.jpg";

// Sample product data
const products = [
  { id: 1, name: "Product 1", price: "$15", image: pastry1 },
  { id: 2, name: "Product 2", price: "$25", image: pastry2 },
  { id: 3, name: "Product 3", price: "$30", image: pastry3 },
  { id: 4, name: "Product 4", price: "$40", image: pastry4 },
  { id: 5, name: "Product 5", price: "$50", image: pastry5 },
  { id: 6, name: "Product 6", price: "$60", image: pastry6 },
  { id: 7, name: "Product 7", price: "$610", image: pastry7 },
  { id: 8, name: "Product 8", price: "$620", image: pastry8 },
  { id: 9, name: "Product 9", price: "$260", image: pastry9 },
  { id: 10, name: "Product 10", price: "$6320", image: pastry10 },
  { id: 11, name: "Product 11", price: "$260", image: pastry11 },
  { id: 12, name: "Product 12", price: "$640", image: pastry12 },
  { id: 13, name: "Product 13", price: "$650", image: pastry13 },
  { id: 14, name: "Product 14", price: "$660", image: pastry14 },
  { id: 15, name: "Product 15", price: "$660", image: pastry15 },
];

const ProductCard = () => {
  // State to track quantities for each product
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0; // Default quantity is 1 for each product
      return acc;
    }, {})
  );

  // Function to handle increment of quantity
  const incrementQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  // Function to handle decrement of quantity
  const decrementQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] > 1 ? prev[productId] - 1 : 0,
    }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden p-4"
        >
          {/* Product Image */}
          <div className="h-48 w-full overflow-hidden rounded-lg ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:cursor-pointer"
            />
          </div>

          {/* Product Info */}
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>

            {/* Quantity Selector */}
            <div className="flex justify-center items-center mt-3 space-x-3">
              <button
                onClick={() => decrementQuantity(product.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg">{quantities[product.id]}</span>
              <button
                onClick={() => incrementQuantity(product.id)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="mt-4 w-full bg-[#7f6137] text-white py-2 rounded-lg hover:bg-opacity-90">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
