import "./global-css.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { MainLayout } from "./Components/Layout/MainLayout";
import { NowPlaying } from "./Components/Pages/NowPlaying/NowPlaying";
import { Playlists } from "./Components/Pages/Playlists/Playlists";
import { Profile } from "./Components/Pages/Profile/Profile";
import { TracksProvider } from "./Components/Context/TracksContext";
import { FavoritesProvider } from "./Components/Context/FavoritesContext";
import { CurrentTrackProvider } from "./Components/Context/CurrentTrackContext";
import { DurationProvider } from "./Components/Context/DurationContext";
import { QueueProvider } from "./Components/Context/QueueContext";
import { PlaylistProvider } from "./Components/Context/PlaylistContext";

export default function App() {
  return (
    <BrowserRouter>
      <TracksProvider>
        <FavoritesProvider>
          <CurrentTrackProvider>
            <DurationProvider>
              <QueueProvider>
                <PlaylistProvider>
                  <MainLayout>
                    <Routes>
                      <Route path="/" element={<NowPlaying />} />
                      <Route path="/playlists" element={<Playlists />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </MainLayout>
                </PlaylistProvider>
              </QueueProvider>
            </DurationProvider>
          </CurrentTrackProvider>
        </FavoritesProvider>
      </TracksProvider>
    </BrowserRouter>
  );
}
