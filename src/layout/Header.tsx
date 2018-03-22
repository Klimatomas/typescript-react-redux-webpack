import React = require("react");

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <header className="row bg-dark text-white header navbar-header">
          <div className="col-1">App Header</div>
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
