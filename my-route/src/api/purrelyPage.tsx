import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import imgyugi from "../images/pngaaa.com-426287.png";
import { motion, AnimatePresence } from "framer-motion";
import "@components/flipcard.css";
// import melffybg from "../images/melffy.png";

type TypeApi = {
  id: number;
  name: string;
  type: "Spell Card" | "Monster Card" | "Trap Cartd";
  desc: string;
  race: string;
  archetype: string;
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

  const fetchDataAxios = async () => {
    const result = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=purrely"
    );
    const _result = result.data.data;
    setData(_result);
  };

  useEffect(() => {
    fetchDataAxios();
  }, []);

  return (
    <AnimatePresence>
      <motion.div>
        <div
          style={{ backgroundAttachment: "fixed" }}
          className="flex flex-col justify-center items-center content-center  bg-gradient-to-t from-indigo-950 via-indigo-100 to-white font-varelaround "
        >
          <div className="  mt-6 mb-6 flex items-center justify-center drop-shadow-xl ">
            <motion.img
              initial={{ y: -10 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              width={"28%"}
              src={imgyugi}
              alt="logo"
            />
          </div>
          <div className="bg-white p-12 pl-8 pr-8  rounded-t-[30px] shadow-2xl shadow-indigo-500/40 w-[960px] h-full min-h-screen ">
            <div className="grid grid-cols-4 grid-flow-row gap-4 ">
              {data &&
                data.map((item, index) => {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.04 }}
                    >
                      
                      <motion.img
                        onClick={() => {
                          showModal();
                          setSelected(item);
                        }}
                        className="cursor-pointer hover:scale-[1.1] transition-all rounded-lg"
                        src={item.card_images[0].image_url_cropped}
                        alt={`img-${index}`}
                      />
                    </motion.div>
                  );
                })}
            </div>

            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              afterClose={() => setSelected(undefined)}
              centered={true}
              style={{ backdropFilter: "blur(5px)" }}
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
                <p></p>
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
