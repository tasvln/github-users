import React from 'react'
import Card from './Card'

export default function Cards(props) {
    return(
        <div>
            {props.cards.map ((card) => {
                return( 
                    <Card key={card.id} {...card} />
                )
            })}
        </div>
    )
}