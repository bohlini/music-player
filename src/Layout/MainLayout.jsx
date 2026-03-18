import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useCurrentTrack } from "../Context/CurrentTrackContext";

export default function MainLayout({ children }) {
  // const image = currentSong.img_url;
  const { currentTrack } = useCurrentTrack();

  useEffect(() => {
    if (!currentTrack) return;
    Object.assign(document.body.style, {
      backgroundImage: `url(${currentTrack.img_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    });
  }, [currentTrack]);

  return (
    <div style={{ margin: "0 40px" }}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
