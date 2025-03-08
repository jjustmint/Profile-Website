import "./App.css";
import Home from "./pages/home";
import Navbar from "./assets/navbar";
import Gallery from "./pages/Gallery";
import About_me from "./pages/aboutme";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About_me/>
      <Gallery/>
    </div>
  );
}

export default App;