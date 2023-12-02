import React from 'react'
import Robot2 from '../../../assets/images/robot2.svg'

function About() {
  return (
    <>
        <div className='container' id='about'>
            <div className="row">
                <div className="col">
                    <img src={Robot2} alt="" />
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h3 className='about-title'>
                        <span className='text-danger fs-5'>&#x2022; </span>
                        HAKKIMIZDA
                    </h3>
                    <h4 className='about-subtitle'>Bizi Yakından Tanıyın</h4>
                    <p className='about-text'>Biz, dijital çözümlerin ötesine geçen, estetik ve fonksiyonun mükemmel bir birleşimini sağlayan bir ekibiz. Müşterilerimize yüksek kaliteli ve özelleştirilmiş web tasarım hizmetleri sunarak, dijital varlıklarını en üst düzeye çıkarmalarına yardımcı oluyoruz.</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default About