import Navbar from "../Components/Navbar/Navbar";

export default function MainLayout({ children }) {
  // const image = currentSong.img_url;

  // useEffect(() => {
  //   if (!currentSong) return;
  //   Object.assign(document.body.style, {
  //     backgroundImage: `url(${currentSong.img_url})`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     backgroundAttachment: "fixed",
  //   });
  // }, [currentSong]);

  return (
    <div style={{ margin: "0 40px" }}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
