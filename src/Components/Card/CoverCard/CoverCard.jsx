import { useTracks } from "../../Context/TracksContext"
import { useCurrentTrack } from "../../Context/CurrentTrackContext"
import { useThemes } from "../../Context/ThemeContext"
import styles from "./CoverCard.module.css"

export default function CoverCard({width, height, track}) {
    const {tracks, isLoading} = useTracks()
    const {currentTrack} = useCurrentTrack()
    const {currentTheme} = useThemes()

    if (isLoading || !currentTheme || !currentTrack || !tracks || !tracks[track]) return <p>Loading...</p>
    else return (
        <>
            <img src={tracks[track].img_url} alt="" style={{width: width, height: height, border : `1px solid ${currentTheme}`}} className={styles.image}/>
</>
    )
}