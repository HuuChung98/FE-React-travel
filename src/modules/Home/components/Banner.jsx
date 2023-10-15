import React, { useEffect, useRef } from 'react'
import "../../../Css/Home.css"
// import Swiper from 'swiper';

const Banner = () => {

  return (
    <div className='banner-container'>
      <div className="row banner-content">
        <div className="slideShow-banner">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/bg-highlight1.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/bg-highlight2.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/images/bg-highlight3.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
        <div className="text-banner">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                <div className='text-banner-showContent'>
                  <div className="header-text">
                    <h1> Travel &</h1>
                    <h1>Adventure</h1>
                  </div>
                  <div className="content">
                    <p>Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo quis .</p>
                  </div>
                  <div className="detail d-flex">
                    <div className=''>
                      <button className='button-show'>View Adventure</button>
                    </div>
                    <div>
                      <button className='button-show'>Take a Tour</button>
                    </div>

                  </div>
                </div>

              </div>
              <div className="carousel-item">
                <div className='text-banner-showContent'>
                  <div className="header-text">
                    <h1> Move The</h1>
                    <h1>Earth</h1>
                  </div>
                  <div className="content">
                    <p>Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo quis .</p>
                  </div>
                  <div className="detail d-flex">
                    <div className=''>
                      <button className='button-show'>View Adventure</button>
                    </div>
                    <div>
                      <button className='button-show'>Take a Tour</button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className='text-banner-showContent'>
                  <div className="header-text">
                    <h1> Travel &</h1>
                    <h1 className='show-h1'>Adventure</h1>
                  </div>
                  <div className="content">
                    <p>Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo quis .</p>
                  </div>
                  <div className="detail d-flex">
                    <div className=''>
                      <button className='button-show'>View Adventure</button>
                    </div>
                    <div>
                      <button className='button-show'>Take a Tour</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner