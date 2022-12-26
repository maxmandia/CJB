import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/stills.css";
import YellowFolder from "../assets/yellow-folder.png";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Stills() {
  const listRef = ref(storage, "portraits");
  const { showNav } = useContext(Context);

  function getImages() {
    listAll(listRef)
      .then((res) => {
        res.items.forEach(async (itemRef) => {
          let item = await getDownloadURL(itemRef);
          console.log(item);
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  getImages();
  return (
    <div className="stills-container">
      {showNav && <SideBar />}
      <Header isBlack={false} />
      <div className="all-folders-container">
        <div className="folder-container">
          <img className="folder" src={YellowFolder} alt="folder" />
          <p>PORTRAITS</p>
        </div>
        <div className="folder-container">
          <img className="folder" src={YellowFolder} alt="folder" />
          <p>LIFESTYLE</p>
        </div>
        <div className="folder-container">
          <img className="folder" src={YellowFolder} alt="folder" />
          <p>LANDSCAPE</p>
        </div>
        <div className="folder-container">
          <img className="folder" src={YellowFolder} alt="folder" />
          <p>ARCHITECTURE</p>
        </div>
      </div>
    </div>
  );
}

export default Stills;
