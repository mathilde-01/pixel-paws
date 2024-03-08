export default function SignUp({ }) {
    return (
        <>
            <h2>Sign-Up</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="User Name" id="user_name" type="text" className="validate"></input>
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
                                <input id="email" type="email" className="validate"></input>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">SIGNUP
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </>
    )
}