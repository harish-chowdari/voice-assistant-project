import React, { useState } from "react";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PasswordReset.module.css";

const PasswordReset = () => {
  const [login, setLogin] = useState({ email: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await axios.post("/password-reset", { ...login });

      if (res.data.EnterAllDetails) {
        setErrorMessage(res.data.EnterAllDetails);
      } else if (res.data.NotExist) {
        setErrorMessage(res.data.NotExist);
      } else if (res.data.Success) {
        alert("A password reset link has been sent to your email.");
        navigate("/login"); // Redirect to login after sending the reset link
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <h2>Password Reset</h2>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <input
          placeholder="Enter Your Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={login.email}
          className={styles.input}
          required
        />

        <p className={styles.passwordText}>
          Remember your password?{" "}
          <Link to="/" className={styles.link}>
            Login
          </Link>
        </p>

        <button type="submit" className={styles.button}>
          Send Reset Link
        </button>

        <p className={styles.text}>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.link}>
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};

export default PasswordReset;
