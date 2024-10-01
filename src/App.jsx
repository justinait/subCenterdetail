import About from "./Components/About/About"
import After from "./Components/After/After";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Techniques from "./Components/Techniques/Techniques"
import '@fontsource-variable/inter';
import '@fontsource-variable/montserrat';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Techniques/>
      <About/>
      <After/>
      <Contact />
    </div>
  )
}

export default App
