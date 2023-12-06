import React from 'react'
import TeamImage_1 from '../../../assets/images/team1.svg'
import TeamImage_2 from '../../../assets/images/team2.svg'
import TeamImage_3 from '../../../assets/images/team3.svg'

function Team() {
  return (
    <div className='container text-center' id='team'>
        <h2 className='team-title'>
            <span className='text-danger'>&#x2022; </span>
            Alanında Uzman
        </h2>
        <h3 className='team-subtitle'>EKİBİMİZ</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3">
            <div className="col mb-lg-0 mb-5 d-flex justify-content-center">
                <div className="staff-card h-100">
                    <img src={TeamImage_1} className='staff-image' alt="" />
                    <div className="staff-details p-2">
                      <h5 className='staff-name'>Helin Korkmaz</h5>
                      <p className='staff-title m-0'>Product Manager</p>
                    </div>
                </div>
            </div>
            <div className="col mb-lg-0 mb-5 d-flex justify-content-center">
                <div className="staff-card h-100">
                    <img src={TeamImage_2} className='staff-image' alt="" />
                    <div className="staff-details p-2">
                      <h5 className='staff-name'>Ali Çağlar</h5>
                      <p className='staff-title m-0'>Developer</p>
                    </div>
                </div>
            </div>
            <div className="col mb-lg-0 mb-5 d-flex justify-content-center">
                <div className="staff-card h-100">
                    <img src={TeamImage_3} className='staff-image' alt="" />
                    <div className="staff-details p-2">
                      <h5 className='staff-name'>Buse Yıldız</h5>
                      <p className='staff-title m-0'>Designer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team