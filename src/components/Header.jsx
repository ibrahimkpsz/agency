import MailIcon from '../assets/icons/mail.svg'
import PhoneIcon from '../assets/icons/phone.svg'
import FacebookIcon from '../assets/icons/brand-icons/facebook.svg'
import InstagramIcon from '../assets/icons/brand-icons/instagram.svg'
import LinkedinIcon from '../assets/icons/brand-icons/linkedin.svg'



function Header() {
  return (
    <div className='container-fluid bg-danger' id='header'>
        <div className='container d-flex gap-3'>
            <div className='d-flex my-auto' id='header-mail'>
                <img src={MailIcon} alt="Mail Icon" />
                test@test.com
            </div>
            <div className='d-flex my-auto' id='header-phone'>
                <img src={PhoneIcon} alt="Phone Icon" />
                +90 501 234 5678
            </div>
            <div className='d-flex ms-auto gap-3' id='header-social'>
                <a href="#">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                </a>
                <a href="#">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                </a>
                <a href="#">
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header