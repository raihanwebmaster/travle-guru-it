import React from 'react';
import { Button, Form, FormControl, Navbar} from 'react-bootstrap';
import './Home.css';
import logo from'../../website-designer/Logo.png'
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';



const Home = () => {
    return (
           <section>
                <Container>
                        <Navbar className="pt-3" variant="dark">
                            <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Form inline>
                                    <FormControl variant='white' type="text" placeholder="Search Your Destination...." className="mr-sm-2 ml-5" />
                                </Form>
                                <Link className='ml-5 lin' to="/home">News</Link>
                                <Link className='ml-5 lin' to="destination">Destination</Link>
                                <Link className='ml-5 lin' to="blog">Blog</Link>
                                <Link className='ml-5 lin' to="contact">Contact</Link>
                                <Link className='ml-5 lin' to='/login'><Button className='button'>Login</Button></Link>
                            </Navbar.Collapse>
                        </Navbar>
                </Container>
           </section>
    );
};

export default Home;