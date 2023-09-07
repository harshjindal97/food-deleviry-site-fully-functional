import React , {useState , useEffect} from 'react'
import './homes.css';
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

import rolls from '../../components/crousal/rolls.png';
import pizza from '../../components/crousal/pizza.png';
import burger from '../../components/crousal/burger.png';
// import Crousal from '../../components/crousal/Crousel';

export default function Home() {
  const [search , setSearch] = useState('');
  const [foodcategory , setfoodcategory] = useState([]);
  const [foodItem , setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:8000/api/foodData" , {
      method:'POST',
      headers: {'Content-Type': 'application/json'}
      
    });
    response = await response.json();
    setfoodItem(response[0]);
    setfoodcategory(response[1]);
  };

  useEffect(() => {
    loadData()
  },
  []);



  return (
    <div>
      <div><Navbar/></div>

      <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className='carousel-caption' style={{zIndex:"3"}}>
    <div className="form-inline display  buttonName">
    <input className="form-control mr-sm-2 carousel_search" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
      setSearch(e.target.value);
    }}/>
    <button className="btn btn-outline-success my-2 my-sm-0 search_button" type="submit">Search</button>
  </div>
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
</div></div>

      <div>

      {
        foodcategory!==[]
        ?foodcategory.map((data)=>{
          return(
          <div className='m-3 row'>
            <div className='design row' key={data._id}><h3>{data.CategoryName}</h3></div>
            <hr />
            {foodItem!==[]
            ?foodItem.filter(items=>(items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase()))).map((filterItem)=>{
              return(
                <div className='design_card  col-sm-6 col-12 col-md-4 col-lg-3 '>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3' key={filterItem._id}><Card foodName={filterItem.name}
                imgsrc={filterItem.img}
                options={filterItem.options[0]}></Card></div>
                </div>
              )
            }):<div>not able to show data</div>
          }
            
          </div>
          )
        }):<div>not able to show categories</div>


       


      }

        
      </div>

      <div><Footer/></div>

    </div>

    
  )
}
