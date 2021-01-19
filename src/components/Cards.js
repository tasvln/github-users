import React from 'react'
import Card from './Card'

export default function Cards(props) {
    return(
        <div>
            {props.cards.map ((card) => {
                <Card {...card} />
            })}
        </div>
    )
}