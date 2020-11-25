import React from "react";
import { Redirect, Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router";
// import {usePath} from 'hookrouter';

export default function Navbar2(props) {
  const history = useHistory();

  // const c_path = usePath()

  const [logout, setlogout] = React.useState(false);
  const [searchTitle, setsearchTitle] = React.useState("");
  const handleLogout = () => {
    localStorage.removeItem("token");
    setlogout(true);
  };

  const searchArticles = (e) => {
    if (window.location.pathname === "/explore") {
      history.push(`/explore/${searchTitle}`);
    } else {
      history.push(`/home/${searchTitle}`);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light navbar-color">
        <NavLink className="navbar-brand" style={{ color: "white" }} to="/">
          <h2>Social Blogging Site</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link  "
                to="/explore"
              >
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link  "
                to="/news"
              >
                News
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTitle}
              onChange={(e) => setsearchTitle(e.target.value)}
            />
            {/* <Link to ='/'> */}
            <button
              className="btn btn-outline-primary my-2 my-sm-0 "
              style={{ color: "white" }}
              type="submit"
              onClick={searchArticles}
            >
              Search
            </button>
            {localStorage.getItem("token") ? (
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                style={{ color: "white" }}
                type="submit"
                onClick={handleLogout}
              >
                log out
              </button>
            ) : (
              <div>
                <Link to="/login">
                  <button
                    type="button"
                    style={{ marginLeft: "10px" }}
                    className="btn btn-primary btn-arrow-right "
                  >
                    Get started
                  </button>
                </Link>
              </div>
            )}
          </form>
        </div>
      </nav>
      {logout ? <Redirect to="/" /> : null}
      {/* {signin ? <Redirect to ="/login" />:null} */}
      {/* {is_search ? <Home propsSearch={fetch_data} trueOrFalse={is_search}/>
      :null} */}
    </div>
  );
}
