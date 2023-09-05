import React from 'react'
import './cards.css'
// import {cheeserolls} from '.../src/cheeserolls.png';
export default function Card(props) {
  return (
    <div>
      <div>
        <div className='orderbox'>
          <div className='orderbox_image'><img src={props.imgsrc} alt="img" /></div>
          <div className='orderbox_body'>
            <h5>{props.foodName}</h5>
            {/* <p>This is a card pattern.</p> */}
            <div className='orderbox_body_select'>
                <select className='select'>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
                <select className='select'>
                    <option value="">half</option>
                    <option value="">full</option>
                </select>
                <div className='orderbox_body_select-price'>Total price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
