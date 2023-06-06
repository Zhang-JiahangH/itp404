import { useEffect } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Post() {
  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  const post = useLoaderData();
  document.body.classList.remove("oddBody2");
  document.body.classList.remove("oddBody");

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location = "/";
  }

  return (
    <div className="container">
      <div className="profile-page">
        <h4>Hello {localStorage.getItem("user")}</h4>

        <h3>Comments</h3>

        <button onClick={logout}>Logout</button>

        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <Link to={`/profile/comments`} className="nav-link">
              Comments
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`/profile/comments/new`} className="nav-link">
              Leave a Comment
            </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
}
