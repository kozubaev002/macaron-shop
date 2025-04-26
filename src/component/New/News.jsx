import React from 'react'
import "./News.scss"
import {news} from "../../data"

function News() {
  return (
    <div className='news'>
       {
        news.map((item) => (
            <div className='content' key={item.id}>
                <img src={item.img} alt="" />
                <div className='content-text'>
                    <h6>{item.number}</h6>
                    <h5>{item.title}</h5>
                    <h4>{item.p} </h4>
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default News
