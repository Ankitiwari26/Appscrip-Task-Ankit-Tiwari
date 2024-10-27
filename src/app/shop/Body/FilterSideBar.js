"use client"

import React, { useState } from 'react'

export default function FilterSideBar() {
    const [toggle, setToggle] = useState(false);
    return (
        <div style={{
            width: "240px",
            height: "846px",
            //border: "1px solid #ddd",
            marginTop: "0px",
        }}>

            <div style={{
                width: "240px",
                height: '22px',
                gap: "8px",
                display: "flex",
            }}>
                <div>
                    <input type='checkbox' />
                </div>
                <div style={{
                    fontFamily: "Simplon Norm",
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "21.6px",
                    textAlign: "left",
                }}>Customizable</div>
            </div>
            <div>
                <div style={{ display: "flex", flexDirection: "column" }} onClick={() => setToggle((prev) => !prev)}>
                    <div style={{
                        height: "22px",
                        fontFamily: "Simplon Norm",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "21.6px",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        border: "1px solid #ddd",
                    }}>

                        <div >IDEAL FOR</div>
                        <div style={{ paddingRight: "5px" }}><img src="/Assest/DownArrow.png" /></div>

                    </div>
                    {
                        toggle &&
                        <div>
                            <div style={{ display: 'flex' }}>
                                <input type='checkbox' />
                                Men
                            </div>
                            <div style={{ display: 'flex' }}>
                                <input type='checkbox' />
                                Women
                            </div>
                            <div style={{ display: 'flex' }}>
                                <input type='checkbox' />
                                Baby and Kids
                            </div>
                        </div>
                    }
                </div>
                <div style={{
                    height: "16px",
                    gap: "0px",
                    fontFamily: "Simplon Norm",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "21.6px",
                    textAlign: "left",
                }}></div>
            </div>
        </div>
    )
}
