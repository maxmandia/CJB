import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Other() {
  const [images, setImages] = useState([null]);

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

  return <div>Other</div>;
}

export default Other;
