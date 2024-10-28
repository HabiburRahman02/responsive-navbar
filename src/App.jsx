import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

const App = () => {

  return (
    <div >
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <PriceOptions></PriceOptions>
        <Phones></Phones>
      </div>
    </div>
  );
};

export default App;