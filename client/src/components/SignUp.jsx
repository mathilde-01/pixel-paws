export default function SignUp({ }) {
    return (
        <>
         <div className="formContainer">
         <h5>WELCOME!</h5>
            <div className="row center">
                <form>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="user_name" type="text" className="validate"></input>
                            <label htmlFor="user_name">User Name</label>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"></input>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="confirm-password" type="password" className="validate"></input>
                                <label htmlFor="confirm-password">Confirm Password</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn" type="submit" name="action">SIGNUP</button>
                </form>
            </div>
        </div>
        </>
    )
}