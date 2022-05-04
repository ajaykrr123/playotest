import React from 'react'
import { Navbar,Container,Nav,Card,Button,Row,Col } from 'react-bootstrap';
import { FaBeer,FaLocationArrow } from 'react-icons/fa';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function Location() {
    const items = [
        {
            name: "Thalassery"},
          {name: " Ponnani"},
            {name: " Vatakara"},
            {name: " Kanhangad"},
            {name: " Koyilandy"},
            {name: " Kalamassery"},
            {name: " Ponnani"},
            {name: " Ponnani"},
            {name: " Neyyattinkara"}
      ]
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
            
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }
    
      return (
        <div className="App">
          <header className="App-header">
               
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
            <div style={{ width: "100%"}}>
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                style={{ borderRadius: "14px", }}
              />
            </div>
          </header>
        </div>
      )
    }
    
export default Location

