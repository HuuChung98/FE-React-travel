import React from 'react'
import "../../../Css/Home.css"

const Footer = () => {
  return (
    <div className='footer-container '>
      <div className="footer-above">
        <div className='d-flex row'>
          <div className="footer-left column">
            <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt molestie turpis nec lacinia vehicula.
            </p>
            <h2>
              Follow Us On:
            </h2>
            <div>
              <i className="fa-brands fa-instagram" />
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-pinterest-p"></i>
              <i class="fa-solid fa-phone"></i>
            </div>
          </div>
          <div className="footer-between d-flex column">
            <div className='quick-link'>
              <h2>
                Quick Link
              </h2>
              <div>
                <p>About Us</p>
                <p>Tour Package</p>
                <p>Destination</p>
                <p>Tour Guide</p>
                <p>Booking Process</p>
                <p>Blog</p>
              </div>
            </div>
            <div className="tour-type">
              <h2>
                Tour Type
              </h2>
              <div>
                <p>Wild & Adventure Tours</p>
                <p> Group Tour</p>
                <p> Seasonal Tours</p>
                <p>Relaxation Tours</p>
                <p> Family Friendly Tours</p>
              </div>
            </div>
          </div>
          <div className="footer-right column">
            <div>
              <h3>
                Gallery
              </h3>
              <div className='gallery-content'>
                <div>
                  <div className="gallery-item">
                    <img src="/images/fg-1.png" />
                  </div>
                  <div className="gallery-item">
                    <img src="/images/fg-2.png" />
                  </div>
                  <div className="gallery-item">
                    <img src="/images/fg-3.png" />
                  </div>
                  <div className="gallery-item">
                    <img src="/images/fg-4.png" />
                  </div>
                  <div className="gallery-item">
                    <img src="/images/fg-5.png" />
                  </div>
                  <div className="gallery-item">
                    <img src="/images/fg-6.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="footer-under">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer