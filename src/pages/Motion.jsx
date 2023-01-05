import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/motion.css";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Motion() {
  const { showNav } = useContext(Context);
  const [spanArr, setSpanArr] = useState([]);
  const navigate = useNavigate();

  const arr = [
    "London",
    "Hunt Institute Entrepreneur Campaign",
    "The Heart of Texas",
    "Kessler Orchestra",
    "LOVE IN THE MORNING/EVENING",
    "Carla Rockmore",
    "PhaseOne Digitization",
    "Lightphone",
    "Fine Art America",
    "AMN Welcome Back",
    "HESHE",
    "Devaney Assembly",
  ];

  function appendChildren() {
    let i = 0;
    let id;

    id = setInterval(() => {
      if (i === arr.length - 1) {
        clearInterval(id);
        return;
      }
      setSpanArr((current) => [...current, arr[i]]);
      i = i + 1;
    }, [200]);
  }

  useEffect(() => {
    appendChildren();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(spanArr);
  }, [spanArr]);

  function handleNav(index) {
    console.log(index);
    // navigate(`/motion/${index}`);
  }

  return (
    <div className="motion-container">
      {showNav && <SideBar />}
      <Header isBlack={true} />
      <div className="motion-desc">
        {/* <p id="feat-text">Films include</p> */}
        <p className="motion-desc-text">
          {spanArr.length > 0 &&
            spanArr.map((span, index) => {
              return (
                <span onClick={() => handleNav(index)} key={index}>
                  {span}
                </span>
              );
            })}
        </p>
      </div>
      <div className="videos-container">
        <Link to="/motion/0">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #935430" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/london%20snippet.mp4?alt=media&token=8a9b9b77-345a-4be8-a0bb-b317d1e86071"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">LONDON</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/1">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #935430" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/london%20snippet.mp4?alt=media&token=8a9b9b77-345a-4be8-a0bb-b317d1e86071"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Hunt Institute Entrepreneur Campaign</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/2">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #f22170" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HeartofTexas_MEDIA%2FHeartOfTXThumbnail.mp4?alt=media&token=8a40e1f7-1d8e-4b08-b74f-7463e67df76b"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">The Heart of Texas</p>
            </div>
          </div>
        </Link>

        <Link to="/motion/3">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #f22170" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HeartofTexas_MEDIA%2FHeartOfTXThumbnail.mp4?alt=media&token=8a40e1f7-1d8e-4b08-b74f-7463e67df76b"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Kessler Orchestra</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/4">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #f22170" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HeartofTexas_MEDIA%2FHeartOfTXThumbnail.mp4?alt=media&token=8a40e1f7-1d8e-4b08-b74f-7463e67df76b"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">LOVE IN THE MORNING/EVENING</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/5">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #fc7a08" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/carla%20snippet.mp4?alt=media&token=68c6215f-8a1d-4e5b-936a-22153bb2faf2"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Carla Rockmore</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/6">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #d92321" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FPhaseOne_Thumbnail.mp4?alt=media&token=9158ee8c-8fd7-4ca5-96d9-50b09a8cc459"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">PhaseOne Digitization</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/7">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #66f9af" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FLightphone_Thumbnail.mp4?alt=media&token=14f1d604-8c42-46a3-ba4d-50d7593971b7"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Lightphone</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/8">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #352682" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FFineArtAmerica_Thumbnail.mp4?alt=media&token=2226f74f-8cc0-4101-bcc6-773f37b732ee"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Fine Art America / SuperStock</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/9">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #d122ee" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FAMNWelcomeBack_Thumbnail.mp4?alt=media&token=c25f922a-b296-407f-92e0-92eebc2aec46"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">AMN Welcome Back</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/10">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #34532e" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HESHE_Thumbnail.mp4?alt=media&token=be43fa39-c228-44ec-8ba8-fd8b0a29abd7"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">HESHE</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/11">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #1569c7" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/devaney%20snippet.mp4?alt=media&token=b73297dd-22aa-482b-a8c4-70110657bcb8"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">The Devaney Collection</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Motion;
