import { useNavigate } from "react-router-dom";

import Vector from "../../assets/Vector.svg";
import GenreCard from "./GenreCard";
import { useEffect, useState } from "react";

export default function Categories() {
  const [category, setCategory] = useState([]);
  
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log(category)
  useEffect(() => {
    if (!userData) {
      navigate("/register");
    }
  }, []);

  const removeItem = (removeItemName)=>{
    const updatedCategory = category.filter(item => item !== removeItemName);
    setCategory(updatedCategory)
  }

  const nextPageClick = ()=>{
    if(category.length  === 3) {
      window.localStorage.setItem("genre",JSON.stringify(category))
      navigate('/browse')
    }
  }
  return (
    <div className="flex w-full  justify-around h-full ">
      <div className="w-1/3 ">
        <div className="font-single-day text-green-400 mt-20  text-6xl ">
          Super app
        </div>
        <div className="font-roboto text-white text-5xl mt-12 tracking-wide ">
          Choose your entertainment category
        </div>
        <div className="mt-16 ">
          {category.map((item, index) => (
            <div
              key={index}
              className="bg-green-400 mr-8 my-4 rounded-2xl w-40 inline-block h-10 text-2xl font-semibold text-white text-center"
            >
              {item}
              <span className="ml-4 text-black cursor-pointer" onClick={(e)=>removeItem(item)}>X</span>
            </div>
          ))}

          {/* <div className="bg-green-400 mr-8 my-4 rounded-2xl w-40 inline-block h-10 text-2xl font-semibold text-white text-center">Romance
        <span className="ml-4 text-black cursor-pointer">X</span>
        </div>

        <div className="bg-green-400 mr-8 my-4 rounded-2xl w-40 inline-block h-10 text-2xl font-semibold text-white text-center">Romance
        <span className="ml-4 text-black cursor-pointer">X</span>
        </div> */}
        </div>
    {category.length < 3 && (

        <div className="flex flex-row mt-4">
          <img src={Vector} alt="error" />
          <p className="text-red-400 ml-4">Minimum 3 category required</p>
        </div>
    )}

      </div>
      <div className="w-1/2 text-white  h-[1117px] ">
        <GenreCard setCategory={setCategory} category={category} />
        <div className="relative">
          <button
            className="bg-green-600  rounded-2xl  text-2xl absolute bottom-8 right-4
            w-[200px] h-[56px] cursor-pointer"
           onClick={()=>nextPageClick()} >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
