import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './clients-slider.css';

export class ClientsSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
      return (
        <section className='my-clients'>

          <div className='section-heading'>
              <h2 className='section-title'>
                My Clients
                <span class="title-bg">Clients</span>
              </h2>
          </div>

          <div className="slider-clients">
            <Slider {...settings}>
              <div>
                <img src={'https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2023/02/partner-dark-1.png'} alt="Google"></img>
              </div>
              <div>
                <img src={'https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2023/02/partner-dark-1.png'} alt="Google"></img>
              </div>
              <div>
                <img src={'https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2023/02/partner-dark-1.png'} alt="Google"></img>
              </div>
              <div>
                <img src={'https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2023/02/partner-dark-1.png'} alt="Google"></img>
              </div>
              <div>
                <img src={'https://demo.themerec.com/item/wordpress/thepro-light/wp-content/uploads/sites/9/2023/02/partner-dark-1.png'} alt="Google"></img>
              </div>
            </Slider>
          </div>
        </section>
      );
    }
  }