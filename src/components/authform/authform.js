import React, { useState } from "react"
import { Link } from 'react-router-dom';
import styles from "./authform.module.css";

export default function AuthForm() {

    const [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {

    return(

       <div className={styles.AuthFormContainer}>
        <form className={styles.AuthForm}>
          <div className={styles.AuthFormContent}>
            <h3 className={styles.AuthFormTitle}>Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span type="button" className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3 jus">
            <Link>
              <button type="submit" className="btn btn-primary" style={{width:"100%"}}>Submit</button>
            </Link>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
       )
      }
    
    return (
    <div className={styles.AuthFormContainer}>
      <form className={styles.AuthForm}>
        <div className={styles.AuthFormContent}>
          <h3 className={styles.AuthFormTitle}>Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span type="button" className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div >
          
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" href="product.js" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
