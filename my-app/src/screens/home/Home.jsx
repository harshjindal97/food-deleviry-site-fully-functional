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
          <div>
            {data.CategoryName}
            
          </div>
          )
        }):<div>not able to show categories</div>


       


      }

        <Card/>
      </div>

      <div><Footer/></div>

    </div>

    
  )
}
