import { Link } from "react-router-dom";

function topRight() {
  if (
    localStorage.getItem("token") === undefined ||
    localStorage.getItem("token") == null
  )
    return (
      <Link className="nav-link" to={"/"}>
        Login
      </Link>
    );

  return (
    <Link className="nav-link" to={"/profile"}>
      My Profile
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid row">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-4">
            <li className="nav-item">
              <Link className="nav-link" data-testid={"discover"} to={`/`}>
                Discover
              </Link>
            </li>
          </ul>
          <Link
            className="navbar-brand d-flex col-4 justify-content-center"
            to={`/`}
          >
            SoCalBeach
          </Link>
          <div className="d-flex col-4 justify-content-end">
            <ul className="navbar-nav col-4 mb-2 mb-lg-0">
              <li className="nav-item">{topRight()}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
