import React from 'react'
import "./Header.scss"
import svg7 from "../../assets/svg/7.svg"
import bag from "../../assets/svg/bag.svg";
import img1 from "../../assets/image/image1.png"

function Header() {
    return (
        <div className='adaptivka'>
            <div className='adaptivka-content'>
                <img className='img2' src={svg7} alt="" />
                <img className='img' src={img1} alt="" />

                <div className='divs'>
                    <img src={bag} alt="" />
                    <span>4</span>
                </div>
            </div>
        </div>
    )
}

export default Header
