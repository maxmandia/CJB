import React, { useContext, useState, useEffect } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/portraits.css";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Footer from "../components/Footer";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Portraits() {
  const { showNav } = useContext(Context);
  const [images, setImages] = useState([]);
  const { id } = useParams();

  async function getImages(id) {
    const listRef = ref(storage, id);
    listAll(listRef)
      .then(async (res) => {
        async function getAllURLS() {
          for (const img of res.items) {
            let item = await getDownloadURL(img);
            setImages((current) => [...current, item]);
          }
        }
        getAllURLS();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (id) {
      console.log(id);
      getImages(id);
    }
  }, [id]);

  useEffect(() => {
    if (images) {
      console.log(images);
    }
  }, [images]);

  return (
    <>
      {showNav && <SideBar />}
      <Header isBlack={true} />

      <div className="portrait-container">
        {images ? (
          images.map((image) => {
            return <img className="image" src={image} alt="idk" />;
          })
        ) : (
          <>
            <p>nothing to see here</p>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Portraits;
