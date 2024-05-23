import { data_new } from "../data_new";
import { Link, useParams } from "react-router-dom";

const AllNews = () => {
  const { id } = useParams();
  const categoryId = parseInt(id as string);

  const filteredNews = data_new[0]?.type_new.find(
    (category) => category.id === categoryId
  );
  console.log(filteredNews);
  return (
    <div className="p-4 mt-32" >
      {filteredNews ? (
        <>
          <h3 className="mb-4 text-slate-800 text-xl font-bold " style={{fontFamily:"kanit"}}>{filteredNews.name}</h3>
          {filteredNews.news_type
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((news) => (
              <Link
                to={`/home/allnews/${filteredNews.id}/${news.id}?viewer=Khing`}
              >
                <div key={news.id} className=" border rounded-lg p-4 mb-4 text-left shadow-md mx-44" style={{fontFamily:"kanit"}}>
                  <p className="text-gray-400 text-sm m-1" style={{fontFamily:"kanit"}}>{news.date}</p>
                  <h4 className="text-slate-800 font-semibold m-1" style={{fontFamily:"kanit"}}>
                    {news.headline}
                  </h4>
                  <p className="text-sm m-1" style={{fontFamily:"kanit"}}>{news.content}</p>
                  <p className="text-gray-400 text-sm m-1" style={{fontFamily:"kanit"}}>
                    ประเภทข่าว: {news.category}
                  </p>
                </div>
              </Link>
            ))}
        </>
      ) : (
        data_new[0]?.type_new.map((category) => (
          <div key={category.id} >
            <h3 className="text-slate-800 text-xl font-semibold mb-5" style={{fontFamily:"kanit"}}>{category.name}</h3>
            {category.news_type
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((news) => (
                <Link
                  to={`/home/allnews/${category.id}/${news.id}?viewer=Khing`}
                >
                  <div key={news.id} className="border rounded-lg p-4 mb-4 text-left shadow-md mx-44 ">
                    <p className="text-gray-400 text-sm m-1" style={{fontFamily:"kanit"}}>{news.date}</p>
                    <h4 className="text-slate-800 font-semibold m-1" style={{fontFamily:"kanit"}}>
                      {news.headline}
                    </h4>
                    <p className="text-sm m-1" style={{fontFamily:"kanit"}}>{news.content}</p>
                    <p className="text-gray-400 text-sm m-1" style={{fontFamily:"kanit"}}>
                      ประเภทข่าว: {news.category}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        ))
      )}
    </div>
  );
};

export default AllNews;
