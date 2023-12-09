import { Fade } from 'react-reveal'
import Google from '../../../assets/images/brand-images/google.svg'
import Microsoft from '../../../assets/images/brand-images/microsoft.svg'
import Facebook from '../../../assets/images/brand-images/facebook.svg'
import Samsung from '../../../assets/images/brand-images/samsung.svg'
import cPanel from '../../../assets/images/brand-images/cpanel.svg'


function Partners() {

  return (
    <div className='container' id='partners'>
        <Fade>
          <h3 className='partner-title'>Bazı iş ortaklarımız</h3>
        </Fade>
        <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-center gap-5 align-items-center py-3'>
            <Fade delay={100}>
              <img src={Google} alt="Google" />
            </Fade>
            <Fade delay={200}>
              <img src={Microsoft} alt="Microsoft" />
            </Fade>
            <Fade delay={300}>
              <img src={Facebook} alt="Facebook" />
            </Fade>
            <Fade delay={400}>
              <img src={Samsung} alt="Samsung" />
            </Fade>
            <Fade delay={500}>
              <img src={cPanel} alt="cPanel" />
            </Fade> 
        </div>
    </div>
    
  )
}

export default Partners