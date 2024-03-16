import {Link} from 'react-router-dom'

export default function Footer() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if(newWindow) newWindow.opener = null;
  }
  

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          {/* <div className="col l6 s12">
              <h5 className="white-text">Meet the Team</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div> */}
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Meet the Team</h5>
            <ul>
              <li><Link onClick={()=> openInNewTab("https://github.com/mathilde-01")}  className="grey-text text-lighten-3" href="#!">Mathilde Alacron - Back End</Link></li>
              <li><Link onClick={()=> openInNewTab("https://www.dianamariedischer.com/")}  className="grey-text text-lighten-3" href="#!">Diana Discher - Team Lead</Link></li>
              <li><Link onClick={()=> openInNewTab("https://github.com/scottd988")}  className="grey-text text-lighten-3" href="#!">Scott Denonn - Back End</Link></li>
              <li><Link onClick={()=> openInNewTab("https://github.com/OpalSnellneberger")}  className="grey-text text-lighten-3" href="#!">Opal Snellenberger - Back End</Link></li>
              <li><Link onClick={()=> openInNewTab("https://hprice-web-dev-portfolio.netlify.app/")} className="grey-text text-lighten-3" href="#!" >Hannah Price - Front End</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2024 Copyright
          <Link onClick={()=> openInNewTab("https://github.com/mathilde-01/pixel-paws")} className="grey-text text-lighten-4 right" href="#!" >Pixel Pals GitHub</Link>
        </div>
      </div>
    </footer>
  )
}