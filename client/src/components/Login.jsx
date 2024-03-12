export default function Login({ }) {
    return (
        <>
            <div className="formContainer">
                <h5>WELCOME BACK!</h5>
                <div className="row">
                    <form>
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
                        </div>
                        <button className="btn" name="action">LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}