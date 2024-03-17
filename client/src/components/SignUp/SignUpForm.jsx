import '../../styles/style.css'
import React, { useState } from 'react';

export default function SignUpForm({ 
    submitHandler, changeHandler, emailState, passwordState, confirmPasswordState
}) {

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleConfirmPasswordChange = (event) => {
        const confirmPwd = event.target.value;
        const pwd = passwordState;
        setPasswordsMatch(confirmPwd === pwd);
        changeHandler(event);
    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (

        <div className="formContainer">
            <h5>WELCOME!</h5>
            <div className="row center">
                <form onSubmit={submitHandler}>    
                    <div className="row">
                        <div className="input-field col s12">
                            <input name= "email" id="Email" type="text" className="validate" onChange={changeHandler} value={emailState}></input>
                            <label htmlFor="Email">Email</label>
                        </div>
                        <div>
                            <div className="input-field col s12">
                                <input name="password" id="password" type={showPassword ? 'text' : 'password'} className="validate" value={passwordState} onChange={changeHandler}></input>
                                <label htmlFor="password">Password</label>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name= "confirmPassword" id="confirm-password" type={showPassword ? 'text' : 'password'} className="validate" value={confirmPasswordState} onChange={handleConfirmPasswordChange}></input>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                {!passwordsMatch && <p style={{color: 'red', fontSize: '12px', position: 'absolute', top: '40px'}}>Passwords don't match</p>}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '0', marginBottom: '20px'}}>
                        <label>
                            <input type="checkbox" onChange={togglePasswordVisibility} checked={showPassword} style={{marginRight: '2px'}} />
                            <span style={{paddingLeft: '30px'}}>Show Password</span>
                        </label>
                    </div>
                    <button className="btn" type="submit" name="action">SIGNUP</button>
                </form>
            </div>
        </div>
     

    )
}