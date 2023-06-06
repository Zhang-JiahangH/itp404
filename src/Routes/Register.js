import { Link } from "react-router-dom";
import "../CSS/Register.css";
import { useState, useEffect } from "react";
import { signuphelper } from "../Services";

export default function Register() {
  useEffect(() => {
    document.title = "Sign Up Page";
  }, []);

  document.body.classList.remove("oddBody");
  document.body.classList.add("oddBody2");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(username === "") {
      document.getElementById("email-checker").innerHTML=(
          "Please enter a username."
      )
      document.getElementById("email-checker").className="text-danger"
    }
    else {
      document.getElementById("email-checker").innerHTML = ""
    }
    if(password === "") {
      document.getElementById("password-checker").innerHTML="Please enter a password."
      document.getElementById("password-checker").className="text-danger"
    }
    else {
      document.getElementById("password-checker").innerHTML = ""
    }
    if(username !== "" && password !== "") {
      try {
        signuphelper({
          username: username,
          password: password,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container-fluid login-bg">
      <div className="row">
        <div className="col-6">
          <div className="login-container-right d-flex flex-wrap justify-content-center text-center mx-auto">
            <div className="col-12"></div>
            <h1 className="col-12 d-flex align-items-center justify-content-center login-new-msg">
              Already a user?
            </h1>
            <div className="col-12 d-flex justify-content-center">
              <h5 className="w-50 login-new-sub-msg">
                login and reconnect with the community{" "}
              </h5>
            </div>
            <div className="col-12">
              <Link className="btn btn-custom w-50 btn-primary" to={"/"}>
                Login
              </Link>
            </div>
            <div className="col-12"></div>
          </div>
        </div>

        <div className="col-6">
          <div className="login-container-left d-flex flex-wrap justify-content-center text-center mx-auto">
            <div className="col-12 mt-4">
              <h2 className="login-msg">Sign Up</h2>
            </div>

            <form
              className="d-flex flex-wrap justify-content-center text-center"
              onSubmit={onSubmitHandler}
            >
              <div className="col-12 d-flex flex-wrap justify-content-center">
                <div class="input-group">
                  <input
                    type="email"
                    className="form-control form-control-sm mb-3 w-75"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={usernameHandler}
                  />
                  <div id="email-checker"></div>
                </div>
                <div class="input-group">
                  <input
                    type="password"
                    className="form-control form-control-sm w-75 mb-3"
                    id="password"
                    placeholder="Password"
                    onChange={passwordHandler}
                  />
                  <div id="password-checker"></div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-75">
                  Sign up
                </button>
              </div>
            </form>

            <div className="col-12 d-flex flex-wrap justify-content-center">
              <p className="m-0 w-100">or</p>
              <div className="login-horizontal-line mb-4"></div>
            </div>

            <div className="col-3 d-flex flex-wrap justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 172 172"
                className="login-icons"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#061f3a">
                    <path d="M86,10.32c-41.796,0 -75.68,33.884 -75.68,75.68c0,37.9432 27.95,69.27128 64.36928,74.74432v-54.68568h-18.72392v-19.89352h18.72392v-13.23712c0,-21.91624 10.67776,-31.53792 28.89256,-31.53792c8.72384,0 13.33688,0.64672 15.52128,0.94256v17.36512h-12.42528c-7.73312,0 -10.43352,7.33064 -10.43352,15.59352v10.87384h22.66272l-3.07536,19.89352h-19.58736v54.84736c36.93872,-5.01208 65.43568,-36.59472 65.43568,-74.906c0,-41.796 -33.884,-75.68 -75.68,-75.68z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-3 d-flex flex-wrap justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 172 172"
                className="login-icons"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#061f3a">
                    <path d="M160.53333,39.77213c-5.4868,2.43667 -11.38067,4.0764 -17.56693,4.816c6.31813,-3.784 11.1628,-9.77533 13.44467,-16.91907c-5.90533,3.50307 -12.4528,6.04867 -19.42453,7.42467c-5.57853,-5.94547 -13.52493,-9.66067 -22.31987,-9.66067c-16.8904,0 -30.5816,13.69693 -30.5816,30.5816c0,2.39653 0.2752,4.73573 0.7912,6.966c-25.41587,-1.2728 -47.94787,-13.4504 -63.038,-31.9576c-2.62587,4.51787 -4.13373,9.7696 -4.13373,15.38253c0,10.60667 5.39507,19.9692 13.59947,25.45027c-5.01093,-0.16053 -9.72947,-1.53653 -13.85173,-3.82413c0,0.13187 0,0.25227 0,0.38413c0,14.82067 10.53787,27.18173 24.53293,29.98533c-2.5628,0.69947 -5.26893,1.07213 -8.06107,1.07213c-1.96653,0 -3.8872,-0.19493 -5.75053,-0.54467c3.89293,12.14893 15.1876,20.99547 28.5692,21.242c-10.46333,8.2044 -23.65,13.09493 -37.98333,13.09493c-2.46533,0 -4.902,-0.14333 -7.29853,-0.43c13.5364,8.67453 29.60693,13.73707 46.88147,13.73707c56.25547,0 87.00907,-46.60053 87.00907,-87.0148c0,-1.3244 -0.02867,-2.64307 -0.086,-3.956c5.97987,-4.3172 11.16853,-9.7008 15.26787,-15.82973z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-3 d-flex flex-wrap justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 172 172"
                className="login-icons"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#061f3a">
                    <path d="M86.02239,17.2c-38.00627,0 -68.82239,30.8052 -68.82239,68.8c0,37.9948 30.81613,68.8 68.82239,68.8c57.39067,0 70.32032,-53.27987 64.93672,-80.26667h-7.62578h-13.00078h-44.33255v22.93333h44.36614c-5.10025,19.76997 -23.004,34.4 -44.36614,34.4c-25.32987,0 -45.86667,-20.5368 -45.86667,-45.86667c0,-25.32987 20.5368,-45.86667 45.86667,-45.86667c11.51827,0 22.01108,4.27563 30.06641,11.2875l16.29297,-16.28177c-12.23494,-11.1456 -28.48912,-17.93906 -46.33698,-17.93906z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-3 d-flex flex-wrap justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 172 172"
                className="login-icons"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#061f3a">
                    <path d="M153.17406,119.54c-3.70875,8.23719 -5.49594,11.91906 -10.26625,19.18875c-6.67844,10.15875 -16.09813,22.84375 -27.735,22.92438c-10.36031,0.09406 -13.03438,-6.75906 -27.10344,-6.63813c-14.05563,0.06719 -16.985,6.7725 -27.35875,6.665c-11.65031,-0.1075 -20.55938,-11.52937 -27.23781,-21.67469c-18.67813,-28.44719 -20.65344,-61.79906 -9.11063,-79.53656c8.17,-12.5775 21.08344,-19.96812 33.2175,-19.96812c12.3625,0 20.12938,6.78594 30.34188,6.78594c9.91687,0 15.95031,-6.79938 30.24781,-6.79938c10.80375,0 22.22562,5.88563 30.39562,16.04438c-26.71375,14.64687 -22.37344,52.79594 4.60906,63.00844zM107.31188,29.1325c5.20031,-6.67844 9.15094,-16.09812 7.71312,-25.6925c-8.47906,0.57781 -18.39594,5.99313 -24.1875,13.0075c-5.25406,6.39625 -9.60781,15.88313 -7.91469,25.06094c9.25844,0.29563 18.83937,-5.22719 24.38906,-12.37594z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
