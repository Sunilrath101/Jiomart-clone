import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Home/Home";
import Men from "./Home/Men";
import Allroutes from "./Home/Allroutes";
import Login from "./Home/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
