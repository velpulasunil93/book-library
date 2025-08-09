import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Add() {
  let [title, setTitle] = useState();
  let[name, setName] = useState();
  let[isbn, setISBN] = useState();
  let[price, setPrice] = useState();
  
  let nav = useNavigate();
  let navigate = useNavigate();

  const add = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:4500/members',{title,name,isbn,price})
    .then(function(){
      nav("/members");
      alert("Data added");
      navigate("/view")
    }).catch(function(err){
      alert("err");
    },[])
  }


  return (
    <div>
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
        </div>

        <div className='container'> 
        <div className='box'> 
        <h2>#AddBook</h2>
        <form onSubmit={add} className='bo' >
            <input type="text"  placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} required defaultValue={title}/><br />
            <input type="text"  placeholder='Author Name' onChange={(e) => setName(e.target.value) } required defaultValue={name}/><br />
            <input type="text"  placeholder='ISBN number' onChange={(e) => setISBN(e.target.value)} required defaultValue={isbn}/><br />
            <input type="text"  placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} required defaultValue={price}/><br />
           
            <input type="submit"  className='btn'/>
        </form>
        </div>
        </div>
        </div>
        


   
  )
}

export default Add
