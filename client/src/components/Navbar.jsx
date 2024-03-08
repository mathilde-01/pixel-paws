export default function NavBar({ }) {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Pixel Paws</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html"><i className="material-icons left">Sign-up</i>Link with Left Icon</a></li>
                        <li><a href="badges.html"><i className="material-icons right">view_module</i>Link with Right Icon</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}