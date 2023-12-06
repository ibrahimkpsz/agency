import React from 'react'
import People from '../../../assets/images/people.svg'

function WhoAreWe() {
  return (
    <div className='container' id='waw-container'>
        <div className="row p-2">
            <div className="col-lg-5 col-12 m-lg-0 waw-image">
                <img src={People} className='img-fluid' alt="People" />
            </div>
            <div className="col-lg-7 col-12 ps-lg-5 pt-lg-0 pt-4 ps-0">
                <h2 className='waw-title'>
                    <span className='text-danger'>&#x2022; </span>
                    Bizi Yakından Tanıyın
                </h2>
                <h3 className='waw-subtitle'>Müşteri Memnuniyeti Önceliğimizdir.</h3>
                <p className='waw-text'>Farklılaşan estetik anlayışımız ve işlevsellik odaklı yaklaşımımızla, dijital dünyada sıradanlıktan uzaklaşıyoruz. Biz, dijital çözümlerin ötesine geçerek, müşterilerimize gerçek bir dijital deneyim sunuyoruz. Her bir projemizde estetik ve fonksiyonu mükemmel bir birleşim olarak görüyor, müşterilerimizin dijital varlıklarını benzersiz kılmak için çabalıyoruz.</p>
                <p className='waw-text'>Yüksek kaliteli ve özelleştirilmiş web tasarım hizmetlerimizle, iş ortaklarımızın marka kimliklerini güçlendirmelerine ve çevrimiçi varlıklarını en üst düzeye çıkarmalarına yardımcı oluyoruz. Müşterilerimizin ihtiyaçlarına odaklanarak, her bir projede özel çözümler üretiyor ve markalarını dijital platformlarda ön plana çıkarıyoruz.</p>
            </div>
        </div>
    </div>
  )
}

export default WhoAreWe