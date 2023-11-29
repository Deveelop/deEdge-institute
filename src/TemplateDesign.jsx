import React from "react";
import { Button, Collapse } from "react-bootstrap";
import {FaBars, FaSignal, FaMapMarker ,FaGraduationCap, FaBullhorn, FaEnvira, FaGlobe, FaGlobeAfrica } from 'react-icons/fa'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TestimonyData } from "./Components/testimonyData";

const TemplateDesign = () => {
    return ( 
    <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">

<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button">
        <FaBars/>               
      </button>
      <a className="navbar-brand" href="#">
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
      <FaSignal size='15rem' color="#FF914D"/>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <FaGlobeAfrica className="slide" size='15rem' color="#FF914D" />
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
      <FaGraduationCap  size='5rem' color="#FF914D"/>
      <h4>CERTIFIED COURSES</h4>
      <p>We offer Courses that can help you build profitable digital skills and implement them with just your Smart phone. Which you can use to work online and also setup your online businesses.</p>
    </div>
    <div className="col-sm-4">
      <FaBullhorn  size='5rem' color="#FF914D"/>
      <h4>AFFILIATE MARKETING</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>

<div id="portfolio" className="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we have created</h4>
  <div className="row text-center slideanim">
    <div className="col-sm-4">
      <div className="thumbnail">
        <FaEnvira/>
        <p><strong>Sproutgigs Freelancer Guide</strong></p>
        <p>Yes, we built an enriched tutorial on how to earn swiftly with just your mobile phone as a Freelancer on Sproutgigs platform.</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="newyork.jpg" alt="New York" width="400" height="300"/>
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"/>
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
  </div>
</div><br/>

<div className=" text-center bg-grey px-0 py-4">
<div className="">
<h2 style={{fontSize: '15px'}}>what our students say</h2>
    <Row xs={1} md={3} className="g-4 m-2">
      {TestimonyData.map((idx) => (
        <Col key={idx.id}>
          <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={idx.url} />
      <Card.Body >
        <Card.Title >{idx.student}</Card.Title>
        <Card.Text style={{fontSize: '10px'}}  >
         {idx.comment}
        </Card.Text>
        <Card.Text>
        <label ><span><FaMapMarker/></span>{idx.studentLocation}</label>
        </Card.Text>
        
        <Button variant="primary">See earnings</Button>
      </Card.Body>
    </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
    <div id="pricing" className="container-fluid">
  <div className="text-center">
    <h2>Pricing</h2>
    <h4>Choose a payment plan that works for you</h4>
  </div>
  <div className="row slideanim">
    <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Basic</h1>
        </div>
        <div className="panel-body">
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$19</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div>      
    </div>     
    <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Pro</h1>
        </div>
        <div className="panel-body">
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$29</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div>      
    </div>       
    <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Premium</h1>
        </div>
        <div className="panel-body">
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div>      
    </div>    
  </div>
</div>
<div id="contact" class="container-fluid bg-grey">
  <h2 className="text-center">CONTACT</h2>
  <div className="row">
    <div className="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span className="glyphicon glyphicon-map-marker"></span>NO. 5 Udik Villa Ichwa North Bank, Makurdi Benue State.</p>
      <p><span className="glyphicon glyphicon-phone"></span> +2349033317004</p>
      <p><span className="glyphicon glyphicon-phone"></span> +2348065032361</p>
      <p><span className="glyphicon glyphicon-phone"></span> +2349033988566</p>
      <p><span className="glyphicon glyphicon-envelope"></span> dedgeinstitute@gmail.com</p>
    </div>
    <div className="col-sm-7 slideanim">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      <div className="row">
        <div className="col-sm-12 form-group">
          <button className="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>



</div>
)
}

export default TemplateDesign