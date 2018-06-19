import React from "react"
import "./GameCard.css"

const GameCard = props => (
    <div className="card" id={props.id}
        onClick={() => {
            props.clickChk(props.clicked);
            props.randomizer();
        }}
    >
        <div className="img-container">
            <img src={props.image} alt={props.name} />
        </div>
    </div>
)

export default GameCard