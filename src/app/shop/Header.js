import React from 'react'
import '../../../public/CSS/Header.css';
import Image from 'next/image';


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

                    <a href="shop">SHOP</a>
                    <a href="skills">SKILLS</a>
                    <a href="stories">STORIES</a>
                    <a href="about">ABOUT</a>
                    <a href="contact">CONTACT US</a>

                </div>
            </div>
            {/* <div className='main-logo'>
            </div>
            <div className='logo-image'>
                <Image src="/Assest/LogoIcon.jpg" alt="Logo" width={35.61} height={35.66} />
            </div>
            <div className='logo'>
                <Image src="/Assest/Logo.jpg" alt="Logo" width={107} height={44} />
            </div>

            <div className='icons'>
                <Image src="/Assest/search-normal.png" alt="Logo" width={24} height={24} />
                <Image src="/Assest/Wishlist.jpg" alt="Logo" width={24} height={24} />
                <Image src="/Assest/ShoppingBag.jpg" alt="Logo" width={24} height={24} />
                <Image src="/Assest/profile.jpg" alt="Logo" width={24} height={24} />
                <Image src="/Assest/Language.png" alt="Logo" width={52} height={16} />
            </div>

            <div className='tabs'>
                <nav>
                    <a href="shop">SHOP</a>
                    <a href="skills">SKILLS</a>
                    <a href="stories">STORIES</a>
                    <a href="about">ABOUT</a>
                    <a href="contact">CONTACT US</a>
                </nav>
            </div> */}



        </div>
    )
}

export default Header