import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import FunnyFactsAboutSpiders from "./pages/FunnyFactsAboutSpiders";
import MyBelovedSpidersList from "./pages/MyBelovedSpidersList";
import MyCats from "./pages/MyCats";
import CatsApi from "./pages/CatsApi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#1D2D50] text-[#1E5F74]">
        <Navbar />
        <div>
          <Banner />
          <About />
          <FunnyFactsAboutSpiders />
          <MyBelovedSpidersList />
          <MyCats />
          <CatsApi />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
