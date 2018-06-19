import React from "react"
import "./Header.css"

const Header = props => <div className="col-md-6">{props.children} | </div>

export default Header;