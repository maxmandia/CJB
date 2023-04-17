import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Context } from "../App";
import "../styles/motionclip.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import Footer from "../components/Footer";
import FilmFreeway from "../assets/filmfreeway.png";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function MotionClip() {
  const { id } = useParams();
  const { showNav } = useContext(Context);
  const [URL, setURL] = useState(null);
  const [roles, setRoles] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [images, setImages] = useState([]);

  async function getImages(id) {
    const listRef = ref(storage, id);
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
  }

  useEffect(() => {
    if (id) {
      switch (id) {
        case "reel":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCullenBlanchfield_DirectorDP_Reel_2023.mp4?alt=media&token=13a51f33-ef50-4f6f-a855-49bf32fb32b8"
          );
          setRoles(["Director", "DP"]);
          setTitle("REEL");
          setDesc(
            "As a director, I have also DP'd all of my projects. However, I have worked with multiple directors as a DP, and I love working with all kinds of different creatives. My passion is to portray and evoke human emotion cinematically. Capturing someone's personality through a lens is my favorite creative challenge and journey."
          );
          break;
        case "operator-reel":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCullenBlanchfield_CameraOperator_Reel_2023.mp4?alt=media&token=bde8a9bc-6ec5-45dd-bf2a-e5444361d171"
          );
          setTitle("OPERATOR REEL");
          setDesc(
            "Over the last 2.5 years I have worked full time at a boutique production company in Dallas, Texas called SCP (Stewart Cohen Pictures) after graduating film school at SMU. I served as the First Assistant Camera and gear tech and worked my way up to camera operate on our productions. I have also served as a camera operator on multiple feature length documentaries and episodics while managing a demanding full-time job. I have extensive experience operating RED, Sony and Canon camera systems as well as MOVI, Ronin, and other camera support systems."
          );
          break;
        case "0":
          getImages("MotionGrabs/LONDON");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/London%20Film%20Final%20Cut.mp4?alt=media&token=c161499e-08f6-4951-b3fb-8dc0f974e874"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("LONDON");
          setDesc(
            "Meet Donald London Alexander, a member of The Dallas Street Choir. Through his faith in God, London has lifted himself out of homelessness. The Dallas Street Choir’s mission is to offer a musical outlet for those affected by homelessness. I’ve had the pleasure of working with the Dallas Street Choir for over 5 years, massing over 70,000 views across their social media profiles. “LONDON” won both the Impact Grand Prize and Social Justice Awards at the Impact Short Film Festival in Seattle Washington. There were over 3000 submissions from around the world, varying in budgets from tens of thousands to zero-budget films like my own."
          );
          break;

        case "1":
          getImages("MotionGrabs/Nexus");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCJB_NexusSecurity_Final.mp4?alt=media&token=506731e4-44c2-467c-822f-f8630284c943"
          );
          setRoles(["Director", "Producer", "Editor", "DP", "Colorist"]);
          setTitle("NEXUS SECURITY");
          setDesc(
            "Nexus Security aims to resolve the precision agriculture access gap in Texas by improving the existing soil database of the region to make it easier to apply for these technologies in historically ignored areas. This initiative will improve the quality of life of farmers, increase resiliency ahead of an uncertain future, and secure our access to food and water as a nation. My task was to tell the story and impact of Nexus Security and their founder/CEO Michaela Emma."
          );
          break;
        case "2":
          getImages("MotionGrabs/TheHeartofTexas");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HeartofTexas_MEDIA%2FTheHeartofTexas_FinalCut.mp4?alt=media&token=2b16ad35-72ff-4342-9a2d-34745fac789d"
          );
          setRoles(["Director", "Producer", "Editor", "DP"]);
          setTitle("The Heart of Texas");
          setDesc(
            "Dallas is home to over 100,000 refugees, where more than half come to Vickery Meadow nicknamed 'Mini United Nations'. In Vickery Meadow lies Heart House, an after-school program for refugee children specializing in Social Emotional Learning (SEL). 'The Heart of Texas' provides an outline of the child refugee crisis, and how Heart House provides impactful support to refugee children."
          );
          break;
        case "3":
          getImages("MotionGrabs/Borrow");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCJB_Borrow_Final.mp4?alt=media&token=d2168ffe-3545-433a-9aa5-d77edfc0bed9"
          );
          setRoles(["Director", "Producer", "Editor", "DP", "Colorist"]);
          setTitle("BORROW");
          setDesc(
            "Borrow is a sustainable network that connects people to increase the value of what they own and reduce the waste they create. Their mission is to connect businesses and people to harness the advantage of great equipment and skilled professionals. My goal was to tell the story and impact of Borrow and their founder/CEO Katie Lewis."
          );
          break;
        case "4":
          getImages("MotionGrabs/AMN");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/AMNWelcomeBackV4.mp4?alt=media&token=a36a32d9-6594-4f3c-8391-4640cf479ef0"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("LOVE IN THE MORNING/EVENING");
          setDesc(
            "The objective of this piece was to showcase the welcoming nature of AMN Healthcare, a global healthcare staffing company, in their first day back in the office in over two years amid the COVID-19 pandemic. Many new hires had never met their coworkers, let alone seen the headquarters of their employer."
          );
          break;
        case "5":
          getImages("MotionGrabs/CarlaRockmore");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/CarlaRockmore_Sizzle_60_V2_AdobeExpress.mp4?alt=media&token=67d7300c-39df-497f-8be6-8296b1071347"
          );
          setRoles(["Camera Operator", "Gaffer", "Editor", "Colorist"]);
          setTitle("Carla Rockmore");
          setDesc(
            "Carla Rockmore has ignited into a Tik Tok superstar over the past year, and has begun to produce her personal line of clothing and jewelry. My task was to visually captivate the prospective customer by portraying Carla feeling confident, inspired, and sexy in her new drop. “Carla Rockmore catapulted into the zeitgeist, seemingly overnight. But the influencer, who was deemed the ‘Carrie Bradshaw of TikTok,’ has a relationship with fashion that goes well beyond her fun styling videos on the buzzy app. Rockmore is a woman who wears a plethora of hats, both figuratively and literally. A tenured jewelry designer by trade, the social media star is a stylist, wife, and mother to two boys—but ultimately, she is someone who believes in the power of personal style. And she has 1.2 million followers hanging on her every word.” - Harper’s Bazaar"
          );
          break;
        case "panacea":
          getImages("NEWCUTS_REELS_APRIL_2023/stillgrabs/socialpanacea");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCJB_SocialPanacea_Final.mp4?alt=media&token=e92aa387-3e34-4eae-a521-eb9c44a76862"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("The Social Panacea");
          setDesc(
            "The Social Panacea is an app geared towards people with social anxiety making new friends. This app was founded in 2021 by Madison McMahan, and includes not only a network of potential future best friends, but best practices to use while meeting new people. My goal as the director of the project was to capture the authenticity of Madison, and her personal story with social anxiety."
          );
          break;
        case "minerva":
          getImages("NEWCUTS_REELS_APRIL_2023/stillgrabs/minerva");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCJB_Minerva_Final.mp4?alt=media&token=3ebda40d-8fd5-49cb-bd7c-1a8ba2600726"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("Minerva");
          setDesc(
            "Minerva has developed a scalable, low-cost, solar-powered, and small computer system that creates a mock internet for use by schools that simply can't afford internet. With Minerva, students and teachers have access to millions of digital resources, including video lectures, entire school courses and thousands of books - all without needing an internet connection. Minerva has developed a scalable, low-cost, solar-powered, and small computer system that creates a mock internet for use by schools that simply can't afford internet. With Minerva, students and teachers have access to millions of digital resources, including video lectures, entire school courses and thousands of books - all without needing an internet connection. My task as the director and DP was to capture the story and future plans of Minerva, in efforts to use this short video in fundraising and networking efforts. "
          );
          break;
        case "smu-rowing":
          getImages("NEWCUTS_REELS_APRIL_2023/stillgrabs/Rowing");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FSMU_UT_60_Motion_LoRes.mp4?alt=media&token=92d005be-ba9a-4560-a077-5a7bdf7d430c"
          );
          setRoles(["Director: Stewart Cohen", "DP", "Colorist", "Editor"]);
          setTitle("SMU WOMEN'S ROWING");
          setDesc(
            "SMU Women's rowing had set a team goal to be ranked #10 in the nation by the end of the season. In order to achieve a top ranked status, they have to compete with power house teams like #1 in the nation University of Texas. We went in and tried to cinematically portray these women competing."
          );
          break;
        case "6":
          getImages("MotionGrabs/PhaseOne");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NOCOPY.mp4?alt=media&token=e72a3d2c-0439-47fe-b960-a9e28e2dfc04"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("PhaseOne Digitization");
          setDesc(
            "Media Magnet and SuperStock have partnered with PhaseOne as their official digitization partner. This piece was to showcase how advanced and powerful PhaseOne is as a digitization alternative to traditional drum scanners. SuperStock and Media Magnet digitize over 100,000 images per year, using cutting edge technology to deliver the highest quality digitized images at the fastest speed on the planet. PhaseOne’s medium format cameras are widely accepted as the top professional camera on the market."
          );
          break;
        case "7":
          getImages("MotionGrabs/Lightphone");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Lightphone_FinalCut_AdobeExpress.mp4?alt=media&token=cdb1b5a9-337f-4cf6-bec8-7ddce75528b8"
          );
          setRoles(["Camera Operator", "Gaffer", "Editor", "Colorist"]);
          setTitle("Lightphone");
          setDesc(
            "This is an award winning student project that I was able to collaborate with Director Stewart Cohen on. This is a prospective commercial for the innovative product LightPhone, portraying a family completely absorbed in their smartphones. “The Light Phone II is a premium, minimal phone. It will never have social media, clickbait news, email, an internet browser, or any other anxiety-inducing infinite feed. It's an experience we call going light. It's a phone, it calls and texts. There is a customizable menu of simple tools, and a dashboard website to manage everything. There is a headphone jack, bluetooth, and it can be used as a personal hotspot."
          );
          break;
        case "8":
          getImages("MotionGrabs/FineArtAmerica");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/FineArtAmerica_FinalCut_AdobeExpress.mp4?alt=media&token=98adf58c-656f-4bb5-826d-546bc2a20206"
          );
          setRoles(["Director", "Editor", "DP", "Colorist"]);
          setTitle("Fine Art America / SuperStock");
          setDesc(
            "SuperStock is a media licensing company based out of Dallas, TX, and Fine Art America is a POD (Print On Demand) company and online marketplace that sells the work of more than 500,000 artists around the world. Fine Art America offers various forms of art including wall art, prints, posters, tapestries and apparel. SuperStock and Fine Art America engaged in a partnership showcasing SuperStock’s wholly owned content for users to print on demand into various mediums of art. My objective was to show how quick and easy it is to order your favorite piece of art or photography on demand with Fine Art America and SuperStock."
          );
          break;
        case "9":
          getImages("MotionGrabs/AMN");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/AMNWelcomeBackV4.mp4?alt=media&token=a36a32d9-6594-4f3c-8391-4640cf479ef0"
          );
          setRoles(["Editor", "DP"]);
          setTitle("AMN Welcome Back");
          setDesc(
            "The objective of this piece was to showcase the welcoming nature of AMN Healthcare, a global healthcare staffing company, in their first day back in the office in over two years amid the COVID-19 pandemic. Many new hires had never met their coworkers, let alone seen the headquarters of their employer."
          );
          break;
        case "10":
          getImages("MotionGrabs/HeShe");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/HESHE%20Final%20Cut.mp4?alt=media&token=a01cca73-1827-4af2-b8f3-b31951424625"
          );
          setRoles(["Director", "Editor", "DP"]);
          setTitle("HESHE");
          setDesc(
            "HESHE is the exploration of nightmares and reality, and how sometimes they can become mixed through paranoia."
          );
          break;
        case "11":
          getImages("MotionGrabs/DevaneyCollection");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Devaney_Assembly.mp4?alt=media&token=b1979ede-b88c-4f2b-a0c0-33539060b485"
          );
          setRoles(["Editor", "DP"]);
          setTitle("The Devaney Collection");
          setDesc(
            "The Devaney Collection is a portfolio of over 100,000 pieces of negative film from the Devaney Agency that was previously based in New York City and later dissolved out of business. SuperStock Partners purchased the rights to this collection, and are giving this mid 1900s collection life for decades to come."
          );
          break;
        default:
          return;
      }
    }
  }, [id]);
  return (
    <div className="motion-clip-container">
      {showNav && <SideBar />}
      <Header isBlack={true} />
      {URL ? (
        <div className="full-video-container">
          <h2 className="title">{title}</h2>
          <video controls className="full-video">
            <source src={URL} type="video/mp4" />
          </video>
          <div className="roles-container">
            {roles &&
              roles.map((role) => {
                return <p className="role">{role}</p>;
              })}
          </div>
          {title === "Lightphone" && (
            <div className="roles-container">
              <p className="role">Director + DP Stewart Cohen</p>
            </div>
          )}
          {title === "Carla Rockmore" && (
            <div className="roles-container">
              <p className="role">Director + DP: Stewart Cohen</p>
            </div>
          )}
          {title === "AMN Welcome Back" && (
            <div className="roles-container">
              <p className="role">Director: Stewart Cohen</p>
            </div>
          )}
          {title === "LONDON" && (
            <a
              href="https://filmfreeway.com/LondonDallasStreetChoir"
              target="_blank"
              rel="noreferrer"
            >
              <img id="film-logo" src={FilmFreeway} alt="idmb" />
            </a>
          )}
          {title === "The Heart of Texas" && (
            <a
              href="https://filmfreeway.com/TheHeartofTexas"
              target="_blank"
              rel="noreferrer"
            >
              <img id="film-logo" src={FilmFreeway} alt="idmb" />
            </a>
          )}

          <article className="video-desc">{desc}</article>
          {images ? (
            <div className="images-container">
              {images.map((image) => {
                return (
                  <img
                    className="motion-grab-image"
                    src={image}
                    alt="motion-still"
                  />
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
}

export default MotionClip;
