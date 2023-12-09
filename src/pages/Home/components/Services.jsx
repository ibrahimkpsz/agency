import React from 'react'
import { Fade } from 'react-reveal'
import service_web from '../../../assets/images/service-web.svg'
import service_seo from '../../../assets/images/service-seo.svg'
import service_marketting from '../../../assets/images/service-marketting.svg'
import service_mobile from '../../../assets/images/service-mobile.svg'

function Services() {
  return (
    <div className='container' id='services'>
        <h3 className='services-header'>
            <span className='text-danger'>&#x2022;</span> Hizmetlerimiz
        </h3>
        <div className="row row-cols-lg-2 row-cols-1">
            <div className="col d-flex align-items-stretch">
                <Fade>
                    <div className="service-card">
                        <div className="row">
                            <div className="col-8">
                                <h5 className='service-title'>Web Tasarım</h5>
                                <p className='service-text'>İşletmenizin dijital yüzünü oluştururken stratejik düşünce ve özgün tasarımı birleştiriyoruz.</p>
                            </div>
                            <div className="col-4 text-center">
                                <img src={service_web} className='img-fluid h-100' alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="col d-flex align-items-stretch">
                <Fade delay={300}>
                    <div className="service-card">
                        <div className="row">
                            <div className="col-8">
                                <h5 className='service-title'>SEO Optimizasyonu</h5>
                                <p className='service-text'>Arama motorlarında ön plana çıkmak için güçlü SEO stratejileri geliştiriyoruz.</p>
                            </div>
                            <div className="col-4 text-center">
                                <img src={service_seo} className='img-fluid h-100' alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="col d-flex align-items-stretch">
                <Fade delay={600}>
                    <div className="service-card">
                        <div className="row">
                            <div className="col-8">
                                <h5 className='service-title'>Dijital Pazarlama</h5>
                                <p className='service-text'>Sosyal medya yönetimi, içerik pazarlaması ve reklam kampanyaları ile işletmenizi öne çıkarıyoruz.</p>
                            </div>
                            <div className="col-4 text-center">
                                <img src={service_marketting} className='img-fluid h-100' alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div> 
            <div className="col d-flex align-items-stretch">
                <Fade delay={900}>
                    <div className="service-card">
                        <div className="row">
                            <div className="col-8">
                                <h5 className='service-title'>Mobil Uygulama Geliştirme</h5>
                                <p className='service-text'>Mobil cihazlarda mükemmel kullanıcı deneyimi sağlayan özel mobil uygulamalar geliştiriyoruz.</p>
                            </div>
                            <div className="col-4 text-center">
                                <img src={service_mobile} className='img-fluid h-100' alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Services