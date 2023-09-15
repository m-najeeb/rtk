import React from "react";
import { useSelector } from "react-redux";

function NavBAr() {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Redux Toolkit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/homenavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Link
                </a>
              </li>
            </ul>
            <div>
              <button disabled={true} className="btn btn-primary">
                Your Balance: {amount}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBAr;
