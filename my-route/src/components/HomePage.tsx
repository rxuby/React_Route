import React from "react";
import { Link } from "react-router-dom";
import { data_new } from "../data_new";

const HomePage = () => {
  return (
    <div className="mt-20 ">
      <h1 className="text-slate-800 text-2xl font-bold mb-5">{data_new[0].title}</h1>
      <p className="mb-8 text-slate-800 text-sm">{data_new[0].sub_title}</p>
      {data_new[0].type_new.map((category) => (
        <div  key={category.id}>
          <h3 className="text-left mb-3 text-slate-800">ประเภทข่าว: {category.name}</h3>
          {category.news_type.map((news) => (
            <div key={news.id} className="border rounded-lg p-4 mb-4 text-left shadow-md ">
              <Link to={`/home/allnews/${category.id}/${news.id}?viewer=Khing`}>
                <p className="text-gray-400 text-sm m-1">{news.date}</p>
                <h4 className="text-slate-800 font-semibold m-1">{news.headline}</h4>
                <p className="text-sm m-1">{news.content}</p>
                <p className="text-gray-400 text-sm m-1">ประเภทข่าว: {news.category}</p>
              </Link>
            </div>
          )).splice(0,2)} 
        </div>
      ))}
    </div>
  );
};

export default HomePage;
