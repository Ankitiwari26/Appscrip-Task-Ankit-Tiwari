import React from 'react'
import '../../../public/CSS/Header.css';


const Header = () => {
    return (
        <div className='header'>
            <div style={{
                width: "100%", padding: "0 50px", display: "flex",
                flexDirection: "column",
                justifyContent: "space-around"
            }}>
                <div style={{
                    display: "flex", width: "100%", justifyContent: 'space-between'
                }
                }>
                    <div >
                        <img src="/Assest/LogoIcon.jpg" alt="Logo" />
                    </div>
                    <div >
                        <img src="/Assest/Logo.jpg" alt="Logo" />
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center"
                    }}>
                        <div><img src="/Assest/search-normal.png" alt="Logo" /></div>
                        <div><img src="/Assest/Wishlist.jpg" alt="Logo" /></div>
                        <div><img src="/Assest/ShoppingBag.jpg" alt="Logo" /></div>
                        <div><img src="/Assest/profile.jpg" alt="Logo" /></div>
                        <div><img src="/Assest/Language.png" alt="Logo" /></div>
                    </div>

                </div>
                <div style={{
                    display: "fLex", alignItems: "center", width: "100%", justifyContent: "center", gap: "64px",
                    fontFamily: "Simplon Norm",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    letterSpacing: '1px',
                    textAlign: 'left',
                    color: "#252020",
                }}>

                    <a href="">SHOP</a>
                    <a href="skills">SKILLS</a>
                    <a href="stories">STORIES</a>
                    <a href="about">ABOUT</a>
                    <a href="contact">CONTACT US</a>

                </div>
            </div>
        </div>
    )
}

export default Header