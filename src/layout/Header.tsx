import React = require("react");
import { Link } from "react-router-dom";

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <header className="row bg-dark navbar-header">
          <div className="col-1">
            <Link to="/" className="text-white no-decoration">
              App Header
            </Link>
          </div>
          <div>
            <ul className="nav justify-content-start">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
