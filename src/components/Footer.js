import React from 'react'
import "./styles/foot.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="groupp">
      <Link to="/">
        <div className="textt">TheFitYou</div>
      </Link>
    </div>
  )
};

export default Footer