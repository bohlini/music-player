import "./global-css.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Callback from "./Callback";
import Home from "./Components/Home/Home";
import MainLayout from "./Components/Layout/MainLayout";
import NowPlaying from "./Components/NowPlaying/NowPlaying";
import Playlists from "./Components/Playlists/Playlists";
import Profile from "./Components/Profile/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/nowPlaying" element={<NowPlaying />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
