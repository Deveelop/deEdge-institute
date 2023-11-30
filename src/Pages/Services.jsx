import React from 'react'
import { FaBullhorn, FaGraduationCap } from 'react-icons/fa'
const Services = () => {
  return (
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
    <div className="col-sm-4">
      <FaBullhorn  size='5rem' color="#FF914D"/>
      <h4>Supportive Community</h4>
      <p>Engage with a vibrant community of like-minded individuals on a similar journey.
   Exchange insights, challenges, and success stories through our interactive forums and events.</p>
    </div>
  </div>
</div>
  )
}

export default Services