import React from 'react';
import './card.styles.css'


const Card = (props) => (
    <div className="card-container">
        <img style = {{height: 200, width: 200, margin: "auto"}} alt = "country" src = {`https://www.countryflags.io/${props.cont.iso2}/shiny/64.png`} />
        <h2>Country: {props.cont.countryRegion}</h2>
        <h3>Confirmed: {props.cont.confirmed}</h3> 
        <h3>Recovered: {props.cont.recovered}</h3> 
        <h3>Deaths: {props.cont.deaths}</h3> 
    </div>
)

export default Card;