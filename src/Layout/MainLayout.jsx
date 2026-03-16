import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div style={{ margin: "0 40px" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
