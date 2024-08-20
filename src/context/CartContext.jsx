import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Initialize as an empty array

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    return prevCart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                    );
                } else {
                    return prevCart.filter((item) => item.id !== product.id);
                }
            }
            return prevCart; // Return the previous cart state if the product is not found
        });
    };
    
    const checkOut = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, checkOut,removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
