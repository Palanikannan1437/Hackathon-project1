import React from "react";
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookLogin from 'react-facebook-login';

const responseGoogle = (response) => {
  console.log(response);
}
const responseFacebook = (response) => {
  console.log(response);
}
function Login(props) {
  return (
    <div className="login-content">
      <form className="login">
        <h1 className="login-title">Login</h1>
        <div className="login-input">
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Enter your e-mail"
          />
        </div>
        <div className="login-input">
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button">Login</button>
        {/* <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick} className="Google-login" disabled={renderProps.disabled}>Login with Google</button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          className="Google"
        />
        {/* <FacebookLogin
          appId="1088597931155576"
          autoLoad={false}
          callback={responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick} className="Facebook-login">Login with Facebook</button>
          )}
        /> */}
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={false}
          callback={responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick}>This is my custom FB button</button>
          )}
          className=""
        />
      </form>
    </div>
  );
}

export default Login;
