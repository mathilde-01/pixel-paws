export default function Login({}) {
    return (
        <>
            <h2>Log-In</h2>
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
                    </div>
                </form>
            </div>
        </>
    )
}