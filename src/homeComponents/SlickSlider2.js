import { Component } from 'react';
import Slider from "react-slick";
 class SlickSlider2 extends Component {
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
                  <h2 className='p-4'>Our Partners</h2>
                  <Slider {...settings}>
                      <div>
                          <img src={require('./images/amity_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Abhimanyu Singh</div>                
                         
                      </div>
                      <div>
                       <img src={require('./images/dyalsingh_logo.jpeg')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Amit Hooda</div> 
                      </div>
                      <div>
                       <img src={require('./images/gargi_logo.jpeg')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Kevel Kaka</div> 
                      </div>
                      <div>
                       <img src={require('./images/igu_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Abhimanyu Singh</div> 
                      </div>
                      <div>
                       <img src={require('./images/iitbhilai_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Megha Meelu</div> 
                      </div>
                      <div>
                       <img src={require('./images/lpu_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Abhimanyu Singh</div> 
                      </div>
                      <div>
                       <img src={require('./images/mca_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Naveen Kumar Goyat</div> 
                      </div>
                      <div>
                       <img src={require('./images/mirandahouse_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Abhimanyu Singh</div> 
                      </div>
                      <div>
                       <img src={require('./images/sgtb_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Sandeep Narwal</div> 
                      </div>
                      <div>
                       <img src={require('./images/simsree_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Abhimanyu Singh</div> 
                      </div>
                      <div>
                       <img src={require('./images/tiss_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Vikas  Kandola</div> 
                      </div>
                      <div>
                       <img src={require('./images/upes_logo.png')} alt="" className='text-center' style={{display: 'inline'}}/>
                          <div>Vikas  Kandola</div> 
                      </div>
                      
                  </Slider>
              </div>
      )
    }
  }

  export default SlickSlider2;

  
  