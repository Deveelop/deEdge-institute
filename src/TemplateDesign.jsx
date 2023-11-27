const TemplateDesign = () => {
    return ( 
    <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        {/* <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                         */}
        Toggle
      </button>
      <a class="navbar-brand" href="#">
      <img src="/company_logo.png" alt="company logo" width="50" height="50"/>
    </a>
    </div>
    <div className="navlist" id="myNavbar">
      <ul className="gap-3">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="jumbotron text-center">
  <h1>deEDGE INSTITUTE</h1> 
  <p>...Empowering Digital Entrepreneurship</p> 
  <form>
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required />
      <div className="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
<div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Us</h2>
      <br/>
      <h4>At dEDGE Institute, we are on a mission to transform lives and elevate financial futures. We believe that the path to prosperity lies within the palm of your hands, and we are here to guide you on that journey</h4><br/>
      <p>
      Our platform is dedicated to empowering individuals with the knowledge and skills to make money online from the comfort of their homes, using just their smartphones. We understand the profound impact that financial freedom can have on one's life and their ability to serve a higher purpose.

As a community, we strive to raise financial stewards - individuals who not only manage their resources wisely but also use their financial abundance to selflessly advance the kingdom of God. Our approach is built on a foundation of education, empowerment, and faith.

We offer accessible and comprehensive online courses that equip you with the tools to create sustainable online income streams. Through our supportive community, you'll find encouragement, inspiration, and shared learning experiences that foster your financial growth.

dEDGE Institute is more than a platform; it's a movement. Our core values of education, stewardship, community, and faith drive everything we do. We believe that financial empowerment can be a force for good in the world, and we invite you to join us on this transformative journey.

Discover how to unlock the potential of your smartphone, your financial resources, and your heart's desire to make a difference. Welcome to dEDGE Institute, where we are "Empowering Digital Entrepreneurship" to change lives and impact the world.

      </p>
      <br/>
      <button className="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2><br/>
      <h4><strong>MISSION STATEMENT:</strong>- Provide accessible and comprehensive online courses on money-making strategies using smartphones.
- Cultivate financial stewardship principles, encouraging responsible and impactful wealth management.
- Inspire a generation committed to advancing the kingdom of God through selfless financial contributions.
- Foster a supportive dEdge community where knowledge-sharing and mentorship thrive.
- Strive to create a world where financial empowerment leads to meaningful contributions to society.</h4><br/>
      <p><strong>VISION STATEMENT:</strong> - Empower individuals worldwide to achieve financial independence through digital skills and online opportunities.
- Foster a community of self-sufficient digital entrepreneurs.
- Cultivate a global network of empowered individuals contributing to positive change.</p>
    </div>
  </div>
</div>

<div id="services" className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h4>CERTIFIED COURSES</h4>
      <p>We offer Courses that can help you build profitable digital skills and implement them with just your Smart phone. Which you can use to work online and also setup your online businesses.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"></span>
      <h4>AFFILIATE MARKETING</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>

<div id="portfolio" class="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we have created</h4>
  <div class="row text-center slideanim">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="paris.jpg" alt="Sproutgigs" width="400" height="300"/>
        <p><strong>Sproutgigs Freelancer Guide</strong></p>
        <p>Yes, we built an enriched tutorial on how to earn swiftly with just your mobile phone as a Freelancer on Sproutgigs platform.</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="newyork.jpg" alt="New York" width="400" height="300"/>
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"/>
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default TemplateDesign;

