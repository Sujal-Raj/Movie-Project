import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3f8b4fc1";
  const [data, setData] = useState([]);
  const [searchValue, setsearchValue] = useState("superman");


  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data  = await response.json();
    const dataArray = data.Search;

    // console.log(dataArray);
    setData(dataArray);
  }
  // console.log(data)

  // useEffect(()=>{
  //   searchMovies(searchValue);
  // },[])

  const runSearch= ()=>{
    searchMovies(searchValue);
  }

  return (
    <>

    <div id="main" className='bg-zinc-900 text-white'>
    <h1 className=' text-center font-bold text-6xl bg-gradient-to-r from-blue-200 via-yellow-100  to-orange-300 text-transparent  bg-clip-text'>MovieLand</h1>
    <div className="search flex justify-center items-center mt-8">
    <div className='border border-white-900 rounded-xl inline-block ml-5 p-3'>
      <input  type="text" placeholder="Search Movies" className='border border-none focus:outline-none focus:ring-0 h-[100%] rounded-xl mr-2 text-zinc-900 px-2' value={searchValue} onChange={(e)=>{setsearchValue(e.target.value)}}/>
      <button className='border border-white px-2 rounded-xl' onClick={runSearch}>Search</button>
    </div>
    </div>
     

     <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 p-5'>
     {data.map((items,index)=>{
        return (
            
            <div key={index} className="movie-card border border-zinc-500 w-[350px] text-center rounded-xl m-2">
                <img className='w-[90%] m-auto' src={items.Poster} alt={items.Title} />
                <h4 className=' capitalize opacity-40 font-bold'>{items.Type}</h4>
                <h1 className='text-2xl'>{items.Title}</h1>
                <h3>{items.Year}</h3>
            </div>
          
        )
      })}
     </div>
    </div>
    </>
  )
}

export default App
