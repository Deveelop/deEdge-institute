import { Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {TestimonyData} from '../Components/testimonyData'
import {FaEnvira, FaMapMarker} from "react-icons/fa"

const Portfolio = () => {
  return (
    <>
    <div id="portfolio" className="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h4>What we have created</h4>
  <div className="row text-center slideanim">
    <div className="col-sm-4">
      <div className="thumbnail">
        <FaEnvira size='2rem' color="green"/>
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
    <Row xs={1} md={3} className="g-4 m-4">
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
        <label ><span><FaMapMarker color="#FF914D"/></span>{idx.studentLocation}</label>
        </Card.Text>
        
        <Button variant="primary">See earnings</Button>
      </Card.Body>
    </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
    </>
  )
}

export default Portfolio