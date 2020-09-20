import { Container } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import Home from '../Home/Home';
import './DateLine.css';

const DateLine = () => {
    const history = useHistory();
    const handleLogin = () =>{
        history.push("/ViewLocation");
    };


    const {viewCardName} = useParams();
    const booking = FakeData.find(view => view.name === viewCardName);
    return (
        <section className="background-image">
           <div className="color-overlay"></div>
           <Home></Home>
           <Container>
                <Row className="align-items-center mt-5">
                  <Col lg={5} className="mb-5 mb-lg-0">
                        <h3 className="edit-text text-center text-md-left my-4">{booking.name}</h3>
                        <p className="text-paragraph text-justify">{booking.longDesc}</p>
                 </Col>  
                 <Col lg={2} className="d-none d-lg-block"></Col> 
                        <Col lg={5} className="forms mb-5 mb-lg-0">
                        <form className="form-area">
                            <div className="form-group">
                                <label>From</label>
                                <input type="address" className="form-control" placeholder="Enter Address" required />
                            </div>

                            <div className="form-group">
                                <label>To</label>
                                <input type="address" className="form-control" defaultValue={viewCardName} />
                            </div>
                            <div className="form-group row booking-date">
                                <div className="col-6">
                                    <label htmlFor="date-input">From</label>
                                    <input className="form-control" type="date" id="dateFrom" required />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="dateTo">To</label>
                                    <input className="form-control" type="date" id="dateTo" required />
                                </div>
                            </div>
                                <button onClick={handleLogin} type="submit" className="btn btn-warning btn-block  ">Submit</button>
                        </form>
                    </Col>  
                </Row>
           </Container>
        </section>
    );
};

export default DateLine;