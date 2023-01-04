import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Context } from "../App";
import "../styles/motionclip.css";

function MotionClip() {
  const { id } = useParams();
  const { showNav } = useContext(Context);
  const [URL, setURL] = useState(null);
  const [roles, setRoles] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (id) {
      switch (id) {
        case "1":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Lightphone_FinalCut_AdobeExpress.mp4?alt=media&token=cdb1b5a9-337f-4cf6-bec8-7ddce75528b8"
          );
          setRoles(["Camera Operator", "Gaffer", "Editor", "Colorist"]);
          setTitle("Lightphone");
          break;

        case "2":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/King%20Loser%20Final%20Cut.mp4?alt=media&token=0f377f95-6cd6-4f46-baa5-2132a319664a"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("King Loser");
          break;
        case "3":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/London%20Film%20Final%20Cut.mp4?alt=media&token=c161499e-08f6-4951-b3fb-8dc0f974e874"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("LONDON");
          break;
        case "4":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HESHE%20Final%20Cut.mp4?alt=media&token=a01cca73-1827-4af2-b8f3-b31951424625"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("HESHE");
          break;
        case "5":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/AMNWelcomeBackV4.mp4?alt=media&token=a36a32d9-6594-4f3c-8391-4640cf479ef0"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("AMN Welcome Back");
          break;
        case "6":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/FineArtAmerica_FinalCut_AdobeExpress.mp4?alt=media&token=98adf58c-656f-4bb5-826d-546bc2a20206"
          );
          setRoles(["Director", "Editor", "DP", "Colorist"]);
          setTitle("Fine Art America / SuperStock");
          break;
        case "7":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NOCOPY.mp4?alt=media&token=e72a3d2c-0439-47fe-b960-a9e28e2dfc04"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("PhaseOne Digitization");
          break;
        case "8":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/CarlaRockmore_Sizzle_60_V2_AdobeExpress.mp4?alt=media&token=67d7300c-39df-497f-8be6-8296b1071347"
          );
          setRoles(["Editor", "DP"]);
          setTitle("Carla Rockmore");
          break;
        case "9":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Devaney_Assembly.mp4?alt=media&token=b1979ede-b88c-4f2b-a0c0-33539060b485"
          );
          setRoles(["Editor", "DP"]);
          setTitle("The Devaney Collection");
          break;
        default:
          return;
      }
    }
  }, [id]);
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      {showNav && <SideBar />}
      <Header isBlack={true} />
      {URL ? (
        <div className="full-video-container">
          {title && <h2 className="title">{title}</h2>}
          <video controls className="full-video">
            <source src={URL} type="video/mp4" />
          </video>
          <div className="roles-container">
            {roles &&
              roles.map((role) => {
                return <p className="role">{role}</p>;
              })}
          </div>
          <article className="video-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            iusto, expedita suscipit sint beatae officia? Praesentium, ipsum.
            Debitis repellat maiores ipsum dicta, exercitationem voluptatum, sit
            doloribus, nihil cum architecto vero.
          </article>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MotionClip;
