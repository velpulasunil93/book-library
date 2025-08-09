import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'

function View() {
   let[members, setMembers] = useState();
   let nav = useNavigate();
   useEffect(() => {
    axios.get('http://localhost:4500/members')
    .then((res)=>{
      console.log(res);
      setMembers(res.data);
    }).catch((err) =>{
    alert(err);
    })
   });  
    
  
   
   const deletemember = (id) =>{
   axios.delete('http://localhost:4500/members/'+id)
        .then (() =>{
            alert("Deleted scuccesfull");
        }).catch(() =>{
            alert("someting wrong");
        });
      }
      
     

      const editmember = (id) =>{
      
        nav("/edi/"+id);
       }

   
  
  return (

    <div>
    <div className='background'>
    <div className='container'>
    <div className='home'>
        <div className='logo'>
            <h1>BOOK LIBRARY</h1>
        </div>
    <div className='home-content'>
    <Link to="/">Home</Link>
     <Link to="/add">Add Book</Link>
     <Link to="/view">View Books</Link>
      
      </div>
    </div>
    </div>
    </div>

    <div className='view'>
     <h1 >View Books</h1>
    </div>
    <table>
      <tr >
        <td><h4>Title</h4></td>
        <td><h4>Author</h4></td>
        <td><h4>ISBN</h4></td>
        <td><h4>Price</h4></td>
        <td><h4 className='act'>Actions</h4></td>
      </tr>
      { 
       members && members .map((el) => {
        return(
          
            <tr>
              <td>{el.title}</td>
              <td>{el.name}</td>
              <td>{el.isbn}</td>
              <td>{el.price}</td>
              <td>
              <button className='btnn' onClick={() => editmember(el.id)}>Edit</button>
              <button className='bt'  onClick={() => deletemember(el.id)}>Delete</button>
              </td>
            </tr>
          
  
          
        )
       })
      }
    </table>
    </div>
    
    
  )
  
}


export default View
