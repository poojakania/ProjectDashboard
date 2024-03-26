import React from "react";

const Login = () => {
  const handleSignIn = (event) => {};

  return (
    <div className="sign-in-page">
      <div className="content">
        <img src="../images/logo-bamfer02 2.png" alt="" className="img-fluid" style={{ width:"417px", height:"38px", margin:"0 0 20px 0" }} /> 
        <div
          className="login-form"
          style={{ background: "#FFFFFF", padding: "20px", margin: "20px", borderRadius:"5px" }}
        >
          <h2 style={{ textAlign: "center", fontSize: "24px", margin: "10px" }}>
            LOGIN
          </h2>
          <p
            style={{
              color: "#4C4C4C",
              textAlign: "center",
              fontSize: "18px",
              margin: "0 0 10px 0",
            }}
          >
            Access to our Dashboard
          </p>
          <form onSubmit={handleSignIn}>
            <label style={{ color: "#4C4C4C", fontSize: "16px", lineHeight: "19.5px" }}>
              Email Address
            </label>
            <br />
            <input
              type="email"
              placeholder=""
              required
              style={{
                fontSize: "12px",
                padding: "10px",
                margin: "5px 0 20px 0",
                width: "400px",
                color: "#D1D1D1",
                border: "1px solid #DDDDDD",
                borderRadius: "4px"
              }}
            />
            <br />
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <label style={{ color: "#4C4C4C", fontSize: "16px",lineHeight: "19.5px" }}>
                  Password
                </label>
                <span style={{ fontWeight: "bold" }}>
                  <a
                    href="/reset-password"
                    style={{
                      color: " #8E8E8E",
                      fontSize: "14px",
                      fontWeight: "400",
                      
                    }}
                  >
                    Forgot Password?
                  </a>
                </span>
              </div>

              <input
                type="password"
                placeholder=""
                required
                style={{
                  fontSize: "12px",
                  padding: "10px",
                  margin: "5px 0 10px 0",
                  width: "400px",
                  border: "1px solid #DDDDDD",
                  borderRadius: "4px"
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                fontSize: "20px",
                padding: "10px",
                margin: "20px 0 0 0",
                width: "420px",
              }}
            >
              Login
            </button>
            <p style={{ fontSize: "12px", textAlign: "center" }}>
              Don’t have an account?{" "}
              <a
                href="/signup"
                style={{
                  color: " #184CA2 ",
                  paddingLeft: "2px",
                  fontWeight: "bold",
                }}
              >
                Register
              </a>
            </p>
            {/* <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
