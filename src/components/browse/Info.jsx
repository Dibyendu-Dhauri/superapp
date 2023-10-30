import profilePhoto from "../../assets/profile.svg";

export default function Info() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const genreData = JSON.parse(window.localStorage.getItem("genre"))
  return (
    <div className="inline-flex bg-blueviolet rounded-lg  w-[507px] h-[319px] items-center justify-center text-white">
      <div className="w-1/3">
        <img
          src={profilePhoto}
          alt="profilePhoto"
          className="w-[109px] h-[267px]"
        />
      </div>
      <div className="w-1/2">
        <div className="">
          <h2 className="text-lg ">{userData.name}</h2>
          <h3 className="text-lg">{userData.email}</h3>
          <h1 className="text-4xl font-semibold">{userData.userName}</h1>
        </div>

        <div className="mt-10 flex flex-row justify-between w-[280px] flex-wrap  ">
          {genreData.map((item,index)=>(

          <div key={index} className="bg-mediumpurple rounded-2xl  w-[135px] h-[35px]  text-center text-lg mb-2 ">
            {item}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
