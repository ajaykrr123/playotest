import React from 'react'
import { Navbar,Container,Nav,Card,Button,Row,Col } from 'react-bootstrap';
import 'react-autocomplete-input/dist/bundle.css';
import { Form } from 'react-bootstrap';
import learn from './trainer.jpg';
import ask from './community.jpg';
import nurition from './nutri.jpg';
import tips from './tips.jpg';
import fit from './fit.jpg';
import logo from './banner.jpg';
import Gear from './Gear.jpg';
import Class from './Class.jpg';
import Football from './football.jpeg';
import { FaBeer,FaLocationArrow } from 'react-icons/fa';

function Learn() {
  return (
    <div>  <Nav 
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    style={{ backgroundColor: ' #273238'}}
  >
    <Nav.Item>
      <Nav.Link href="/home"><FaLocationArrow/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"  style={{float:'right'}}><FaBeer /></Nav.Link>
    </Nav.Item>
   
  </Nav>
  <Row>
    <Col><Nav.Link href="/home"><img src={learn} class="card-img" alt="..."  />
    Trainer led Sessions
    </Nav.Link></Col>
    <Col ><Nav.Link href="/home"><img src={ask} class="card-img" alt="..."  />Ask the community</Nav.Link></Col>
    
  </Row>
  
  <span>resources</span>
  <Row>
    <Col><Nav.Link href="/home"><img src={Football} class="card-img" alt="..."  />
    Game Basics
    </Nav.Link></Col>
    <Col ><Nav.Link href="/home"><img src={tips} class="card-img" alt="..."  />Techniques Tactics</Nav.Link></Col>
    <Col><Nav.Link href="/home"><img src={fit} class="card-img" alt="..."  />Fitness & Injuries</Nav.Link></Col>
  </Row>
  <Row>
    <Col><Nav.Link href="/home"><img src={nurition} class="card-img" alt="..."  />
    Nutrition
    </Nav.Link></Col>
    <Col ><Nav.Link href="/home"><img src={Gear} class="card-img" alt="..."  />Gear</Nav.Link></Col>
    <Col><Nav.Link href="/home"><img src={Class} class="card-img" alt="..."  />Master Classes</Nav.Link></Col>
  </Row>
  <Nav.Link href="/home"><img src={logo} class="card-img" alt="..."  /></Nav.Link>
 


 <Nav 
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    style={{ backgroundColor: 'white',float:'right',width: '100%',marginTop:'50px' , position: 'fixed', bottom: '0'}}
  >
    <Nav.Item>
      <Nav.Link href="/home"><FaLocationArrow/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"  ><FaBeer /></Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
       
      </Nav.Link>
    </Nav.Item> */}
  </Nav>
  
  </div>
  )
}

export default Learn