import './style.css';

function LoginForm({submitHandler, changeHandler, emailState, passwordState}) {
  return (
    <>
            <div className="formContainer">
                <h5>WELCOME BACK!</h5>
                <div className="row">
                    <form>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Email" type="text" className="validate"></input>
                                <label htmlFor="Email">Email</label>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="password" type="password" className="validate"></input>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <button className="btn" name="action">LOGIN
                        </button>
                    </form>
                </div>
            </div>
      
      <form className="login" onSubmit={submitHandler}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">email</span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Email" 
            aria-label="Email" 
            name="email" 
            value={emailState}
            onChange={changeHandler}
            aria-describedby="addon-wrapping" />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">password</span>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            aria-label="Password" 
            name="password" 
            value={passwordState}
            onChange={changeHandler}
            aria-describedby="addon-wrapping" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </>
  )
}

export default LoginForm;