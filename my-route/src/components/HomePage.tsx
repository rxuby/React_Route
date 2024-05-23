import React from "react";
import { Link } from "react-router-dom";
import { data_new } from "../data_new";

const HomePage = () => {
  return (
    <div className="mt-32 " >
      <h1 className="text-slate-800 text-2xl font-bold mb-5 " style={{fontFamily:"kanit"}}>{data_new[0].title}</h1>
      <p className="mb-8 text-slate-800 text-sm " style={{fontFamily:"kanit"}}>{data_new[0].sub_title}</p>
      {data_new[0].type_new.map((category) => (
        <div  key={category.id} className="mx-44" >
          <h3 className="text-left mb-3 text-slate-800 font-bold mt-16" style={{fontFamily:"kanit"}}>ประเภทข่าว: {category.name}</h3>
          {category.news_type.map((news) => (
            <div key={news.id} className="border rounded-lg p-7 mb-4 text-left shadow-md " style={{fontFamily:"kanit"}}>
              <Link to={`/home/allnews/${category.id}/${news.id}?viewer=Khing`}>
                <p className="text-gray-400 text-sm m-1" style={{fontFamily:"kanit"}}>{news.date}</p>
                <h4 className="text-slate-800 font-semibold m-1" style={{fontFamily:"kanit"}}>{news.headline}</h4>
                <p className="text-sm m-1" style={{fontFamily:"kanit"}}>{news.content}</p>
                <p className="text-gray-400 text-sm m-1" style={{fontFamily:"kanit"}}>ประเภทข่าว: {news.category}</p>
              </Link>
            </div>
          )).splice(0,2)} 
        </div>
      ))}
    </div>
  );
};

export default HomePage;
