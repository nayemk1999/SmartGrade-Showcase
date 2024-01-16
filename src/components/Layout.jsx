import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import StudentsTable from "./StudentsTable";

const Layout = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeroSection />
      <StudentsTable />
      <Footer />
    </div>
  );
};

export default Layout;
