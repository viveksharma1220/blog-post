import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import React from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import './index.css'

function App() {
  const {fetchBlogPost}=useContext(AppContext)

  useEffect(()=>{
    fetchBlogPost();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center bg-yellow-200'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
