import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Users">Flask & React </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </Fragment>
    ) 
}
export default Navbar