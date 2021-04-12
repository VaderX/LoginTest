import { Col, Container, Row } from 'reactstrap';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import LOGO from './Assets/logo.png';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Container fluid className="Header">
        <Row>
          <Col md="8" tag="h5" className="m-auto">A Fast Subdomain Enumeration Tool With IP Resolving & HTTP Status Code Presented By</Col>
          <Col md="4">
            <img src={LOGO} alt="logo"/>
          </Col>
        </Row>
      </Container>
      <Search/>      
      <Footer/>
    </React.Fragment>
  );
}

export default App;
