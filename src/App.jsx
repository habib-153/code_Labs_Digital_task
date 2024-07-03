import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-[1200px] mx-auto">
        
      </div>
      <Footer />
    </div>
  );
};

export default App;