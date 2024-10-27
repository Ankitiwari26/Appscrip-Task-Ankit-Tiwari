"use client"
import React, { useState } from 'react'
import Header from './Header'
import { Body } from './Body/Body'
import FilterSideBar from './Body/FilterSideBar'
import Footer from './Footer'
import Products from './Body/Products'

const Shop = () => {
    const [showFilter, setShowFilter] = useState(true)
    return (<div>

        <Header />
        <Body setShowFilter={setShowFilter} />
        <div style={{ display: "flex" }}>
            {showFilter && <FilterSideBar />}
            <Products style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column"
            }} />
        </div>
        <Footer />
    </div>)

}

export default Shop