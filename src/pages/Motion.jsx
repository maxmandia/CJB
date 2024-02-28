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
    "Grow a Better Dallas",
    "Sharing Breath Has No Label",
    "A Million Smiles",
    "Asphalt and Steel",
    "It's Just Us",
    "Along the Flaggy Shore",
    "MERC",
    "AMELIA",
    "Dance With Me Sophie",
    "Sweet Police",
    "London",
    // "Hunt Institute Entrepreneur Campaign",
    "Nexus Security",
    "The Heart of Texas",
    "SMU Women's Rowing",
    // "Kessler Orchestra",
    // "LOVE IN THE MORNING/EVENING",
    "The Social Panacea",
    "PhaseOne Digitization",
    "Minerva",
    "Borrow",
    "Fine Art America",
    "AMN Welcome Back",
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
    } else if (span === "The Social Panacea") {
      navigate(`/motion/panacea`);
    } else if (span === "PhaseOne Digitization") {
      navigate(`/motion/${6}`);
    } else if (span === "Fine Art America") {
      navigate(`/motion/${8}`);
    } else if (span === "AMN Welcome Back") {
      navigate(`/motion/${9}`);
    } else if (span === "A Million Smiles") {
      navigate(`/motion/A-Million-Smiles`);
    } else if (span === "Grow a Better Dallas") {
      navigate(`/motion/grow-a-better-dallas`);
    } else if (span === "Sharing Breath Has No Label") {
      navigate(`/motion/sharing-breath-has-no-label`);
    } else if (span === "Asphalt and Steel") {
      navigate(`/motion/asphalt-and-steel`);
    } else if (span === "It's Just Us") {
      navigate(`/motion/its-just-us`);
    } else if (span === "Along the Flaggy Shore") {
      navigate(`/motion/along-the-flaggy-shore`);
    } else if (span === "MERC") {
      navigate(`/motion/merc`);
    } else if (span === "Dance With Me Sophie") {
      navigate(`/motion/dance-with-me-sophie`);
    } else if (span === "Sweet Police") {
      navigate(`/motion/sweet-police`);
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
              style={{ border: "5px solid #42B3FD" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FDirectorDP_Thumbnail2.mp4?alt=media&token=64115fb1-79bf-483b-8a59-0aad276c3efc"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">DIRECTOR + DP REEL</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/grow-a-better-dallas">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #4A818E" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FGrowABetterDallas_Thumbnail.mp4?alt=media&token=d91bd8dc-80ff-4c1a-b62f-d87febff8112"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Grow a Better Dallas</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/sharing-breath-has-no-label">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #8E4A6E" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FSharingBreathHasNoLabel_Thumbnail.mp4?alt=media&token=e0f7cea6-19c5-44f7-ad4f-adeed69777fd"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Sharing Breath Has No Label</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/A-Million-Smiles">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #C45532" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAMillionSmiles_Thumbnail.mp4?alt=media&token=9a92b8a3-0917-4654-a8ff-aa08d9035b4a"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">A Million Smiles</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/asphalt-and-steel">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #B9AA1F" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAsphaltandSteel_Thumbnail.mp4?alt=media&token=1f2d1a71-f69c-4e44-8cca-2a3206d64f17"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Asphalt and Steel</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/its-just-us">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #1FB92E" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FItsJustUs_Thumbnail.mp4?alt=media&token=60a7ad3a-ab72-4f74-b595-db4a49dab658"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">It's Just Us</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/along-the-flaggy-shore">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #B94D1F" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FFlaggyShore_Thumbnail.mp4?alt=media&token=38f757b0-2606-4ac4-abdb-8dc8e3d5a94a"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Along the Flaggy Shore</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/merc">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #B91F1F" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FMerc_Thumbnail.mp4?alt=media&token=b9032b69-6ab1-43ba-9c8d-85718e70eaab"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">MERC</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/amelia">
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
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAMELIA_Thumbnail.mp4?alt=media&token=d037378d-7946-4096-b7c4-b905f136f200"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">AMELIA</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/dance-with-me-sophie">
          <div className="motion-loop-container">
            <video
              playsInline
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              type="video/mp4"
              style={{ border: "5px solid #471FB9" }}
            >
              <source
                ref={sourceRef}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FDanceWithMeSophie_Thumbnail.mp4?alt=media&token=33046aca-8248-4c27-9e05-29ac75f27017"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Dance With Me Sophie</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/sweet-police">
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
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FSweetPolice_Thumbnail.mp4?alt=media&token=7d6f610e-ef22-42f5-9ffb-9e91797a482c"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Sweet Police</p>
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
      </div>
      <Footer />
    </div>
  );
}
export default Motion;
