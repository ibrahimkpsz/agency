import React from 'react'
import Robot3 from '../../../assets/images/robot3.svg'
import { Link } from 'react-router-dom'

function OurAdvantages() {
  return (
    <div className='container' id='advantages'>
        <div className="row">
            <div className="col">
                <img src={Robot3} alt="" />
            </div>
            <div className="col d-flex flex-column justify-content-center">
                    <h3 className='advantages-title'>
                        <span className='text-danger fs-5'>&#x2022; </span>
                        NEDEN BİZİ TERCİH ETMELİSİNİZ
                    </h3>
                    <h4 className='advantages-subtitle'>Neden <span className='subtitle-span'>Biz?</span></h4>
                    <p className='advantages-text'>Deneyimli ekibimiz, müşteri odaklı yaklaşımımız ve yaratıcı çözümlerimizle fark yaratıyoruz. Sizi dinliyor, ihtiyaçlarınızı anlıyor ve işinizi ileriye taşımanız için buradayız.</p>
                    <Link to="/referanslar" className='btn btn-dark rounded-5 mt-3 py-2 w-25 advantages-btn'>Referanslar</Link>
                </div>
        </div>
    </div>
  )
}

export default OurAdvantages