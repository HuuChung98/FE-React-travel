import React, { useEffect, useRef } from 'react'
// import Swiper from 'swiper';

const Banner = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {

    // Load Swiper script dynamically when the component mounts
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
    swiperScript.async = true;
    swiperScript.onload = () => {
      // Swiper script has loaded, you can initialize Swiper here
      const swiper = new window.Swiper(swiperContainerRef.current, {
        // Swiper options here
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
      // Don't forget to destroy the Swiper instance when the component unmounts
      return () => {
        swiper.destroy();
        // document.body.removeChild(swiperScript);
      };
    };

    document.body.appendChild(swiperScript);

    // Don't forget to destroy the Swiper instance when the component unmounts
    return () => {
      // swiper.destroy();
      document.body.removeChild(swiperScript);
    };

  }, []);


  return (
    <div className='container-swiper d-flex'>
      <div className='swiper-image'>
        {/* Slider main container */}
        <div className="swiper" ref={swiperContainerRef}>
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {/* Slides */}
            <div className="swiper-slide background-image1">
              <img src="/images/bg-highlight1.png" alt="" />
            </div>
            <div className="swiper-slide background-image2">
              <img src="/images/bg-highlight2.png" alt="" />
            </div>
            <div className="swiper-slide background-image3">
              <img src="/images/bg-highlight3.png" alt="" />
            </div>
            ...
          </div>
          {/* If we need pagination */}
          <div className="swiper-pagination" />
          {/* If we need navigation buttons */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          {/* If we need scrollbar */}
          {/* <div className="swiper-scrollbar" /> */}
        </div>
      </div>
      <div className="swiper-text ">
        <h2>Welconr</h2>
      </div>
    </div>
  )
}

export default Banner