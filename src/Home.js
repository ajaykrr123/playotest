
import { Navbar,Container,Nav,Card } from 'react-bootstrap';
import logo from './banner.jpg';
import React, { useEffect, useState, Component } from "react";
import logo2 from './banner2.jpg';
import { FaBeer,FaLocationArrow } from 'react-icons/fa';
import { FiActivity,FiHeart} from 'react-icons/fi';
import { FcCalendar} from 'react-icons/fc';
import {BiUserCircle,BiRocket,GrGroup } from "react-icons/bi";
import {AiOutlineUsergroupAdd,AiFillGift } from "react-icons/ai";

function Home() {
  return (
    <div><Nav 
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><FaLocationArrow/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><FaBeer /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <Card style={{ backgroundColor: '#ffffff',borderRadius:"10px",margin:"10px"}}>
  <Card.Body>
    <Card.Title><BiUserCircle size={70} />Hey Ajay</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      
    </Card.Text>
    <Card.Link href="#"></Card.Link>
    <Card.Link href="#"></Card.Link>
  </Card.Body>
</Card>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={logo} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={logo2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={logo} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<Card style={{ width:'100%', backgroundColor: '#ffffff',borderRadius:"10px",margin:"10px"}}>
  <Card.Body >
    {/* <Card.Title><BiUserCircle size={75}style={{  backgroundColor: 'blue',borderRadius:"70px"}} /></Card.Title>
    <Card.Title><BiUserCircle size={75}style={{  backgroundColor: 'blue',borderRadius:"70px"}} /></Card.Title> */}
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      
    </Card.Text>
    <Card.Link href="#"><BiUserCircle size={75}style={{  backgroundColor: 'blue',borderRadius:"70px"}} /></Card.Link>
   
   
    <Card.Link href="#"><FiActivity size={75}style={{  backgroundColor: '#fc0398',borderRadius:"70px"}}  /></Card.Link>
    <Card.Link href="#" style={{  Color: 'pink'}}><FcCalendar size={75}style={{  backgroundColor: 'pink',borderRadius:"70px"}} /></Card.Link>
    <Card.Link href="#"><BiRocket size={75}style={{  backgroundColor: '#03fcc6',borderRadius:"70px"}} /></Card.Link><br></br>
    <Card.Link href="#"><FiHeart size={75}style={{  backgroundColor: '#31747a',borderRadius:"70px"}} /></Card.Link>
    <Card.Link href="#"><AiOutlineUsergroupAdd size={75}style={{  backgroundColor: '#527a55',borderRadius:"70px"}} /></Card.Link>
    <Card.Link href="#"><AiFillGift size={75}style={{  backgroundColor: '#2399ba',borderRadius:"70px"}} /></Card.Link>
  </Card.Body>
</Card>
<Nav.Link href="/home"><img  src={logo} class="card-img" alt="..."  /></Nav.Link>
<Nav.Link href="/home"><img src={logo} class="card-img" alt="..."  /></Nav.Link>
<Nav.Link href="/home"><img src={logo} class="card-img" alt="..."  /></Nav.Link>
<Nav 
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><FaLocationArrow/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><FaBeer /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
 

        </div>
  )
  
}

export default Home

