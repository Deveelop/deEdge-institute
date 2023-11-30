import Header from "./Components/Header";
import Jubotron from "./Components/Jubotron";
import AboutUsPage from "./Pages/AboutUsPage";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";


const TemplateDesign = () => {
    return ( 
<div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
<Header/>
<Jubotron/>
<div id="about">
 <AboutUsPage/>
</div>
<div id="services">
  <Services/>
</div>
<div id="portfolio">
  <Portfolio/>
</div><br/>
    <div id="pricing">
  <Pricing/>
</div>
<div id="contact">
 <Contact/>
</div>
</div>
)
}

export default TemplateDesign