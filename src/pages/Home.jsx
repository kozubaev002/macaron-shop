import React from 'react'
import "./Home.scss"
import img1 from "../assets/image/image1.png"
import img2 from "../assets/image/image2.png"
import img3 from "../assets/image/image3.png"
import img4 from "../assets/image/image4.png"
import img5 from "../assets/image/image5.png"

function Home() {
    return (
        <div className='home'>
            <div className='home-content'>
                <ul>
                    <li>КОНТАКТЫ</li>
                    <li>Собрать Набор</li>
                    <li>СЛАДКИЕ ДНИ</li>
                </ul>
                <div style={{ border: "1px solid rgb(0, 0, 0)", width: "179px" }}></div>

                <img src={img1} alt="" />
                <div style={{ border: "1px solid rgb(0, 0, 0)", width: "179px" }}></div>

                <ul style={{ marginLeft: '50px' }}>
                    <li>Подарочные Наборы</li>
                    <li>ГАРАНТИЯ СВЕЖЕСТИ</li>
                </ul>
            </div>

            <div style={{ background: " rgb(247, 247, 247)", marginTop: "17px", height: "475px" }}>
                <img style={{ width: "1440px", height: "497px", objectFit: "cover", }} src={img2} alt="" />

                <div className='begraunt'>
                    <div className='div1' style={{ display: "flex", flexDirection: 'column', alignItems: "center", width: "272px", height: "48px" }}>
                        <h3>Macaronshop</h3>
                        <p>since 2013</p>
                    </div>
                    <h2>Настоящая любовь</h2>
                    <div className='e'>
                        <h4>Пирожные макарон и другие десерты
                            из натуральных ингредиентов, приготовленные с любовью </h4>
                    </div>
                </div>


            </div>


            <div style={{background:"rgb(247, 247, 247)"}}>
                <div className='card-content'>
                    <div className='card'>
                        <div style={{ display: "flex", justifyContent: "center", paddingTop: "36px" }}>
                            <div className='icon'>
                                <img src={img3} alt="" />
                            </div>
                        </div>

                        <h2>Готовые наборы →</h2>
                        <p>Готовые наборы со скидкой. <br /> Вы можете подобрать набор на подходящий случай.</p>
                    </div>

                    <div style={{ background: "rgb(255, 194, 204)", opacity: "0.8" }} className='card'>
                        <div style={{ display: "flex", justifyContent: "center", paddingTop: "36px" }}>
                            <div className='icon'>
                                <img src={img4} alt="" />
                            </div>
                        </div>

                        <h2> Собрать свой набор → </h2>
                        <p>Выбрать количество макарун, и выбрать вкусы</p>
                    </div>
                </div>

                <div className='card1'>
                    <div className='card'>
                        <div style={{ display: "flex", justifyContent: "center", paddingTop: "36px" }}>
                            <div className='icon'>
                                <img style={{ width: "48px", height: "64px" }} src={img5} alt="" />
                            </div>
                        </div>

                        <h2>Свадебные предложения →</h2>
                        <p> Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
