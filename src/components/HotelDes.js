import React, { Component } from 'react';

export const HotelDes = props => {
    console.log(props.location.state)
    let data  = props.location.state;
    let fac = data.des.fac;
    return (
        <div>
            <span>{data.name}</span>
            <img src={require(`../${data.img}`)} />
            <ul>
                <li>{ fac ? <p>Balcony: {fac.bal}</p> : 'NO'}</li>
                <li>Batrooms: {fac.bat}</li>
                <li>Rooms: {fac.rooms}</li>
            </ul>
        </div>
    )
}