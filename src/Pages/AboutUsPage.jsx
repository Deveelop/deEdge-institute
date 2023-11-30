import React from 'react'
import { FaSignal, FaGlobeAfrica,  } from 'react-icons/fa';
const AboutUsPage = () => {
  return (
    <>
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
</>
  )
}

export default AboutUsPage;