import CoverCard from "../../Card/CoverCard/CoverCard";
import { useThemes } from "../../Context/ThemeContext";
import { useTracks } from "../../Context/TracksContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import styles from "./Home.module.css"

function Home() {
  const { currentTrack, currentIndex } = useCurrentTrack();
  const {tracks, isLoading} = useTracks()
  const windowWidth = useWindowWidth()
  const smallWindow = windowWidth <= 1145

  if (isLoading) return <p>Loading...</p>
  else return (
    <>
    <div className={styles.mainWrap}>
    <div className={styles.firstCol}>
      <div className={styles.row}> 
        <CoverCard width={"7em"} height={"12em"} track={currentIndex}/>
        <CoverCard width={"15em"} height={"12em"} track={1}/>
          <div className={styles.col}>
            <CoverCard width={"4em"} height={"5.4em"} track={1}/>
            <CoverCard width={"4em"} height={"5.4em"} track={currentIndex}/>
          </div>
        </div>

        <div className={styles.row}>
          <CoverCard width={"28em"} height={"14em"} track={1}/>
        </div>
        <div className={styles.row}>
        <div className={styles.row}>
          <CoverCard width={"15em"} height={"14em"} track={5}/>
        </div>
        <div className={styles.col}>
          <CoverCard width={"5em"} height={"6.5em"} track={5}/>
          <CoverCard width={"5em"} height={"6.5em"} track={currentIndex}/>
        </div>
        <div className={styles.col}>
          <CoverCard width={"5.5em"} height={"6.5em"} track={currentIndex}/>
          <CoverCard width={"5.5em"} height={"6.5em"} track={5}/>
          </div>
        </div>
    </div>
       {/* <div className={styles.secondCol}>
        <CoverCard width={"18em"} height={"20em"} track={currentIndex}/>
        </div> */}
      </div>
    </>
  );
}

export {Home}
