import React , {useState , useEffect} from 'react'
import './homes.css';
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Crousal from '../../components/crousal/Crousel';

export default function Home() {

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

      <div><Crousal/></div>

      <div>

      {
        foodcategory!==[]
        ?foodcategory.map((data)=>{
          return(
          <div className='m-3 row'>
            <div className='design row' key={data._id}><h3>{data.CategoryName}</h3></div>
            <hr />
            {foodItem!==[]
            ?foodItem.filter(items=>items.CategoryName === data.CategoryName).map((filterItem)=>{
              return(
                <div className='design_card  col-sm-6 col-12 col-md-4 col-lg-3 '>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3' key={filterItem._id}><Card foodName={filterItem.name}
                imgsrc={filterItem.img}
                options={filterItem.options}></Card></div>
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
