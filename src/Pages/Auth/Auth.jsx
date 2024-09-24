import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { PulseLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function Auth() {
  // State Managment
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");
  const [loading, SetLoading] = useState({ signIn: false, signUp: false });
  const [{ user }, dispatch] = useContext(DataContext);
  // console.log(user);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      //firebase auth
      SetLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo.user);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          SetLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          SetLoading({ ...loading, signIn: false });
        });
    } else {
      SetLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          SetLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          SetLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        {}
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? (
              <PulseLoader color="gray" size={12} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest_Based Ads Notice.
        </p>
        {/* create acount btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <PulseLoader size={13} color="#000" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddinTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
