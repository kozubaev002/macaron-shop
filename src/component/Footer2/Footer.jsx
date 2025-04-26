import React from 'react'
import "./Footer.scss"
import svg8 from "../../assets/svg/8.svg"
import svg9 from "../../assets/svg/9.svg"
import svg10 from "../../assets/svg/10.svg"
import svg11 from "../../assets/svg/11.svg"
import svg12 from "../../assets/svg/12.svg"
import svg13 from "../../assets/svg/13.svg"

function Footer() {
    return (
        <div className='class'>
            <div className="class-name">
                <div className="footer-item">
                    <img src={svg8} alt="" />
                    <p>Готовим вручную и с любовью</p>
                </div>
                <div className="footer-item">
                    <img src={svg9} alt="" />
                    <p>Доставим в день заказа</p>
                </div>
                <div className="footer-item">
                    <img src={svg10} alt="" />
                    <p>100% <br /> миндальная мука и натуральные ингредиенты</p>
                </div>
            </div>

            <div className='content'>
                <p>© 2021 Макароншоп ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, 22
                </p>
                <div>
                    <h3>+7 (812) 309 82 88</h3>
                    <p>с 9:00 до 21:00</p>
                </div>
            </div>

            <div className='imgs'>
                <img src={svg11} alt="" />
                <img src={svg12} alt="" />
                <img src={svg13} alt="" />
            </div>
        </div>
    )
}

export default Footer
