import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/motion.css";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
function Motion() {
  const { showNav } = useContext(Context);
  const navigate = useNavigate();
  const reelRef = useRef();
  const sourceRef = useRef();
  const [spanArr, setSpanArr] = useState([]);
  const arr = [
    "CREDO",
    "London",
    "Colorist Reel",
    // "Hunt Institute Entrepreneur Campaign",
    "Nexus Security",
    "The Heart of Texas",
    "SMU Women's Rowing",
    // "Kessler Orchestra",
    // "LOVE IN THE MORNING/EVENING",
    "Carla Rockmore",
    "The Social Panacea",
    "PhaseOne Digitization",
    "Minerva",
    "Borrow",
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
      if (i === arr.length) {
        clearInterval(id);
        return;
      }
      const elToAdd = arr[i];
      setSpanArr((current) => [...current, elToAdd]);
      i = i + 1;
    }, 200);
  }

  useEffect(() => {
    appendChildren();
  }, []);

  function handleNav(span) {
    console.log(span);
    if (span === "London") {
      navigate(`/motion/${0}`);
    } else if (span === "NEXUS SECURITY") {
      navigate(`/motion/${1}`);
    } else if (span === "The Heart of Texas") {
      navigate(`/motion/${2}`);
    } else if (span === "SMU Women's Rowing") {
      navigate(`/motion/smu-rowing`);
    } else if (span === "Minerva") {
      navigate(`/motion/minerva`);
    } else if (span === "BORROW") {
      navigate(`/motion/${3}`);
    } else if (span === "Carla Rockmore") {
      navigate(`/motion/${5}`);
    } else if (span === "The Social Panacea") {
      navigate(`/motion/panacea`);
    } else if (span === "PhaseOne Digitization") {
      navigate(`/motion/${6}`);
    } else if (span === "Lightphone") {
      navigate(`/motion/${7}`);
    } else if (span === "Fine Art America") {
      navigate(`/motion/${8}`);
    } else if (span === "AMN Welcome Back") {
      navigate(`/motion/${9}`);
    } else if (span === "HESHE") {
      navigate(`/motion/${10}`);
    } else if (span === "Devaney Assembly") {
      navigate(`/motion/${11}`);
    } else if (span === "CREDO") {
      navigate(`/motion/CREDO`);
    } else if (span === "Colorist Reel") {
      navigate(`/motion/Colorist-Reel`);
    }
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
                <span onClick={() => handleNav(span)} key={index}>
                  {span}
                </span>
              );
            })}
        </p>
      </div>
      <div className="videos-container">
        <Link to="/motion/reel">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewCuts_May%2FThumbnail_May2023_V1.mp4?alt=media&token=33ce7cb9-7f7a-4548-90fd-2069d98ceb22"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">DIRECTOR + DP REEL</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/CREDO">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FCREDO_TRAILER_THMBNL.mp4?alt=media&token=c766d12b-d5de-4ce6-87b2-c2df9ce299a7"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">CREDO</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/operator-reel">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66h32n" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2Fthumbnails%2FOperatingReel_Thumbnail.mov?alt=media&token=107455ce-23df-4548-8a51-f7a193ed2d24"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">CAMERA OPERATOR REEL</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/Colorist-Reel">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #66e9af" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/CREDO%2FColorist_Reel_V2_LQ_1.mp4?alt=media&token=4dfd4f84-7c45-4452-8275-2646c698a47f"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">COLORIST REEL</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/1">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #1106B2" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FNexusThumbnail.mp4?alt=media&token=aef3d5b9-2d2a-497f-baa9-30b4ce74d717"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">NEXUS SECURITY</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/0">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
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

        <Link to="/motion/2">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #42B3FD" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HeartofTexas_MEDIA%2FHeartOfTXThumbnail.mp4?alt=media&token=8a40e1f7-1d8e-4b08-b74f-7463e67df76b"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">THE HEART OF TEXAS</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/smu-rowing">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #42B3FD" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2Fthumbnails%2FSMU_UT_Rowing_Thumbnail.mp4?alt=media&token=726d9636-9b63-4b79-ab8b-9a44117bb7f2"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">SMU WOMEN'S ROWING</p>
            </div>
          </div>
        </Link>
        {/* <Link to="/motion/4">
          <div className="motion-loop-container">
            <video
              playsInline
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
        </Link> */}
        <Link to="/motion/8">
          <div className="motion-loop-container">
            <video
              playsInline
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
              <p className="video-text">FINE ART AMERICA / SUPERSTOCK</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/panacea">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #dh32e7" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2Fthumbnails%2FSocialPanacea_Thumbnail.mp4?alt=media&token=fc988300-02ca-4d80-9cd8-f9646f3c34ce"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">THE SOCIAL PANACEA</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/6">
          <div className="motion-loop-container">
            <video
              playsInline
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
              <p className="video-text">PHASEONE DIGITIZATION</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/minerva">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #73219" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2Fthumbnails%2FMinerva_Thumbnail.mp4?alt=media&token=0947bd81-eb16-46d6-9b01-01729c7c1e56"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">MINERVA</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/3">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #32AB17" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NewThumbnails%2FBorrowThumbnail.mp4?alt=media&token=dfe5fc8f-5556-448d-9f8b-548d47544749"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">BORROW</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/5">
          <div className="motion-loop-container">
            <video
              playsInline
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
              <p className="video-text">CARLA ROCKMORE</p>
            </div>
          </div>
        </Link>

        <Link to="/motion/9">
          <div className="motion-loop-container">
            <video
              playsInline
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
              <p className="video-text">AMN WELCOME BACK</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/7">
          <div className="motion-loop-container">
            <video
              playsInline
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
              <p className="video-text">LIGHTPHONE</p>
            </div>
          </div>
        </Link>

        <Link to="/motion/10">
          <div className="motion-loop-container">
            <video
              playsInline
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
              playsInline
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
        <Link to="/motion/other">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #dd9cb8" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/neenthumbnail.mp4?alt=media&token=1ca946ce-b3fb-4062-af92-e6667cfc9151"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">MORE</p>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Motion;
