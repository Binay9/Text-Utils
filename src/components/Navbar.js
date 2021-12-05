import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div className="border">
      <nav
        className={`navbar navbar-expand navbar-${props.myStyle.color} bg-${props.myStyle.backgroundColor}`}
      >
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.myStyle.color}`} href="/">
            <h4>Text-Utils</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link active text-${props.myStyle.color}`}
                  aria-current="page"
                  href="/"
                >
                  {props.home}
                </a>
              </li>

              <li className="nav-item">
                <a className={`nav-link text-${props.myStyle.color}`} href="/">
                  {props.about}
                </a>
              </li>
            </ul>

            <div className="d-flex form-check form-switch">
              <input
                className="form-check-input me-2"
                type="checkbox"
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label className={`form-check-label text-${props.myStyle.color}`}>
                {props.btnText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  home: "Default Home",
  about: "Default About",
  search: "Type To Search",
};

export default Navbar;
