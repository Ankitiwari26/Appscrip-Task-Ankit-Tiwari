"use client"
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Products = () => {
    const [products, setProducts] = useState([]);

    // Function to fetch products
    const getProducts = async () => {
        try {
            console.log("Calling API...");
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data); // Set fetched data in state
            console.log("Fetched Products:", data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // useEffect to fetch data on component mount
    useEffect(() => {
        getProducts();
    }, []); // Empty dependency array means this effect runs only once

    return (
        <div style={{
            display: "flex",
            width: "calc(100% - 240px)",
            flexWrap: "wrap",

        }}>
            {/* Displaying Products */}
            {products.length > 0 ? (
                products.map((product) => (
                    <Card key={product.id} product={product} />

                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default Products;
