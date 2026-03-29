import "./global-css.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Home } from "./Components/Pages/Home/Home";
import { NowPlaying } from "./Components/Pages/NowPlaying/NowPlaying";
import { Playlists } from "./Components/Pages/Playlists/Playlists";
import { Profile } from "./Components/Pages/Profile/Profile";
import { TracksProvider } from "./Components/Context/TracksContext";
import { ThemeProvider } from "./Components/Context/ThemeContext";
import { FavoritesProvider } from "./Components/Context/FavoritesContext";
import { CurrentTrackProvider } from "./Components/Context/CurrentTrackContext";
import { DurationProvider } from "./Components/Context/DurationContext";
import { QueueProvider } from "./Components/Context/QueueContext";
import { PlaylistProvider } from "./Components/Context/PlaylistContext";

// //School Notes
// import { UseRef } from "./SchoolNotes/UseRef";
// import MultiForm from "./SchoolNotes/MultiForm";
// import Performance from "./SchoolNotes/Performance"

export default function App() {
  return (
    <BrowserRouter>
      <TracksProvider>
        <ThemeProvider>
          <FavoritesProvider>
            <CurrentTrackProvider>
              <DurationProvider>
                <QueueProvider>
                  <PlaylistProvider>
                  <MainLayout>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/nowPlaying" element={<NowPlaying />} />
                      <Route path="/playlists" element={<Playlists />} />
                      <Route path="/profile" element={<Profile />} />
                    {/* <Route path="useRef" element={<UseRef />} />
                    <Route path="multiForm" element={<MultiForm />} />
                    <Route path="performance" element={<Performance />} /> */}
                    </Routes>
                  </MainLayout>
                  </PlaylistProvider>
                </QueueProvider>
              </DurationProvider>
            </CurrentTrackProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </TracksProvider>
    </BrowserRouter>
  );
}
