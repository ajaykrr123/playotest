import React from 'react'
import './auto.css';
import { Navbar,Container,Nav,Card,Button,Row,Col } from 'react-bootstrap';
import 'react-autocomplete-input/dist/bundle.css';
import { Form } from 'react-bootstrap';
import {BiUserCircle } from "react-icons/bi";
import { FaBeer,FaLocationArrow } from 'react-icons/fa';

function Auto() {
    
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
      <Nav.Link eventKey="link-2"><FaBeer /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
       
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <form id="first_name">
    <div class="form-group">
         <label>E mail ID</label>
         <input type="text" class="form-control input-lg" />
    </div>
     <div class="form-group">
         <label>password</label>
         <input type="password" class="form-control input-lg" />
         
    </div>
    
    <Button type="submit" style={{ backgroundColor: ' #a5cf1b' ,width:'45%',marginLeft:'70px', margin:'20px',border:'none', float:'right'}}>Submit</Button>
</form>


    </div>
  )
}

export default Auto
