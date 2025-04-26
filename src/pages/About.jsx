import React from 'react'
import "./About.scss"
import img2 from "../assets/image/image2.png"
import svg14 from "../assets/svg/14.svg"
import img6 from "../assets/image/image6.png"
import img7 from "../assets/image/image7.png"
import img8 from "../assets/image/image8.png"
import img9 from "../assets/image/image9.png"
import img10 from "../assets/image/image10.png"
import svg15 from "../assets/svg/15.svg"
import svg16 from "../assets/svg/16.svg"
import img11 from "../assets/image/image11.png"
import img12 from "../assets/image/image12.png"
import img13 from "../assets/image/image13.png"
import img14 from "../assets/image/image14.png"
import img15 from "../assets/image/image15.png"
import img16 from "../assets/image/image16.png"
import svg17 from "../assets/svg/17.svg"

function About() {
  return (
    <div className='about'>
      <div className='div1'>
        <h1>Macaronshop</h1>
        <div className='line-around'>
          <span>since 2013</span>
        </div>
      </div>

      <div className='div2'>
        <h2>Настоящая любовь</h2>
        <p>Пирожные макарон и другие десертыиз натуральных ингредиентов, приготовленные с любовью</p>

        <div style={{ display: "flex", justifyContent: "center", }}>
          <img style={{ width: "320px", height: "300px", objectFit: "cover", objectPosition: "20% 50%" }} src={img2} alt="" />
        </div>

      </div>

      <div className='div3'>
        <div className='title-line'>
          <p>Готовые наборы</p>
          <img src={svg14} alt="" />
        </div>
        <div className='title-line'>
          <p>Собрать свой набор</p>
          <img src={svg14} alt="" />
        </div>
        <div className='title-line'>
          <p>Свадебные предложения</p>
          <img src={svg14} alt="" />
        </div>
      </div>

      <p className='p'>Акции</p>

      <div className='div4'>
        <img src={img6} alt="" />
        <div className='div4-1'>
          <div style={{ bottom: "-100px", position: "relative", display: "flex", gap: "10px", flexDirection: "column" }}>
            <p>НОВИНКА</p>
            <h2>Наборы на 40 шт <br />от 3600 ₽</h2>
          </div>

        </div>
      </div>

      <div className='div5'>
        <button></button>
        <button></button>
        <button></button>
      </div>


      <h2 className='h2'>Популяные наборы</h2>

      <div className='div6'>
        <div className='div6-1'>
          <img src={img7} alt="" />

          <div className='div6-2'>
            <h3>Сердце</h3>
            <p>24 штуки в коробке в виде сердца. <br />
              Ассорти из 6 вкусов </p>
          </div>


          <div className='div6-3'>
            <div className='line-top'></div>
            <div className='price-img'>
              <p>2800 руб</p>
              <div className='line-vertical'></div>
              <img src={svg15} alt="" />
            </div>
          </div>
        </div>

        <div className='div6-1'>
          <img src={img8} alt="" />

          <div className='div6-2'>
            <h3>Круглый набор</h3>
            <p>40 макаронс в круглой <br /> коробке с персональной надписью </p>
          </div>


          <div className='div6-3'>
            <div className='line-top'></div>
            <div className='price-img'>
              <p>2800 руб</p>
              <div className='line-vertical'></div>
              <img src={svg15} alt="" />
            </div>
          </div>
        </div>

        <div className='div6-1'>
          <img src={img9} alt="" />

          <div className='div6-2'>
            <h3>Набор на 9</h3>
            <p>Набор из 9 штук в <br /> квадратной коробке. Вкусы:  шоколад, фисташка, вишня </p>
          </div>


          <div className='div6-3'>
            <div className='line-top'></div>
            <div className='price-img'>
              <p>950 руб</p>
              <div className='line-vertical'></div>
              <img src={svg15} alt="" />
            </div>
          </div>
        </div>

        <div className='div6-1'>
          <img src={img10} alt="" />

          <div className='div6-2'>
            <h3>Набор на 16</h3>
            <p>Набор 16 шт. Вкусы: <br /> соленая карамель, голубой сыр, пармезан, шоколад  </p>
          </div>


          <div className='div6-3'>
            <div className='line-top'></div>
            <div className='price-img'>
              <p>1500 руб</p>
              <div className='line-vertical'></div>
              <img src={svg15} alt="" />
            </div>
          </div>
        </div>

        <div className='div6-1'>
          <img src={img7} alt="" />

          <div className='div6-2'>
            <h3>Сердце</h3>
            <p>24 штуки в коробке в виде сердца. <br />
              Ассорти из 6 вкусов </p>
          </div>


          <div className='div6-3'>
            <div className='line-top'></div>
            <div className='price-img'>
              <p>2800 руб</p>
              <div className='line-vertical'></div>
              <img src={svg15} alt="" />
            </div>
          </div>
        </div>

        <div className='div6-1'>
          <img src={img8} alt="" />

          <div className='div6-2'>
            <h3>Круглый набор</h3>
            <p>40 макаронс в круглой <br /> коробке с персональной надписью </p>
          </div>


          <div className='div6-3'>
            <div className='line-top'></div>
            <div className='price-img'>
              <p>2800 руб</p>
              <div className='line-vertical'></div>
              <img src={svg15} alt="" />
            </div>
          </div>
        </div>
      </div>

      <button className='button'>Все праздничные наборы</button>

      <img className='im' style={{
        marginTop: "22px",
      }} src={svg16} alt="" />


      <p className='text'>Новости</p>

      <div className='div7'>
        <div className='div7-1'>
          <img src={img11} alt="" />
          <div className='div7-2'>
            <h3>25.02.2023</h3>
            <h2>Скоро главный праздник весны!</h2>
            <p>Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
          </div>
        </div>

        <div className='div7-1'>
          <img src={img12} alt="" />
          <div className='div7-2'>
            <h3>17.02.2023</h3>
            <h2>Конкурс на 23 февраля!</h2>
            <p>День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп</p>
          </div>
        </div>


      </div>

      <div className='buttons'>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", }}>
        <button style={{
          color: " rgb(0, 0, 0)",
          fontFamily: "sans-serif",
          fontSize: "12px",
          fontWeight: "600",
          lineHeight: "15px",
          letterSpacing: "0%",
          textAlign: "center",
          boxSizing: " border-box",
          border: "1px solid rgb(78, 157, 211)",
          borderRadius: "3px",
          width: "130px",
          height: "40px",



        }}>Все новости</button>
      </div>

      <div className='svg'>
        <img src={svg17} alt="" />
      </div>



      <h3 className='h3'>Мы обо всём позаботились</h3>


      <div className='div8'>
        <div className='div8-1'>
          <img src={img13} alt="" />
          <div className='div8-2'>
            <h3>Лучшие ингрединты</h3>
            <p>Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
          </div>
        </div>

        <div className='div8-1'>
          <img src={img14} alt="" />
          <div className='div8-2'>
            <h3>Упаковка</h3>
            <p>Что-то про суперкоробочки и бантики и бла бла бла</p>
          </div>
        </div>

        <div className='div8-1'>
          <img src={img15} alt="" />
          <div className='div8-2'>
            <h3>Получение в день заказа</h3>
            <p>В день заказа доставка курьером или самовывоз</p>
          </div>
        </div>

        <div className='div8-1'>
          <img src={img16} alt="" />
          <div className='div8-2'>
            <h3>Анонимная доставка</h3>
            <p>Можем преподнести Ваш заказ как анонимный <br /> подарок</p>
          </div>
        </div>
      </div>


    </div >


  )
}

export default About
