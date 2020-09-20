import React from 'react';
import CardDetails from '../CardDetails/CardDetails';
import Home from '../Home/Home';
import './Main.css';

const Main = () => {
    return (
        <section className="background-image">
           <div className="color-overlay"></div>
           <Home></Home>
           <CardDetails></CardDetails>
        </section>
    );
};

export default Main;