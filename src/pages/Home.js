import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import View from './View'
import axios from 'axios';
function Home() {


  const [showMenu, setShowMenu] = useState(false);

  let[members, setMembers] = useState();
  useEffect(() => {
   axios.get('http://localhost:4500/members')
   .then((res)=>{
     console.log(res);
     setMembers(res.data);
   }).catch((err) =>{
   alert(err);
   })
  });  

  
   
 
  
  
  return (
    <div>
    <div className='background'>
    <div className='container'>
    <div className='home'>
        <div className='logo'>
            <h1>BOOK LIBRARY</h1>
        </div>

        <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            ☰
          </button>

          {/* {showMenu && ( */}
  <div className="home-content">
    <Link to="/">Home</Link>
    <Link to="/add">Add Book</Link>
    <Link to="/view">View Books</Link>
  </div>



    </div>    


    </div>
    </div>
    <div/>
    <div className="book">
      <h1>Welcome to Home book</h1>
    </div>
    <div className='container'>
    <div className='text-center'>
      <h1>Latest Data</h1>
    </div>
      <div className='grid'>
     {
      members && members.map((el) => {
        return(
          <div>
            <h1>Title:{el.title}</h1>
            <h3>Author:{el.name}</h3>
            <h5>Price:{el.price}</h5>
          </div>
        )
      })
     }


    
    
   
      </div>
    </div>
    </div>

    
  )

}



export default Home
