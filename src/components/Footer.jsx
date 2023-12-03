import React from 'react'
import Footer_Logo from '../assets/images/footer-logo.svg'
import FacebookIcon from '../assets/icons/brand-icons/facebook.svg'
import InstagramIcon from '../assets/icons/brand-icons/instagram.svg'
import LinkedinIcon from '../assets/icons/brand-icons/linkedin.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="container-fluid" id='footer'>
        <footer className="container mx-auto row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
            <div className="col mb-3">
                <Link to="/" className="d-flex align-items-center mb-3 link-light gap-2 text-decoration-none">
                    <img src={Footer_Logo} alt="" /> Dijital Ajans
                </Link>
            </div>

            <div className="col mb-3"></div>

            <div className="col mb-3">
            <h5 className='footer-title'>KURUMSAL</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted footer-link">Hakkımızda</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted footer-link">Destek</a></li>
            </ul>
            </div>

            <div className="col mb-3">
            <h5 className='footer-title'>ÖNEMLİ BAĞLANTILAR</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted footer-link">Satış Sözleşmesi</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted footer-link">İade Şartları</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted footer-link">Gizlilik Politikası</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted footer-link">KVKK</a></li>
            </ul>
            </div>

            <div className="col mb-3">
            <h5 className='footer-title'>İLETİŞİM</h5>
            <ul className="nav flex-column">
                <h6 className='footer-subtitle'>E-POSTA</h6>
                <li className="nav-item mb-2 footer-link">
                    test@test.com
                </li>
                <h6 className='footer-subtitle'>E-POSTA</h6>
                <li className="nav-item mb-2 footer-link">
                    +90 501 234 5678
                </li>
                <li className="nav-item mb-2"></li>
            </ul>
            </div>
        </footer>
        <div className='container py-5 d-flex align-items-center gap-3'>
            <a href="#">
                <img src={FacebookIcon} width={20} alt="" />
            </a>
            <a href="#">
                <img src={InstagramIcon} width={20} alt="" />
            </a>
            <a href="#">
                <img src={LinkedinIcon} width={20} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Footer