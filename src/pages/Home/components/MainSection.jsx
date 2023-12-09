import Robot1 from '../../../assets/images/robot1.svg'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom'
import { Bounce, Fade } from 'react-reveal'
import Pulse from 'react-reveal/Pulse'
import Swing from 'react-reveal/Swing'

function App() {
  
  return (
    <>
      <div className='container' id='main-section'>
        <div className="row row-cols-lg-2 row-cols-md-1">
            <div className="col d-flex flex-column justify-content-center ps-lg-5">
                <Fade bottom>
                    <h1 className='main-title'>Profesyonel</h1>
                </Fade>
                <Fade delay={200}>
                  <h2 className='main-subtitle'>Dijital Çözümler</h2>
                </Fade>
                <Bounce delay={500} cascade>
                  <p className='main-text'>Inovatif Çözümlerle, İnternetin Gücünü Keşfedin</p>
                </Bounce>
                <Fade delay={550}>
                  <Pulse count={3}>
                    <Link to="/hakkimizda" className='btn btn-dark py-4' id='main-btn'>
                        <span><img src={ArrowRight} alt="Arrow Right" /></span> &nbsp; Hakkımızda
                    </Link>
                  </Pulse>
                </Fade>
            </div>
            <div className="col d-flex justify-content-lg-end justify-content-center pe-lg-5 py-5 py-lg-0">
                <Fade delay={400} right>
                  <Swing>
                    <img src={Robot1} alt="Robot" />
                  </Swing>
                </Fade>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
