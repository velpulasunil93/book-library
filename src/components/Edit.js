import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom';

function Edit() {
  let {id} = useParams();
  let [title, setTitle] = useState();
  let[name, setName] = useState();
  let[isbn, setISBN] = useState();
  let[price, setPrice] = useState();
  
   
  useEffect(() =>{
    axios.get('http://localhost:4500/members/'+id).then((res)=>{
      setTitle(res.data.title);
      setName(res.data.name);
      setISBN(res.data.isbn);
      setPrice(res.data.price);
      
    }).catch(() =>{
    })
  },[]);
  let nav = useNavigate();

  const updateMember = (e) =>{
    e.preventDefault();

  axios.put('http://localhost:4500/members/'+id, {title,name,isbn,price}).then(() =>{
    nav("/view");
    alert("Update succesfully")
  }).catch((err) =>{
      alert(err);
  });
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
        <h2>#EditBook</h2>

        <form  onSubmit={updateMember} className='bo' >
            <input type="text"  placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} defaultValue={title}/><br />
            <input type="text"  placeholder='Author Name' onChange={(e) => setName(e.target.value)}  defaultValue={name}/><br />
            <input type="text"  placeholder='ISBN number' onChange={(e) => setISBN(e.target.value)} defaultValue={isbn}/><br />
            <input type="text"  placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} defaultValue={price}/><br />
           
            <input type="submit"  className='btn'/>
        </form>
    </div>
    </div>
    </div>
  )
}


export default Edit;
