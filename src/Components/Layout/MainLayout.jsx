import { useLocation } from "react-router";
import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { useWindowWidth } from "../Hooks/useWindowWidth";
import { Navbar } from "../Navbar/Navbar";
import { DeviceSelector } from "../DeviceSelector.jsx/DeviceSelector";

function MainLayout({ children }) {
  const { currentTrack } = useCurrentTrack();
  const { windowWidth } = useWindowWidth();

  const mobileWindow = windowWidth <= 768;
  const location = useLocation();

  const pageVariant = () => {
    if (location.pathname === "/") return "nowPlaying";
    if (location.pathname === "/playlists") return "playlists";
    if (location.pathname === "/profile") return "profile";
    else return "default";
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
          margin: mobileWindow ? "0 10px" : "0 40px",
          zIndex: 1,
          // overflowX: "hidden",
        }}
      >
        <Navbar />
        {children}
        <div>
          <DeviceSelector variant={pageVariant()} />
        </div>
      </div>
    </>
  );
}

export { MainLayout };
