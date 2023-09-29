import {NavBar} from "./components/NavBar";
import {Hero} from "./components/Hero";
import {Technology} from "./components/Technology";
import {WeCare} from "./components/WeCare";
import {EmailUs} from "./components/EmailUs";
import {Footer} from "./components/Footer";


function App() {


  return (
      <div>
        <NavBar/>
          <Hero/>
          <Technology/>
          <WeCare/>
          <EmailUs />
          <Footer/>
      </div>
  );
}

export default App;
