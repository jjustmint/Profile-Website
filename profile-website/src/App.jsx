import Home from "./pages/home";
import Navbar from "./assets/navbar";
import Gallery from "./pages/Gallery";
import AboutMe from "./pages/aboutme";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <AboutMe/>
      <Gallery/>
    </div>
  );
}

export default App;