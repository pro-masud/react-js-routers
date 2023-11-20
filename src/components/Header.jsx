import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <header className="header shadow">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <img style={{width: '80px'}} src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <ul className="nav ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blgo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header