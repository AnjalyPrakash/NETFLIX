import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Banner.css'

function Banner({fetchURL}) {

  const[allBanner,setAllBanner]=useState()
// console.log(fetchURL);
const base_url = "https://image.tmdb.org/t/p/original/";


  const fetchData=async()=>{
   const {data}= await instance.get(fetchURL)
  //  console.log(data.results);
  setAllBanner(data.results[Math.floor(Math.random()*data.results.length)])
  }
  console.log(allBanner);

  useEffect(()=>{
      fetchData()
  },[])


  return (
    <div style={{height:'600px',backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:"fixed",backgroundImage:`url(${base_url}${allBanner?.backdrop_path})`}}>
      <div className='banner-content'>
          <h1 className='mb-3'>{allBanner?.name}</h1>
          <button className='btn btn-danger me-4'>Play <i class="fa-solid fa-play"></i></button>
          <button className='more btn border-light '>More Info <i class="fa-solid fa-caret-down "></i></button>
          <h2>{allBanner?.overview.slice(0,200)}...</h2>
      </div>
    </div>
  )
}

export default Banner