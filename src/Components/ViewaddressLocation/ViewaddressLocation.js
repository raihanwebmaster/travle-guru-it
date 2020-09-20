import React from 'react';
import { Button, Col, Container, Form, FormControl, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../website-designer/Logo.png'
import './ViewaddressLocation.css';
import hotels from './FakeHotel';
import Hotel from './Hotel';
import GoogleMaps from './GoogleMaps';


const ViewaddressLocation = () => {
    
    return (
        <section>
            <Container>
                        <Navbar className="pt-3" variant="dark">
                            <Navbar.Brand href="#home"><img className="logo1" src={logo} alt="" /></Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                               
                                <Link className='things ml-5 lin' to="home">News</Link>
                                <Link className='things ml-5 lin' to="destination">Destination</Link>
                                <Link className='things ml-5 lin' to="blog">Blog</Link>
                                <Link className='things ml-5 lin' to="contact">Contact</Link>
                                <Link className='things ml-5 lin' to='/login'><Button className='button3'>Login</Button></Link>
                            </Navbar.Collapse>
                        </Navbar>
                        <hr/>
                </Container>
                <Container>
                    <Row>
                        <Col md={7}>
                                {
                                    hotels.map(hotel=><Hotel hotel={hotel}></Hotel>)
                                }
                        </Col>
                        <Col md={4}>
                           
                            <div style={{paddingTop:"50px"}} >
                            <GoogleMaps></GoogleMaps>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    );
};

export default ViewaddressLocation;