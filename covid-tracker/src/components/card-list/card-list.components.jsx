import React from 'react';
import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = (props) => {
    return (
        <div className= 'card-list'>
        {
            props.Country.map(cont => 
                <Card key = {cont.uid} cont = {cont} />
            )
        }
        </div>
    )
}

export default CardList;