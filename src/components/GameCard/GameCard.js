import React from "react"
import "./GameCard.css"

const GameCard = props => (
    <span className="card float-left m-3" id={props.id}
        onClick={() => {
            props.clickChk(props.clicked);
            props.randomizer();
        }}
    >
        <span className="img-container">
            <img src={props.image} alt={props.name} />
        </span>
    </span>
)

export default GameCard