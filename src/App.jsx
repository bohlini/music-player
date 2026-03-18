import "./global-css.css";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Playlists from "./Pages/Playlists/Playlists";
import Profile from "./Pages/Profile/Profile";
import { TracksProvider } from "./Context/TracksContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { FavoritesProvider } from "./Context/FavoritesContext";
import { CurrentTrackProvider } from "./Context/CurrentTrackContext";

//School Notes
import { UseRef } from "./SchoolNotes/UseRef";
import MultiForm from "./SchoolNotes/MultiForm";

export default function App() {
  return (
    <BrowserRouter>
      <TracksProvider>
        <ThemeProvider>
          <FavoritesProvider>
            <CurrentTrackProvider>
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nowPlaying" element={<NowPlaying />} />
                  <Route path="/playlists" element={<Playlists />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="useRef" element={<UseRef />} />
                  <Route path="multiForm" element={<MultiForm />} />
                </Routes>
              </MainLayout>
            </CurrentTrackProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </TracksProvider>
    </BrowserRouter>
  );
}
