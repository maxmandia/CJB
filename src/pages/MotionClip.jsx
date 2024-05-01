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
  const [poster, setPoster] = useState(null);

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
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FCullenBlanchfield_Reel_2024_DIRECTOR_DP.mp4?alt=media&token=53c376a4-91a9-4383-90c8-bc55fd456ba7"
          );

          setRoles(["Director", "DP"]);
          setTitle("REEL");
          setDesc(
            "Cullen Blanchfield is a Director/DP based in New York City, specializing in capturing the human condition through documentary and commercial projects"
          );
          break;
        case "grow-a-better-dallas":
          getImages("April2024Changes/GROW A BETTER DALLAS/Still Photography");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FGrow%20a%20Better%20Dallas%20Trailer.mp4?alt=media&token=c57eebe1-544c-4ea8-9a25-bdcac1163ace"
          );
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("Grow a Better Dallas");
          setDesc(
            "'\"Grow a Better Dallas\" is a short documentary film showcasing South Dallas' Restorative Farms, a registered non-profit offering restorative justice and urban agriculture solutions to food and social injustice in South Dallas. Restorative Farms offers the ability for rehabilitation and therapeutic solutions to individuals with criminal backgrounds to contribute as employees to the farm. Restorative Farms was founded by Tyrone Day, who was falsely incarcerated for over 25 years. So often we aren't aware of the beauty right outside our door, and Restorative Farms is a perfect example of that. A hidden gem in Dallas, being able to unlock this story of their impact through a lens was one of the most impactful experiences of my life. I hope this film encourages everyone to challenge themselves on how they view others, and how they view their food."
          );
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FGrowABetterDallas_Poster_V1.jpg?alt=media&token=706e79eb-1e3d-4b48-a30b-94f4249fab2e"
          );
          break;
        case "sharing-breath-has-no-label":
          getImages("April2024Changes/SHARING BREATH HAS NO LABEL/IMAGES");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FSBHNL_TRAILER_FINAL.mp4?alt=media&token=c0fd82d4-abf2-4e3b-aee5-59a9113da00d"
          );
          setRoles(["Director", "DP", "Editor"]);
          setTitle("Sharing Breath Has No Label");
          setDesc(
            "This documentary film tells the story of the Credo Community Choir, a Dallas-based ensemble on a mission to foster acceptance through the power of music. Embark on a captivating journey from Dallas, Texas to Argentina and Uruguay, witnessing Credo's philanthropic endeavors to transform lives through the universal language of music."
          );
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FSharing%20Breath%20Has%20No%20Label%20Poster%202.jpg?alt=media&token=8bdd42aa-b5ee-436e-a4af-b2540176b9da"
          );
          break;
        case "asphalt-and-steel":
          getImages("April2024Changes/ASPHALT & STEEL/Still Photography");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FAsphalt%26Steel_FinalCut.mp4?alt=media&token=b13c35d1-b828-44b1-9f17-6c416855deb1"
          );
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("Asphalt and Steel");
          setDesc(
            "This short brand film promotes the hard working individuals that don’t get as much recognition from the public, the mechanics and motormen keeping the 100+ year old trolleys running for MATA. When I was living in Dallas I lived across the street from the trolley barn, and always thought to myself, “God I’d love to shoot in there”. Well after just one meeting with the phenomenal team at the M-Line Trolley, we began this project."
          );
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FAsphalt%26SteelThumbnail.jpg?alt=media&token=5386dfeb-3c1e-4e88-bac0-16b8972841e1"
          );
          break;
        case "its-just-us":
          getImages("2024 Changes/Motion Grabs 2024/It's Just us");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FItsJustUs_FinalCut_LQ.mov.mp4?alt=media&token=ea005015-c972-4339-9366-138d62f92f87"
          );
          setRoles(["Director", "DP", "Editor", "Colorist"]);
          setTitle("It's Just Us");
          setDesc(
            '"It\'s Just Us" is a short film about the project We Are All Homeless, and its founder Willie Baronet. We Are All Homeless is an art and advocacy project that began in 1993, exploring questions of compassion, humanity and what home really means.\n\nI am a former student of Willie Baronet at SMU, and was always influenced by his ability to unlock creativity in others, and in myself.\n\nWillie Baronet is the former owner and creative director of GroupBaronet (now MasonBaronet), and now teaches Creative Advertising at SMU Meadows School of the Arts. This film explores his impact on not just the homelessness awareness movement, but his students on a day-to-day basis.\n\nThe production of this short film took place during SMU’s first We Are All Homeless exhibition at the Meadows School of the Arts with collaboration with photographer Leah den Bok.'
          );
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FITSJUSTUS_Thumbnail.jpg?alt=media&token=9464499d-9ae2-4561-bde3-4127465d0a03"
          );
          break;
        case "along-the-flaggy-shore":
          getImages("April2024Changes/THE FLAGGY SHORE/STILL PHOTOGRAPHY");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FFlaggyShore_HQ_FinalCut_V4_HD.mp4?alt=media&token=79302b37-1dfc-48d5-b51b-69214cf66802"
          );
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("Along the Flaggy Shore");
          setDesc(
            'Led through the beautiful words of Seamus Heaney\'s "Postscript", we explore the beauty of Ireland\'s "Flaggy Shore", and the whim of traveling into unknown worlds.'
          );
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FALONGTHEFLAGGYSHORE%20Poster.jpg?alt=media&token=05ffc10e-e3a3-49a4-8191-83c916787f7b"
          );
          break;
        case "merc":
          getImages("2024 Changes/Motion Grabs 2024/MERC");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FMERC.mp4?alt=media&token=8b8d9f0a-5f5a-4da4-8319-2aa0d7179ad7"
          );
          setRoles(["DP", "Colorist"]);
          setTitle("MERC");
          setDesc(
            "As the Director of Photography on this project I aimed to create striking and nostalgic images to help develop the story and aesthetic of NYC’s “MERC CHAPTER” fashion + jewelry brand. We based the story and visuals on Method Man’s “All I Need” music video with Mary J. Blige."
          );
          break;
        case "amelia":
          getImages("April2024Changes/AMELIA");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FAmeliaSummerVideo_LQ_FinalCut.mp4?alt=media&token=c2243580-af70-468d-8f7b-78a140ebe3e9"
          );
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("AMELIA");
          setDesc("Why not go and run around NYC for a little?");
          break;
        case "dance-with-me-sophie":
          getImages("2024 Changes/Motion Grabs 2024/Dance With Me Sophie");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FDance%20WIth%20Me%20Sophie%20Final%20Cut%20HQ.mp4?alt=media&token=e32ab65d-1f12-424e-b797-421388880115"
          );
          setRoles(["Director", "DP", "Colorist"]);
          setTitle("Dance With Me Sophie");
          setDesc(
            "As the Director and DP of this project, I wanted to create a dynamic and fluid piece to compliment the fantastic choreography of musician/artist Joshua McCooey. This project brought us to a vintage gym in East Harlem, creating a nostalgic “high school dance” feel, aiding to the story that Joshua’s character plays in his head throughout the video.          "
          );
          break;
        case "sweet-police":
          getImages("2024 Changes/Motion Grabs 2024/Sweet Police");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FMP4s%2FSweetPolice_HQ_V1.mp4?alt=media&token=58bced41-1466-446b-bca2-c6bbea4ad320"
          );
          setRoles(["Director", "DP", "Editor"]);
          setTitle("Sweet Police");
          setDesc(
            "The Sweet Police are a new band forming out of the Lower East Side of Manhattan, looking to create an identity in rock and roll and alternative rock in the city. Here is their band launch video showing the band and a practice in the studio."
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
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FLONDON-Final-Laurel-Poster.png?alt=media&token=d0b5905a-f7f9-4c2e-9ab3-a0021898ea38"
          );
          break;

        case "1":
          getImages("MotionGrabs/Nexus");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCJB_NexusSecurity_Final.mp4?alt=media&token=506731e4-44c2-467c-822f-f8630284c943"
          );
          setRoles([
            "Director",
            "Producer",
            "Editor",
            "DP",
            "Colorist",
            "Photographer",
          ]);
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
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FHeartofTXPoster2.png?alt=media&token=c7ef17c1-bff4-462d-899c-7c8f3bf0e579"
          );
          break;
        case "3":
          getImages("MotionGrabs/Borrow");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/NEWCUTS_REELS_APRIL_2023%2FCJB_Borrow_Final.mp4?alt=media&token=d2168ffe-3545-433a-9aa5-d77edfc0bed9"
          );
          setRoles([
            "Director",
            "Producer",
            "Editor",
            "DP",
            "Colorist",
            "Photographer",
          ]);
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
          setRoles(["Director", "Editor", "DP", "Photographer"]);
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
          setRoles(["Director", "Editor", "DP", "Photographer"]);
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
        case "A-Million-Smiles":
          getImages("April2024Changes/A MILLION SMILES/Still Photography");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/2024%20Changes%2FThumbnails%202024%2FAMillionSmiles_Thumbnail.mp4?alt=media&token=9a92b8a3-0917-4654-a8ff-aa08d9035b4a"
          );
          setRoles(["Director", "DP", "Producer"]);
          setTitle("A Million Smiles");
          setDesc(
            "This film tells the untold story of registered non-profit Baseball Without Borders Foundation, which has been donating equipment to children in over 50 countries since 1995.This film brings you on a journey to BWB’s home of San Francisco, and the Yucatán Peninsula in Mexico. Our crowdfunded film focuses on the joy and hope BWB brings to children less fortunate around the world through baseball and softball. Baseball is America’s pastime, but a sport that creates change all over the world."
          );
          setPoster(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/Posters%2FAMS-poster.jpg?alt=media&token=bee270a5-c839-4cf0-a428-8e59daee631f"
          );
          break;
        case "Colorist-Reel":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/CREDO%2FColorist_Reel_V2_LQ_1.mp4?alt=media&token=4dfd4f84-7c45-4452-8275-2646c698a47f"
          );
          setRoles(["Colorist"]);
          setTitle("Colorist Reel");
          setDesc(
            "Coloring multiple award winning films, large scale commercials, and documentaries, I have a breadth of experience in DaVinci Resolve. Whether it’s attaching an emotion or theme to a color palette, or igniting a project with vibrancy, I have a strong understanding of the importance of properly and tactically grading a project."
          );
          break;
        case "thesis":
          getImages("April2024Changes/THESIS/MOTION GRABS");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FTHESIS%2FThesisReel.mp4?alt=media&token=c7e87a47-a67b-439b-b42f-3013cecd58bc"
          );
          setRoles(["DP", "Colorist"]);
          setTitle("THESIS");
          setDesc(
            "Coming in as the Director of Photography on this project I had the pleasure of lensing one of Take Thesis’s most important shoots to date, their “Founders Shoot” with CEO/Founder Dan Freed. Here is a sizzle of the campaign."
          );
          break;
        case "lost-connection":
          getImages("April2024Changes/LOST CONNECTION/MOTION GRABS");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FLOST%20CONNECTION%2Flost_connection_clean_cut%20(1080p).mp4?alt=media&token=2e1b97ec-4cff-405a-acd5-fc7953733411"
          );
          setRoles(["DP", "Colorist"]);
          setTitle("LOST CONNECTION");
          setDesc(
            "Working in the narrative space is always a privilege, and exciting exercise. A long-term best friend of mine wrote this script based on his first experience in New York City, and we teamed up to create a relatable yet niche story that hints at the human experience of dating in The Big Apple."
          );
          break;

        case "the-craft-mouawad":
          getImages("April2024Changes/MOUAWAD/STILL PHOTOGRAPHY");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FMOUAWAD%2FMouwad_DirectorsCut_MP4.mp4?alt=media&token=f869ecb5-fef5-45a8-ace6-14370b66441a"
          );
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("THE CRAFT - MOUAD");
          setDesc(
            "Working with a piece of jewelry that’s worth more than your entire college tuition is quite an interesting and delicate opportunity. Being able to go in and capture the process of creating such a beautiful piece of jewelry for Mouawad in New York City was riveting. Getting to know the jewelers, and being welcomed into their little family was a joy. Projects like this fascinate me, and help me appreciate the precise detail that goes into the beautiful things we enjoy."
          );
          break;

        case "santa-susana":
          getImages("April2024Changes/SANTA SUSANA/STILL PHOTOGRAPHY");
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FSANTA%20SUSANA%2FSantaSusana_Sizzle_FinalCut_Film_MP4.mp4?alt=media&token=4559a565-f567-4fb6-ac9f-665577d4d35a"
          );
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("SANTA SUSANA");
          setDesc(
            "Santa Susana Ranch is a quiet, Argentinian family owned ranch 50 miles outside of Buenos Aires. Approaching this gem, you are unsure of what you are going to see. All of a sudden, you are greeted with warm smiles and familial joy from both the gauchos and family. The modesty of the people at Santa Susana was grounding, and through my lenses I wanted to try and glorify the work they view as just a normal part of their lives. The gauchos live on the ranch, and have a distinct bond with all of the horses. Being able to experience this little ranch was something I’ll never forget."
          );
          break;

        case "cazcabel":
          getImages("April2024Changes/CAZCABEL/STILL PHOTOGRAPHY");
          setRoles(["Photographer"]);
          setTitle("CAZCABEL");
          setDesc(
            "Crafted in Mexico, branded in London, and sold worldwide. Cazcabel Tequila is a premium tequila created in the Jalisco Mountains in Mexico, and loved all over the globe. For their first brand campaign in the United States, I was brought in to capture their bottles in a way that captures the attention of the viewer, and interests them in the “Tequila for All” mission of Cazcabel. "
          );
          break;

        case "nutrisystem":
          getImages("April2024Changes/NUTRISYSTEM/STILL PHOTOGRAPHY");
          setRoles(["Photographer"]);
          setTitle("NUTRISYSTEM");
          setDesc(
            "Part of being both a Director and Photographer is being able to complement both the moving and still image. On this campaign for Nutrisystem, I served as the still photographer, capturing their “Partner Program”. It was a blast to capture these amazing couples, and a perfect fit for me, working with real people and bringing out their best moments."
          );
          break;

        case "savvy-wealth":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FSAVVY%2FSavvyWealth_Leadership_Sizzle_V2.mp4?alt=media&token=e9c9f3c9-a50e-48a3-ab3b-7c755e1e188a"
          );
          getImages("April2024Changes/SAVVY/STILL PHOTOGRAPHY");
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("SAVVY WEALTH");
          setDesc(
            "A wealth management company that’s experienced incredible product velocity, Savvy Wealth, needed to add a professional touch to their digital footprint. I came in as the Director/DP of this two video campaign in attempt to create visually engaging content that will attract more wealth managers and leadership to their startup"
          );
          break;
        case "my-center-within":
          getImages("April2024Changes/MYCENTERWITHIN/STILL PHOTOGRAPHY");
          setRoles(["Photographer"]);
          setTitle("MY CENTER WITHIN");
          setDesc(
            "My Center Within is a sacred space for the divine feminine. Through connection, acceptance, and compassionate listening you explore who you are and what is meaningful to you. We heal when we feel safe and are able to connect to our hearts, our center within, to a deeper sense of knowingness that we carry unique gifts to share. As we discover and honor our gifts, our light shines brighter in this world. Sara’s offerings blend a deep understanding of the human heart."
          );
          break;
        case "the-hunt-institute":
          setURL(
            "https://firebasestorage.googleapis.com/v0/b/cullen-blanchfield.appspot.com/o/April2024Changes%2FTHE%20HUNT%20INSTITUTE%2FTunisianPrimeMinister.mp4?alt=media&token=c2cfdcc6-4de8-4c70-9a4e-bcd5c27b1383"
          );
          getImages("April2024Changes/THE HUNT INSTITUTE/TUNISIA STILLS");
          setRoles(["Director", "DP", "Photographer"]);
          setTitle("THE HUNT INSTITUTE");
          setDesc(
            "I had the ability to direct and DP a testimonial video for the Hunt Institute including a special message from the Prime Minister of Tunisia Najla Bouden. A group of prestigious women engineers from Tunisia came together at The Hunt Institute to workshop their startup ideas to bring back to their home country of Tunisia. I did my best to capture their energy, and joy to be in the United States and The Hunt Institute for Engineering and Humanity"
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

      <div className="full-video-container">
        <h2 className="title">{title}</h2>
        {URL && (
          <video controls className="full-video" controlsList="nodownload">
            <source src={URL} type="video/mp4" />
          </video>
        )}

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
        {title === "A Million Smiles" && (
          <a
            href="https://www.gofundme.com/f/baseball-without-borders-documentary-the-yucatan"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              marginTop: "25px",
            }}
          >
            gofundme
          </a>
        )}
        <article className="video-desc">{desc}</article>
        {poster && (
          <img
            className="motion-grab-image"
            src={poster}
            alt="motion-poster"
          ></img>
        )}
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

      <Footer />
    </div>
  );
}

export default MotionClip;
