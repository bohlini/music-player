# Music Player (React)

Lightweight React music player used for learning and UI experimentation.

Overview

- Single-page React app that displays tracks, playlists, queue and a now-playing area.
- Uses a small set of contexts for state (tracks, favorites, queue, current track, theme, etc.).

Key features

- Browse playlists and queue
- View now-playing track with progress and playback controls
- Add track to favorites

Project structure (important paths)

- src/Components: main React components grouped by feature (Card, List, PlayerContainer, Context)
- src/Components/Context: React Context providers and hooks for app state

External API

- This project fetches data from an external API previously built in another repository (api-database-c4)
- src/mockData: local JSON used for development
- src/index.js: app entry (standard CRA-style)

Deployed at: https://music-player-mocha-alpha.vercel.app/
