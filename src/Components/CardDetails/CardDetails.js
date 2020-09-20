import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import './CardDetails.css'

const CardDetails = () => {
     const view = FakeData;
     const [viewCard, setViewCard] = useState(view[0]);
    return (
            <Container className="pt-5 mt-5">
                <Row className="pt-5">
                    <Col lg={4}>
                        <h2 className="cardName">{viewCard.name}</h2>
                        <p className="cardDetails">{viewCard.shortDesc}</p>
                        <Link to={"/booking/" + viewCard.name}>
                            <button className="booking-edit">Booking →</button>
                        </Link>
                    </Col>
                    <Col lg={8} className="pl-5">
                        <Row>
                            {
                                view.map(vw => 
                                    <Col className="Photo" sm={4}  key={view.name}>
                                     <Link to={`/booking/${vw.name}`}>
                                        <div className="small mt-3 text-white text-center d-block bg-transparent">
                                            <img className="img" src={vw.photo}alt=""/>
                                            <h4 className="text ml-3">{vw.name}</h4>
                                        </div>
                                    </Link>
                                    </Col>
                                    )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
    );
};

export default CardDetails;