import React from "react"
import "./Card.css"

const Card = props => (
    <div className="card" id={props.id} onClick={}>
        <div className="img-container">
            <img src={props.image} alt={props.name} />
        </div>
    </div>
)

export default Card