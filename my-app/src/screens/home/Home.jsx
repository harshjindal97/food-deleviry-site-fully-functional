import React from 'react'
import './homes.css';
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Crousal from '../../components/crousal/Crousel';

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>

      <div><Crousal/></div>

      <div><Card/></div>

      <div><Footer/></div>

    </div>

    
  )
}
