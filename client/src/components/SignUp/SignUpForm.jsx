import '../../styles/style.css'

export default function SignUpForm({ 
    submitHandler, changeHandler, emailState, passwordState, confirmPasswordState
}) {
    return (

        <div className="formContainer">
            <h5>WELCOME!</h5>
            <div className="row center">
                <form onSubmit={submitHandler}>    
                    <div className="row">
                        <div className="input-field col s6">
                            <input name= "email" id="Email" type="text" className="validate" onChange={changeHandler} value={emailState}></input>
                            <label htmlFor="Email">Email</label>
                        </div>
                        <div>
                            <div className="input-field col s12">
                                <input name="password" id="password" type="password" className="validate" value={passwordState} onChange={changeHandler}></input>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name= "confirm-password" id="confirm-password" type="password" className="validate" value={confirmPasswordState} onChange={changeHandler}></input>
                                <label htmlFor="confirm-password">Confirm Password</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn" type="submit" name="action">SIGNUP</button>
                </form>
            </div>
        </div>
     

    )
}