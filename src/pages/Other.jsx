import React, { useEffect, useState, useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import "../styles/other.css";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Other() {
  const { showNav } = useContext(Context);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, "MotionGrabs/OtherWork");
    listAll(listRef)
      .then(async (res) => {
        console.log(res);
        async function getAllURLS() {
          for (const img of res.items) {
            let item = await getDownloadURL(img);
            console.log(item);

            setImages((current) => [...current, item]);
          }
        }
        getAllURLS();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="other-container">
      <Header isBlack={true} />
      {showNav && <SideBar />}
      {images.length > 0 &&
        images.map((image) => {
          return <img className="other-image" src={image} alt="other work" />;
        })}
    </div>
  );
}

export default Other;
