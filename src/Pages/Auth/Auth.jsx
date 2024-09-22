import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      //firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
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
              onChange={(e) => setPaswword(e.target.value)}
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
            Sign In
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
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
