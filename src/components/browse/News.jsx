import { useEffect, useState } from "react";
import news from "../../assets/news.svg";

export default function News() {
  const [newsData, setNewsData] = useState();
   const date = new Date().getDate();
  
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-09-${date}&sortBy=publishedAt&apiKey=802a49b5ee814c2e889509dec1e9421f`
      )
        .then(async (response) => await response.json())
        .then((data) => setNewsData(data.articles[0]));
    };

    fetchNews();
  }, []);
  
  return (
    <div className=" w-[463px] rounded-lg">
      <div className="text-white relative h-[555px]">
        <img src={news} alt="news"className="h-[555px]"/>
        <div className="absolute bottom-0 p-2 bg-newsBackground w-full h-[159px]">
          <h1 className="text-4xl">{newsData?.title.substring(0, 55)}</h1>
          <span className="">{newsData?.publishedAt.substring(0,10)} | </span>
          <span>{newsData?.publishedAt.substring(11,16)} PM</span>
        </div>
      </div>
      {/* <div className="text-white"> */}

      {/* </div> */}
      <div className="bg-white  rounded-b-lg h-[352px] font-roboto ">
        <p className="p-6 ">{newsData?.content}</p>
      </div>
      
    </div>
  );
}
