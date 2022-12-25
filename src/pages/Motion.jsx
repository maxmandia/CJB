import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/motion.css";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Motion() {
  const { showNav } = useContext(Context);

  return (
    <div className="motion-container">
      {showNav && <SideBar />}
      <Header isBlack={true} />
      <div className="motion-desc">
        {/* <p id="feat-text">Films include</p> */}
        <p className="motion-desc-text">
          <span>HESHE</span> <span>King Loser</span> <span>Lightphone</span>
          <span>London Film</span> <span>Fine Art America</span>
          <span>NO COPY</span> <span>AMN Welcome Back</span>
          <span>Devaney Assembly</span> <span>Carla Rockmore</span>
        </p>
      </div>
      <div className="videos-container">
        <Link to="/motion/1">
          <div className="motion-loop-container">
            <video
              className="video"
              autoPlay
              muted
              loop
              id="motion-loop"
              style={{ border: "5px solid #dcd7c9" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/motion-loop.mp4?alt=media&token=c6dcbf5c-a392-400e-954e-097bc71835f7"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Lightphone</p>
            </div>
          </div>
        </Link>
        <Link to="/motion/2">
          <div className="motion-loop-container">
            <video className="video" autoPlay muted loop id="motion-loop">
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/king%20loser%20snippet.mp4?alt=media&token=db1d4088-e60c-48ec-b1e6-6dfb4633064d"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">King Loser</p>
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
              <p className="video-text">London Film</p>
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
              style={{ border: "5px solid #34532e" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HESHE%20snippet.mp4?alt=media&token=357912c1-234a-41fd-9325-86a0a622ac18"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">HESHE</p>
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
              style={{ border: "5px solid #fff2b7" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/AMN%20snippet.mp4?alt=media&token=27b414e5-8376-4659-bf49-387d35dc20f6"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">AMN Welcome Back</p>
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
              style={{ border: "5px solid #352682" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/fine%20art%20america%20snippet.mp4?alt=media&token=a53aa8f0-4ff1-486d-9e5e-a536fc0a77d3"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">Fine Art America</p>
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
              style={{ border: "5px solid #d92321" }}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NOCOPY%20snippet.mp4?alt=media&token=70ea2607-03ec-4192-9963-0615b70a374d"
                }
                type="video/mp4"
              />
            </video>
            <div className="title-container">
              <p className="video-text">NO COPY</p>
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
        <Link to="/motion/9">
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
              <p className="video-text">Devaney</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Motion;
