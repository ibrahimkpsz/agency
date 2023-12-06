import React from 'react'

function Stats() {
  return (
    <>
        <div className='container-fluid d-flex align-items-center' id='stats'>
            <div className="container">
                <h3 className='stats-title'>Sayılarla Biz</h3>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2">
                    <div className="col justify-content-center">
                        <p className='stats-count'>25+</p>
                        <p className='stats-text'>Yıllık Tecrübe</p>
                    </div>
                    <div className="col justify-content-center">
                        <p className='stats-count'>1000+</p>
                        <p className='stats-text'>Tamamlanmış Proje</p>
                    </div>
                    <div className="col justify-content-center">
                        <p className='stats-count'>1500+</p>
                        <p className='stats-text'>Mutlu Müşteri</p>
                    </div>
                    <div className="col justify-content-center">
                        <p className='stats-count'>100%</p>
                        <p className='stats-text'>Müşteri Memnuniyeti</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Stats