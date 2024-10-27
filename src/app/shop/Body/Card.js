// import React from 'react'

// export default function Card({ product }) {
//     return (
//         <div style={{
//             width: "150px",
//             height: "210px",
//             top: "652px",
//             left: "728px",
//             border: "1px solid #ddd",
//             marginTop: "5px",
//             marginLeft: "40px",
//         }}>

//             <div style={{
//                 width: "149px",
//                 height: "180px",
//             }}>
//                 <img src={product?.image} alt={product?.title || "Product Image"} />
//             </div>
//             <div style={{
//                 width: "150px",
//                 height: "30px",
//                 top: "415px",
//                 gap: "8px",
//             }}>
//                 <div style={{
//                     width: "120px",
//                     height: "18px",
//                     fontFamily: "Simplon Norm",
//                     fontSize: "18px",
//                     fontWeight: "500",
//                     lineHeight: "21.6px",
//                     textAlign: "left",
//                     color: "#252020",
//                 }}>{product.title}</div>

//                 <div style={{ display: "flex" }}>
//                     <div style={{
//                         width: "140px",
//                         height: "13px",
//                         fontFamily: "Simplon Norm",
//                         fontSize: "14px",
//                         fontWeight: "400",
//                         lineHeight: "16.8px",
//                         textAlign: "left",
//                         color: "#888792",
//                     }}>{product.description}
//                     </div>
//                     <div style={{
//                         width: "14px",
//                         height: "14px",
//                         border: "1.5px solid #292D32"
//                     }}>
//                         <img src="/Assest/heart.png" />
//                         {/*wishlist*/}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



import React from 'react';

export default function Card({ product }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            //border: "1px solid #ddd",
            marginTop: "5px",
            marginLeft: "40px",
            height: "fit-content"
        }}>

            <div style={{
                width: "149px",
                height: "180px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img
                    src={product?.image}
                    alt={product?.title || "Product Image"}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
            </div>

            <div style={{
                padding: "5px",
                gap: "8px",
            }}>
                <div style={{
                    width: "120px",
                    height: "auto",
                    fontFamily: "Simplon Norm",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "21.6px",
                    textAlign: "left",
                    color: "#252020",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }}>
                    {product?.title || "No Title"}
                </div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <div style={{
                        width: "120px",
                        fontFamily: "Simplon Norm",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "16.8px",
                        textAlign: "left",
                        color: "#888792",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}>
                        {product?.description || "No Description"}
                    </div>
                    <div style={{
                        width: "14px",
                        height: "14px",
                        //border: "1.5px solid #292D32",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "8px",
                    }}>
                        <img src="/Assest/heart.png" alt="Wishlist" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
