import { useContext, useEffect } from "react";
import logo1 from "../media/amazonlogo2.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userData } from "../App";
export default function Login() {
  const navigate = useNavigate();
  const { data, setData } = useContext(userData);
  useEffect(() => {}, []);
  function login() {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: document.querySelector("#login-username").value,
        password: document.querySelector("#login-password").value,
      })
      .then(function (response) {
        axios.get(`https://fakestoreapi.com/users/${1}`)
          .then((e) => setData({firstname:e.data.name.firstname}))
          .catch((e) => console.log(e));
        axios.get(`https://fakestoreapi.com/carts/5`)
          .then((e) => setData(pre=>({...pre, products:e.data.products.length})))
          .catch((e) => console.log(e));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        document.querySelector("#login-error").style.display = "flex";
        document.querySelector(
          "#login-error .login-message"
        ).innerHTML = `${error.response.data}`;
      });
  }
  return (
    <div className="login">
      <img src={logo1} alt="" />
      <div id="login-error" className="error">
        <span class="material-symbols-outlined">warning</span>
        <div className="con">
          <p>There was a problem</p>
          <p className="login-message">Error message</p>
        </div>
      </div>
      <div className="con1">
        <h1>Sign in</h1>
        <p className="label">User name or email</p>
        <input type="text" name="" id="login-username" defaultValue="johnd" />

        <p className="label label2">Password</p>
        <input
          type="password"
          name=""
          id="login-password"
          defaultValue="m38rmF$"
        />

        <button onClick={login}>Continue</button>
        <div className="staysignedin">
          <input type="checkbox" name="" id="staysignedin" />
          <label htmlFor="staysignedin">
            Keep me signed in. <span>Details</span>
          </label>
        </div>
        <p className="p-2">
          By continuing, you agree to Amazon's <span>Conditions of Use</span>
          and <span>Privacy Notice</span>.
        </p>
        <span>Need help?</span>
      </div>
      <div className="con2">
        <div className="box1">
          <p>New to Amazon?</p>
        </div>
        <button>Create your Amazon account</button>
      </div>
      <div className="con3">
        <span className="span-1"></span>
        <span className="span-2"></span>
        <div className="box">
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Help</span>
        </div>
        <p className="p-1">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}
