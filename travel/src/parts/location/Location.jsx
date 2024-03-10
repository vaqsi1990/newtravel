import React from 'react'
import { Link } from 'react-router-dom'
import './location.css'
export default function Location() {
  return (
    <>
    <div className="container top mb-30">

        <div className="row align-items-center">
			<div className="col-lg-6 about-left">
            <Link to='/europe' className='ll'>Explore Europe's Hidden Gems</Link>
				<h3 className="mt-lg-3">Uncover the secrets of ancient civilizations, indulge in the flavors of local cuisine, and witness the breathtaking beauty of Europe's natural wonders</h3>
				<p className="mt-4">Whether you dream of the romantic allure of Paris, the historical marvels of Rome, or the scenic splendor of the Swiss Alps, our curated collection of European destinations awaits your exploration.</p>
				
			</div>
			<div className="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
				<img src="/images/eu.jpg" alt="" className="img-fluid abt-image" />
			</div>
            <div className="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
				<img src="/images/asia.jpg" alt="" className="img-fluid abt-image" />
			</div>
            <div className="col-lg-6  about-left">
            <Link to='/asia' className='ll'>Discover the Wonders of Asia</Link>
				<h3 className="mt-lg-3"> Our curated collection of Asian destinations invites you to explore the rich tapestry of cultures, from the majestic landscapes of the Himalayas to the pristine beaches of Bali.</h3>
				<p className="mt-4">From the mouthwatering street food stalls of Bangkok to the meditative tranquility of Bhutan's monasteries, Asia's allure lies in its contrasts. Each click of the link below opens a gateway to the wonders of the East, where traditions are woven into the fabric of everyday life, and modernity coexists with age-old customs.</p>
				
			</div>
		</div>
    </div>
    </>
  )
}
