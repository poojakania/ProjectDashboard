import React from "react";

const LeadsLogin = () => {
  const handleSignIn = (event) => {};

  const handleForgotPassword = () => {
    // Implement your logic for handling forgot password here (e.g., navigate to a password reset page)
    console.log("Forgot password clicked!");
  };

  return (
    <div className="login-page" style={{ background: "#EEF0F9", height: "auto" }}>
      <div className="content">
        <img
          style={{ margin: "20px" }}
          src="../images/logo-bamfer02 2.png"
          alt=""
          className="img-fluid"
        />

        <div style={{ background: "#FFFFFF", width: "480px", height: "457px" }}>
          <h2 style={{ textAlign: "center" }}>LOGIN</h2>
          <p style={{ textAlign: "center", color: "#4C4C4C" }}>Access to our dashboard</p>
          <form onSubmit={handleSignIn} style={{ padding: "10px", margin: "5px 0" }}>
            <label style={{ color: "#4C4C4C" }}>E-mail Address</label>
            <br />
            <input
              type="email"
              required
              style={{
                borderRadius: "5px",
                fontSize: "12px",
                padding: "10px",
                border: "2px solid #DDDDDD",
                width: "418px",
                margin: "0 0 20px 0",
              }}
            />
            <br />
            <label style={{ marginBottom: "10px", color: "#4C4C4C" }}>Password</label>
            <br />
            <input
              type="password"
              required
              style={{
                borderRadius: "5px",
                fontSize: "12px",
                padding: "10px",
                width: "418px",
                border: "2px solid #DDDDDD",
                margin: "0 0 20px 0",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label style={{ marginBottom: "10px", color: "#4C4C4C" }}>Password</label>
              <button
                type="button"
                onClick={handleForgotPassword}
                style={{
                  fontSize: "12px",
                  color: "#184CA2",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              style={{
                fontSize: "16px",
                width: "441px",
                margin: "0 0 20px 0",
              }}
            >
              Sign In
            </button>
            <p style={{ fontSize: "12px", textAlign: "center" }}>
              Don’t have an account yet?{" "}
              <a
                href="/register"
                style={{
                  color: " #184CA2 ",
                  paddingLeft: "2px",
                  fontWeight: "bold",
                }}
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadsLogin;
