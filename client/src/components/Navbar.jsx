export default function NavBar({}) {
 
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Pixel Paws</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down" id="navRight">
                        <li><a href="sass.html">Display</a></li>
                        <li><a href="badges.html">Login</a></li>
                        <li><a href="collapsible.html">Sign-Up</a></li>
                        <li><a href="mobile.html">Create Pixel Pet</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Display</a></li>
                <li><a href="badges.html">Login</a></li>
                <li><a href="collapsible.html">Sign-Up</a></li>
                <li><a href="mobile.html">Create Pixel Pet</a></li>
            </ul>
        </>
    )
}