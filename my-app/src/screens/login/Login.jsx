import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom';

export default function Login() {

  const [credentials , setCredentials] = useState({password:'' , email:''});
  let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/loginUser",{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({password: credentials.password, email: credentials.email})
    })
        const json = await response.json();
        console.log(json);

        if(!json.success) {
            alert('Enter Valid credentials');
        }
        if(json.success) {
          console.log(localStorage);
          localStorage.setItem("authToken" , json.auth);
          console.log(localStorage.getItem("authToken"));
          navigate("/");
        }
    };

    const onChange = (event)=>{
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }

  return (
    <div>
      <div className='signup'>
      <section className="h-100 h-custom" style={{backgroundColor: "#FAEBD7"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3 signup">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/34/8e/ce/landscape-restaurant.jpg"
            className="w-100" alt=''/>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login Info</h3>

            <form className="px-md-2" onSubmit={handleSubmit}>

              
              <div className="form-outline mb-4">
                <input type="text" id="form3Example" className="form-control" name='email' value={credentials.email} onChange={onChange}/>
                <label className="form-label" htmlFor="form3Example1q">Email Address</label>
              </div>
              

              <div className="row">
                <div className="col-md-6 mb-4">

                  

                </div>
                
              </div>

              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div className="form-outline">
                    <input type="password" id="form3Example1" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
                    <label className="form-label" htmlFor="form3Example1w">Password</label>
                  </div>

                </div>
              </div>

              <button type="submit" className="btn btn-success btn-lg mb-1">Sign in</button>
              <Link to="/signup" className="btn mb-1 ms-2" >Signup</Link>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
  )
}
