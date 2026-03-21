import Navbar from "../Components/Navbar/Navbar";
import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { useLocation } from "react-router";
import PlayerContainer from "../Components/PlayerContainer/PlayerContainer";
import DeviceSelector from "../Components/DeviceSelector.jsx/DeviceSelector";

export default function MainLayout({ children }) {
  const { currentTrack } = useCurrentTrack();
  const location = useLocation();

  const pageVariant = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname === "/nowPlaying") return "nowPlaying";
    if (location.pathname === "/playlists") return "playlists";
    return "default";
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: currentTrack
            ? `url(${currentTrack.img_url})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px) brightness(0.8)",
          animation: "zoomIn 8s ease-in-out infinite alternate",
          transform: "scale(1.5)",
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.4))",
          zIndex: -1,
        }}
      />
      <div
        style={{
          margin: "0 40px",
          zIndex: 1,
        }}
      >
        <Navbar />
        {children}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <PlayerContainer variant={pageVariant()} />
          {/* <DeviceSelector variant={pageVariant()} /> */}
        </div>
      </div>
    </>
  );
}
