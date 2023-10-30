import action from "../../assets/action.svg";
import drama from "../../assets/drama.svg";
import romance from "../../assets/romance.svg";
import thriller from "../../assets/thriller.svg";
import horror from "../../assets/horror.svg";
import western from "../../assets/western.svg";
import fantasy from "../../assets/fantasy.svg";
import music from "../../assets/music.svg";
import fiction from "../../assets/fiction.svg";

const genreData = [
  {
    id: 1,
    name: "Action",
    imgSrc: action,
    bgColor: "bg-orange-400",
  },
  {
    id: 2,
    name: "Drama",
    imgSrc: drama,
    bgColor: "bg-pink-200",
  },
  {
    id: 3,
    name: "Romance",
    imgSrc: romance,
    bgColor: "bg-green-600",
  },
  {
    id: 4,
    name: "Thriller",
    imgSrc: thriller,
    bgColor: "bg-blue-400",
  },
  {
    id: 5,
    name: "Horror",
    imgSrc: horror,
    bgColor: "bg-violet-400",
  },
  {
    id: 6,
    name: "Western",
    imgSrc: western,
    bgColor: "bg-red-800",
  },
  {
    id: 7,
    name: "Fantasy",
    imgSrc: fantasy,
    bgColor: "bg-pink-400",
  },
  {
    id: 8,
    name: "Music",
    imgSrc: music,
    bgColor: "bg-red-600",
  },
  {
    id: 9,
    name: "Fiction",
    imgSrc: fiction,
    bgColor: "bg-green-300",
  },
];
export default function GenreCard({setCategory,category}) {

  const handleClick = (categoryName)=>{
    if(category.length < 3 && !category.includes(categoryName)) {

      setCategory([...category,categoryName])
    } else if(category.includes(categoryName)) {
      const updatedItem = category.filter(item=> item !== categoryName)
      setCategory(updatedItem)
    }
    
  }
  return (
    <div className=" flex flex-row flex-wrap  h-[1117px] justify-around mt-20">
      {genreData.map((item) => (
        <div
          key={item.id}
          className={`${item.bgColor} w-[250px] h-[251px]  rounded-lg flex flex-col items-center justify-around cursor-pointer  ${category.includes(item.name) ? " border-4 border-green-400" : "" }`}
        onClick={(e)=>handleClick(item.name)} >
          <p className="text-3xl  ">{item.name}</p>
          <img src={item.imgSrc} alt={item.name} className="w-[209.62px] h-[118px]" />
        </div>
      ))}
    </div>
  );
}
