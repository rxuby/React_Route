import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import imgyugi from "../images/pngaaa.com-426287.png";
import { motion, AnimatePresence } from "framer-motion";
import "@components/flipcard.css";
import melffybg from "../images/melffy.png"

type TypeApi = {
  // count: string;
  // next: string;
  // previous: string;
  // results: {
  //   name: string;
  //   url: string;
  // }[];

  id: number;
  name: string;
  type: "Spell Card" | "Monster Card" | "Trap Cartd";
  desc: string;
  race: string;
  card_images: {
    id: number;
    image_url: string;
    image_url_cropped: string;
  }[];
};

const FetchApi = () => {
  const [data, setData] = useState<TypeApi[]>();
  const [selected, setSelected] = useState<TypeApi | undefined>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // if(testData)
  //   const fetchdata = () => {
  //     fetch('https://pokeapi.co/api/v2/pokemon')
  //       .then((Response) => {
  //         if (!Response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return Response.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.error('There was a problem with the fecth operation', error);
  //       });
  //   };
  const fetchDataAxios = async () => {
    const result = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=melffy"
      // "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=ghost%"
    );
    const _result = result.data.data;
    setData(_result);
    // axios
    //   .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with the fetch operation:", error);
    //   });
  };

  useEffect(() => {
    // fetchdata();
    fetchDataAxios();
  }, []);
  return (
    <AnimatePresence>
      <motion.div
      // initial={{ opacity: 0, y: "-100%" }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: "100%" }}
      // transition={{ duration: 0.5 }}
      >
        <div
          style={{ backgroundAttachment: "fixed" }}
          className="flex flex-col justify-center items-center content-center  bg-gradient-to-t from-rose-100 via-rose-100 to-white font-varelaround "
        >
          {/* <h1>ข้อมูลจาก API</h1> */}
          <div className="  mt-6 mb-6 flex items-center justify-center drop-shadow-xl ">
            {/* <h1 className="mt-[40px] mb-4 text-[40px] font-semibold  ">Yu-Gi-Oh!</h1> */}

            <img  width={"25%"} src={imgyugi} alt="logo" />
          </div>
          <div className="bg-white p-12 pl-8 pr-8  rounded-t-[30px] shadow-2xl w-[960px] h-full min-h-screen ">
            <div className="grid grid-cols-4 grid-flow-row gap-4 ">
              {data &&
                data.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.04 }}
                    >
                      <motion.img
                        // whileHover={{ scale: 1.1 }}
                        onClick={() => {
                          showModal();
                          setSelected(item);
                        }}
                        className="cursor-pointer hover:scale-[1.1] transition-all rounded-lg"
                        // width={"15%"}
                        src={item.card_images[0].image_url_cropped}
                        alt={`img-${index}`}
                      />
                    </motion.div>
                  );
                })}
            </div>

            <Modal
              // title={selected?.name}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              afterClose={() => setSelected(undefined)}
              centered={true}
              // className="bg-red-500 rounded-lg "
              style={{
                backdropFilter: "blur(5px)",
              }}
            >
              <div className="flex flex-col w-full  ">
                <h1 className=" font-bold text-[1.5rem] mb-2">
                  {selected?.name}
                </h1>
                <div className="flex  items-center justify-center content-cente">
                  <img
                    className="shadow-lg"
                    width={"50%"}
                    src={selected?.card_images[0].image_url}
                    alt="image"
                  />
                </div>
                {/* <p>{selected?.name}</p> */}
                <div className="mt-2 ">
                  <p>
                    [{selected?.race} / {selected?.type}]
                  </p>
                  <p> {selected?.desc}</p>
                </div>
              </div>
            </Modal>

            {data ? (
              <div className="flex">
                <p>
                  {/* {data.results.map((item) => {
              return (
                <div className="flex flex-col justify-center items-center content-center">
                  <div className="">ชื่อ: {item.name}</div>
                  <div>url: {item.url}</div>
                </div>
              )
            })}{" "} */}
                </p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FetchApi;
