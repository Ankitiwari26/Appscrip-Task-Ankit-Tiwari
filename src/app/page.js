// "use client"
// import React from 'react'

// const Home = () => {
// const [openProductPage, setOpenProductPage] = useState(false);
//     return (
//         <div>
//             <button style={{

//             }} 
//             onClick={()=>{setOpenProductPage((prev)=>!prev)}}>Click Here to open Product Page</button>
//         </div>
//     )
// }

// export default Home

"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const Home = () => {
    const [openProductPage, setOpenProductPage] = useState(false);
    const router = useRouter(); // Initialize the router

    const handleButtonClick = () => {
        setOpenProductPage((prev) => !prev);
        router.push('/shop'); // Redirect to the "shop" page
    };

    return (
        <div>
            <button
                style={{
                    color: "gold",
                    background: "black",
                    borderRadius: "10px"
                }}
                onClick={handleButtonClick}
            >
                Click Here to open Product Page
            </button>
        </div>
    );
};

export default Home;
