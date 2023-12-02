import Google from '../../../assets/images/brand-images/google.svg'
import Microsoft from '../../../assets/images/brand-images/microsoft.svg'
import Facebook from '../../../assets/images/brand-images/facebook.svg'
import Samsung from '../../../assets/images/brand-images/samsung.svg'
import cPanel from '../../../assets/images/brand-images/cpanel.svg'


function Partners() {

  return (
    <div className='container' id='partners'>
        <h3 className='partner-title'>Bazı iş ortaklarımız</h3>
        <div className='d-flex gap-5 justify-content-center py-3 overflow-x-auto'>
            <img src={Google} alt="Google" />
            <img src={Microsoft} alt="Microsoft" />
            <img src={Facebook} alt="Facebook" />
            <img src={Samsung} alt="Samsung" />
            <img src={cPanel} alt="cPanel" />
        </div>
    </div>
    
  )
}

export default Partners