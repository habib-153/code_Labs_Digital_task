import Banner from "./Component/Banner/Banner";
import ComprehensiveCare from "./Component/ComprehensiveCare/ComprehensiveCare";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar";
import Service from "./Component/Service/Service";
import WhoWeAre from "./Component/WhoWeAre/WhoWeAre";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-[1200px] mx-auto">
        <ComprehensiveCare />
        <WhoWeAre />
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default App;