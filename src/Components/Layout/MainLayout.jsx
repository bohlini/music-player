import Navbar from "../Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div style={{ margin: "0 40px" }}>
      <Navbar />
      {children}
    </div>
  );
}
