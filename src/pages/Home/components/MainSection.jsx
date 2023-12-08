import Robot1 from '../../../assets/images/robot1.svg'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
      <div className='container' id='main-section'>
        <div className="row row-cols-lg-2 row-cols-md-1">
            <div className="col d-flex flex-column justify-content-center ps-lg-5">
                <h1 className='main-title'>Profesyonel</h1>
                <h2 className='main-subtitle'>Dijital Çözümler</h2>
                <p className='main-text'>Inovatif Çözümlerle, İnternetin Gücünü Keşfedin</p>
                <Link to="/hakkimizda" className='btn btn-dark py-4' id='main-btn'>
                    <span><img src={ArrowRight} alt="Arrow Right" /></span> &nbsp; Hakkımızda
                </Link>
            </div>
            <div className="col d-flex justify-content-lg-end justify-content-center pe-lg-5 py-5 py-lg-0">
                <img src={Robot1} alt="Robot" />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
