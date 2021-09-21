import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import InstaPosts from "./components/InstaPosts";
import Sale from "./components/Sale";


function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <Explore />
      <Categories />
      <BestSeller />
      <Sale />
      <InstaPosts />
      <Footer />
      
    </div>
  );
}

export default App;
