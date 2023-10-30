import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dp from '../../assets/dp.svg'
import poster from '../../assets/poster.svg'
import { fetchFromAPI } from './fetchMovieData'
export default function MovieList() {
const navigate = useNavigate();
    const genreData = JSON.parse(window.localStorage.getItem("genre"))
const handleClick = ()=>{
    navigate("/")
}
  return (
    <div className='' >
         <div className=" flex justify-between m-10">
            <div className='font-single-day text-green-400  text-6xl cursor-pointer' onClick={()=>handleClick()}>Super app</div>
            <div>
                <img src={dp} alt='profilePic' />
            </div>
         </div>

         <div className='mx-14'>
            <h1 className='text-white text-4xl'>Entertainment according to your choice</h1>
            {/* <div className='mt-8'>
                <h1 className='text-gray-400 text-[30px]'>Action</h1>
                <div className='mt-4 flex items-center justify-between'>
                    <img src={poster} alt="poster" className='w-[341.927px] h-[192.334px]'/>
                    <img src={poster} alt="poster" className='w-[341.927px] h-[192.334px]'/>
                    <img src={poster} alt="poster" className='w-[341.927px] h-[192.334px]'/>
                    <img src={poster} alt="poster" className='w-[341.927px] h-[192.334px]'/>
                </div>
            </div> */}

           {genreData.map((item,index)=>(
<div key={index} className='mt-8'>
                <h1 className='text-gray-400 text-[30px]'>{item}</h1>
                <div className='mt-4 flex items-center justify-between'>
                    
                <GenreCard genreName = {item} />
                </div>
            </div> 
           ))}

         </div>
    </div>
  )
}

 const GenreCard = ({genreName})=>{
    const [movieData, setMovieData] = useState();

    useEffect(()=>{
        const getMovieData = ()=>{
          fetchFromAPI(genreName)
          .then((response)=> setMovieData(response.slice(0,4)))
        }
  
  
          getMovieData();
      },[])

    return(
        <>
        {movieData?.map((movie)=>(

         <Fragment key={movie.id}> 
                
                    <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt="poster" className='w-[300.927px] h-[250.334px] rounded-xl'/>
                    </Fragment>
                
        ))}
        </>
    )
}
