import About from "./components/about";
import Experiences from "./components/experinces";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skills from "./components/skill";


function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experiences/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
