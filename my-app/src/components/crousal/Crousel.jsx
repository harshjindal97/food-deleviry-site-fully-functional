import React from 'react'
import './crousal.css'
import rolls from './rolls.png';
import pizza from './pizza.png';
import burger from './burger.png'
export default function Crousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className='carousel-caption' style={{zIndex:"3"}}>
    <form className="form-inline display">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    </div>
    <div className="carousel-item active carousel_image">
      <img src={rolls}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item carousel_image">
      <img src={burger} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item carousel_image">
      <img src={pizza} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
