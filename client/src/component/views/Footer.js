import React from "react";
import { NavLink } from "react-router-dom";
import "../css/main.css";

export default function Footer() {
  return (
    <div className="container-fluid main-footer">
      {/* <React.Fragment> */}
      <div className="row red">
        <footer className="col-sm page-footer ">
          <div className="footer-copyright text-right py-2  ">
            © 2020 Copyright: Social Blogging Site
          </div>
        </footer>
        <footer className="col-sm text-right">
          <div className="btn-group btn-group-lg py-2" id="pageButton">
            <NavLink to="/about" className="btn-lg">
              <button type="button" className="btn btn-primary active">
                About us
              </button>
            </NavLink>
            <NavLink to="/contact" className="btn-lg">
              <button type="button" className="btn btn-secondary">
                Contact us
              </button>
            </NavLink>
          </div>
        </footer>
      </div>
      {/* </React.Fragment> */}
    </div>
  );
}
