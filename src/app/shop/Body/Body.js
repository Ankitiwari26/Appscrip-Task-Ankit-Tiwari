import React from 'react'
import FilterSideBar from './FilterSideBar'
import ItemQuantity from './ItemQuantity'
import Recommendation from './Recommendation'

export const Body = ({ setShowFilter }) => {
    return (
        <div>
            <div style={{

                height: "168px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0px",
                flexDirection: "column"
            }}>
                <div style={{
                    height: "72px",
                    fontFamily: "Simplon Norm",
                    fontSize: "60px",
                    fontWeight: "400",
                    lineHeight: "72px",
                    letterSpacing: "1px",
                    textAlign: "center",
                    color: "#252020",

                }}>DISCOVER OUR PRODUCTS</div><div style={{
                    fontFamily: "Simplon Norm",
                    fontSize: "22px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    textAlign: "center",
                    colour: "#252020",
                    maxWidth: "721px"

                }}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</div>
            </div>

            <div style={{
                width: "100%",
                height: "50px",
                display: "flex",
                border: "1px solid #E5E5E5",
                alignItems: "center",
                alignItems: "center",
                gap: "66px",
            }}>
                <ItemQuantity style={{
                    paddingLeft: "20px"
                }} />

                <div style={{
                    display: "flex",
                    marginRight: "800px",
                    color: "#ddd",
                    display: "flex",
                    color: "#ddd",
                    alignitems: "center",
                    gap: "2px"
                }} onClick={() => setShowFilter((prev) => !prev)}>

                    <div><img src="/Assest/Vector.jpg" /></div>
                    <div style={{
                        fontFamily: "Adobe Caslon Pro",
                        fontSize: "16px",
                        fontWeight: "400",
                        textAlign: "right",

                    }}>HIDE FILTER</div>
                </div>
                <Recommendation />


            </div>
        </div >
    )
}
