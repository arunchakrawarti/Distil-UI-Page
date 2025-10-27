import Scroll from "./components/pages/Home/Scroll";
import Build from "./components/pages/Home/Build";
import Our from "./components/pages/Home/Our";
import Family from "./components/pages/Home/Family";
import Education from "./components/pages/Home/Education";
import Design from "./components/pages/Home/Design";
import Creating from "./components/pages/Home/Creating";
import Global from "./components/pages/Home/Global";
import Join from "./components/pages/Home/Join";
import Contact from "./components/pages/Home/Contact";


export default function Home() {
  return (
    <div>
      <Scroll/>
      <Build/>
      <Our/>
      <Education/>
      <Family/>
      <Design/>
      <Creating/>
      <Global/>
      <Join/>
      <Contact/>
    </div>
  );
}
