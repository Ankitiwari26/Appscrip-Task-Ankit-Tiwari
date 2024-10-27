// import React from 'react'

// const Recommendation = () => {
//     return (
//         <div>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 marginLeft: "20px",
//                 fontFamily: "Simplon Norm",
//                 fontSize: "18px",
//                 fontWeight: "700",
//                 lineHeight: "40px",
//                 textAlign: "left",
//             }}>RECOMMENDED</div>

//         </div>
//     )
// }

// export default Recommendation
"use client"

import React, { useState } from "react";

const Recommendation = () => {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div style={{
            position: "absolute",
            right: "79px"
        }}>
            {/* "RECOMMENDED" text acting as dropdown trigger */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "Simplon Norm",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "40px",
                    textAlign: "left",
                    cursor: "pointer", // Add pointer cursor to indicate clickable element
                }}
                onClick={handleDropdownToggle}
            >
                RECOMMENDED
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                    style={{
                        marginTop: "5px",
                        padding: "10px",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "4px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        width: "200px",
                        position: "absolute",
                        zIndex: "1",
                    }}
                >
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>Newest First</li>
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>Popular</li>
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>Price: High to Low</li>
                        <li style={{ padding: "8px 0", cursor: "pointer" }}>Price: Low to High</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Recommendation;
