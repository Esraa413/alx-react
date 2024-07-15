import React from "react";
import{ StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export default Login;
