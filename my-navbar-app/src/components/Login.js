import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const handleSignIn = (event) => {
  
  };

  return (
    <div className="sign-in-page">
      <div className="content">
      <img src="../images/logo-bamfer02 2.png" alt="" className="img-fluid" />
        <h2>SIGN IN TO DASHBOARD</h2>
        <form onSubmit={handleSignIn} >
          <label style={{ marginBottom: '10px' }}>User Name or E-mail</label><br />
          <input type="email" placeholder="Type User name or E-mail" required style={{fontSize: '12px', padding: '10px', marginBottom: '15px', width: '400px' , color:'#D1D1D1'}} /><br />
          <label style={{ marginBottom: '10px' }}>Password</label><br />
          <input type="password" placeholder="Type your password" required style={{ fontSize: '12px', padding: '10px', marginBottom: '15px', width: '400px' }} />

          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="rememberMe" style={{ marginRight: '5px'}} />
            <label htmlFor="rememberMe" style={{color:'black' }}>Remember Me</label>
            <span style={{ marginLeft: '190px', fontWeight: 'bold' }}><a href="/reset-password" style={{ color: ' #184CA2', fontSize: '12px' }}>Reset Password!</a></span>
          </div>
          <button type="submit"style={{fontSize: '20px', padding: '10px', marginBottom: '15px', width: '400px'}}>Sign In</button>
          <p style={{ fontSize: '12px', textAlign:'center'}}>Don’t have an account? <a href="/signup" style={{ color: ' #184CA2 ', paddingLeft: '2px', fontWeight: 'bold' }}>Sign Up</a></p>
          {/* <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p> */}
<br/>
          <p style={{fontSize: '12px', textAlign:'center', color:'black', fontWeight:'bold'}}>Login With Social Media</p>
          <div className="social-login-icons" style={{color:'#184CA2',textAlign:'center'}}>
            <FontAwesomeIcon icon={faFacebook} style={{paddingRight:'10px'}}/>
            <FontAwesomeIcon icon={faTwitter} style={{paddingRight:'10px'}}/>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>

        </form>
      
      </div>
      <div className="side-text" style={{  fontFamily: 'Montserrat',fontStyle:'normal', paddingLeft:'120px' }}>
    <p style={{ fontSize: '40px', fontWeight: 'bolder', margin: '0' }}>Join Our <br/>Community</p>
    <p style={{ fontSize: '12px',margin:'0' }}>Welcome! Let’s Get Started</p>
</div>



    </div>
  );
};

export default Login;
