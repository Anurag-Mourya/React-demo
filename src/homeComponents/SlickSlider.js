import React, { Component } from 'react'
import Slider from "react-slick";

class SlickSlider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className='text-center container pb-4'>
                <h2 className='p-4'>Our Prominent Speakers</h2>
                <Slider {...settings}>
                    <div>
                        <img src={require('./images/abhimanyu.jpeg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Abhimanyu Singh</div>                
                       
                    </div>
                    <div>
                     <img src={require('./images/amit_hooda.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Amit Hooda</div> 
                    </div>
                    <div>
                     <img src={require('./images/kevel_kaka.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Kevel Kaka</div> 
                    </div>
                    <div>
                     <img src={require('./images/major_nithi.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Abhimanyu Singh</div> 
                    </div>
                    <div>
                     <img src={require('./images/megha_meelu.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Megha Meelu</div> 
                    </div>
                    <div>
                     <img src={require('./images/mohit_chillar.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Abhimanyu Singh</div> 
                    </div>
                    <div>
                     <img src={require('./images/naveen_kumar_goyat.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Naveen Kumar Goyat</div> 
                    </div>
                    <div>
                     <img src={require('./images/rohan_naidu.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Abhimanyu Singh</div> 
                    </div>
                    <div>
                     <img src={require('./images/sandeep_narwal.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Sandeep Narwal</div> 
                    </div>
                    <div>
                     <img src={require('./images/sneha_agarwal.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Abhimanyu Singh</div> 
                    </div>
                    <div>
                     <img src={require('./images/vikas_kandola.jpg')} alt="" className='text-center' style={{display: 'inline'}}/>
                        <div>Vikas  Kandola</div> 
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SlickSlider;

