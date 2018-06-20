import React from "react"
import "./Cards.css"

const Cards = props => <div className="col-md-7 offset-md-3 card-box">{props.children}</div>

export default Cards;