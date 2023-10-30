import { useNavigate } from "react-router-dom";
import Info from "../components/browse/Info";
import News from "../components/browse/News";
import Notes from "../components/browse/Notes";
import Timer from "../components/browse/Timer";
import Weather from "../components/browse/Weather";

export default function Browse() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/movies')
  }
  return (
    <>
      <div className="flex items-center justify-around h-[1117px] w-[1728px] ">
        <div className="flex flex-col items-center justify-around h-[1000px] ">
          <div className="flex justify-between w-full">
            <div className=" flex flex-col justify-between h-[480px] ">
              <Info />
              <Weather />
            </div>
            <div>
              <Notes />
            </div>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <div>
          <News />
          
        </div>
      </div>
      <div className="relative">
        <button className="bg-green-600  rounded-[34.777px] text-white text-2xl absolute bottom-8 right-12
            w-[200px] h-[56px] cursor-pointer" onClick={()=>handleClick()}>Browse</button>
      </div>
    </>
  );
}
