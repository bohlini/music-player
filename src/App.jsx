import "./global-css.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./PageComponents/Home/Home";
import NowPlaying from "./PageComponents/NowPlaying/NowPlaying";
import Playlists from "./PageComponents/Playlists/Playlists";
import Profile from "./PageComponents/Profile/Profile";
import { SongsProvider } from "./Context/SongsContext";
import { ThemeProvider } from "./Context/ThemeContext";

//School Notes
import { UseRef } from "./SchoolNotes/UseRef";

export default function App() {
  return (
    <BrowserRouter>
      <SongsProvider>
        <ThemeProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nowPlaying" element={<NowPlaying />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="useRef" element={<UseRef />} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </SongsProvider>
    </BrowserRouter>
  );
}
