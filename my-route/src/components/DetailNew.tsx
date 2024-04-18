import { data_new } from "../data_new";
import { useParams, useSearchParams } from "react-router-dom";

const DetailNew = () => {
  const { id, detailId } = useParams();
  // const categoryId = parseInt(id as string);

  const detail = data_new[0].type_new
    .filter((category) => {
      if (id) {
        if (category.id === parseInt(id)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0]
    .news_type.filter((category) => {
      if (detailId) {
        if (category.id === parseInt(detailId)) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })[0];

  const [searchParams] = useSearchParams();

  return (
    <div className="border-2 rounded-[20px] p-8 mb-4 text-left mt-20 text-sm">
      <div className="text-right">ผู้เข้าชม:{searchParams.get("viewer")}</div>
      {/* <h2>{detail.headline}</h2> */}
      <p>รหัสข่าว: {detail.id}</p>
      <p>วันที่ลงข่าว: {detail.date}</p>
      <p>เวลาที่ลงข่าว: {detail.headline}</p>
      <p>เนื้อหาข่าว: {detail.content}</p>
      <p>ประเภทข่าว: {detail.category}</p>
      <p>สำนักข่าว: {detail.publisher}</p>
    </div>
  );
};

export default DetailNew;
