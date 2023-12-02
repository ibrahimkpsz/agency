import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.svg'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg container-fluid shadow-sm'>
        <div className='container'>
            <a href="/" className='navbar-brand'>
                <img src={Logo} alt="Navbar Logo" />
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#mobileNav">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='mobileNav'>
                <ul className='navbar-nav ms-auto fw-bold'>
                    <li className='nav-item'>
                        <NavLink to="/" activeClassName="active" className='nav-link'>Anasayfa</NavLink> 
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/hakkimizda" activeClassName="active" className='nav-link'>Hakkımızda</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/hizmetlerimiz" activeClassName="active" className='nav-link'>Hizmetlerimiz</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/referanslar" activeClassName="active" className='nav-link'>Referanslar</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/iletisim" activeClassName="active" className='nav-link'>İletişim</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
