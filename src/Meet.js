import React, { useEffect, useState, Component } from "react";
import { Navbar,Container,Nav,Card,Button,Row,Col } from 'react-bootstrap';
import { FaBeer,FaLocationArrow } from 'react-icons/fa';
import logo from './banner.jpg';
import DateTimePicker from 'react-datetime-picker';

import {BiUserCircle } from "react-icons/bi";
function Meet() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
         
         <Nav 
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

  <Card style={{ backgroundColor: '#ffffff',borderRadius:"10px",margin:"10px"}}>
  <Card.Body>
    <Card.Title><BiUserCircle size={70} /> Ajay</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Football</Card.Subtitle>
    <Card.Text>
      10 Going
    </Card.Text>
    <Card.Link href="#">Join Now</Card.Link>
    <Card.Link href="#">sent queries</Card.Link>
  </Card.Body>
</Card>
        
<Card style={{ backgroundColor: '#ffffff',borderRadius:"10px",margin:"10px"}}>
  <Card.Body>
    <Card.Title><BiUserCircle size={70} />hari</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    5 Going
    </Card.Text>
    <Card.Link href="#">Join Now</Card.Link>
    <Card.Link href="#">sent queries</Card.Link>
  </Card.Body>
</Card>
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
   
  </Nav>
        </div>
  )
}

export default Meet
