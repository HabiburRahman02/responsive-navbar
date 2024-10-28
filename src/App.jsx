import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

const App = () => {

  return (
    <div >
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <PriceOptions></PriceOptions>
      </div>
    </div>
  );
};

export default App;