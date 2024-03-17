import React, { useState } from 'react';

function LoginForm({ submitHandler, changeHandler, emailState, passwordState }) {
  
  const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  
  return (
      <div className="formContainer">
        <h5>WELCOME BACK!</h5>
        {/* <div className="row"> */}
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="input-field col s12">
                <input id="Email" type="text" className="validate" name="email" value={emailState}
                  onChange={changeHandler}></input>
                <label htmlFor="Email">Email</label>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type={showPassword ? 'text' : 'password'} className="validate" name="password"
                    value={passwordState}
                    onChange={changeHandler}></input>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: '0', marginBottom: '20px'}}>
              <label>
                <input type="checkbox" onChange={togglePasswordVisibility} checked={showPassword} style={{marginRight: '2px'}} />
                <span style={{paddingLeft: '30px'}}>Show Password</span>
              </label>
            </div>
            <button className="btn" name="action">LOGIN
            </button>
          </form>
        </div>
  )
}

export default LoginForm;