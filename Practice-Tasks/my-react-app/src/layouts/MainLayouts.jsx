import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <div className="w-4/5 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayouts;
