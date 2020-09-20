import React from 'react';
import staricon from '../../website-designer/Icon/star_1_.png'

const Hotel = (props) => {
    const hotel = props.hotel
    return (
        <div class="d-flex flex-row">

        <div class="p-3">

            <img src={hotel.img} alt="" width="270px" height="188px"/>
            
        </div>
        <div class="p-3">
                <h5>{hotel.name}</h5>
    <p>{hotel.description}</p>
    {
        hotel.features.map(feature=> <p>{feature}</p>)
    }
    <img style={{marginBottom:"5px"}} src={staricon} height="15px" alt=""/><span> {hotel.rating}({hotel.reviewer})</span>
    <span style={{ fontWeight: "500", marginLeft: "3vw" }}> £{hotel.cost}/<small style={{ color: "gray" }}>Per-night</small></span>
        </div>
      </div>

    );
};

export default Hotel;