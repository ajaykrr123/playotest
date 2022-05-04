import React from 'react'
import { Form,Button,Nav } from 'react-bootstrap';
// import { Navbar,Container,Nav,Card,Button,Row,Col } from 'react-bootstrap';
import { FaBeer,FaLocationArrow } from 'react-icons/fa';
function Signup() {
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
        
        <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button type="submit" style={{ backgroundColor: ' #a5cf1b' ,width:'45%',marginLeft:'70px', margin:'20px',border:'none', float:'right'}}>Submit</Button>
  </Form></div>
  )
}

export default Signup