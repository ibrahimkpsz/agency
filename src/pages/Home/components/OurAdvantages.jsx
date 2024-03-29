import React from 'react'
import { Bounce, Fade, Flip } from 'react-reveal'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import Robot3 from '../../../assets/images/robot3.svg'
import { Link } from 'react-router-dom'

function OurAdvantages() {
  return (
    <div className='container' id='advantages'>
        <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2">
            <div className="col text-center text-lg-start">
                <Fade>
                    <img src={Robot3} className='img-fluid advantages-image' alt="Robot" />
                </Fade>
            </div>
            <div className="col d-flex flex-column justify-content-center">
                    <Fade delay={200} top>
                        <h3 className='advantages-title'>
                            <span className='text-danger fs-5'>&#x2022; </span>
                            NEDEN BİZİ TERCİH ETMELİSİNİZ
                        </h3>
                    </Fade>
                    <Fade delay={400}>
                        <h4 className='advantages-subtitle'>Neden <span className='subtitle-span'>Biz?</span></h4>
                    </Fade>
                    <Flip left cascade>
                        <p className='advantages-text'>Deneyimli ekibimiz, müşteri odaklı yaklaşımımız ve yaratıcı çözümlerimizle fark yaratıyoruz. Sizi dinliyor, ihtiyaçlarınızı anlıyor ve işinizi ileriye taşımanız için buradayız.</p>
                    </Flip>
                    <Fade delay={600}>
                        <Bounce>
                            <Link to="/referanslar" className='btn btn-dark rounded-5 mt-3 py-2 advantages-btn'>
                                <img src={ArrowRight} alt="Arrow Right" />{" "}
                                Referanslar
                            </Link>
                        </Bounce>
                    </Fade>
                </div>
        </div>
    </div>
  )
}

export default OurAdvantages