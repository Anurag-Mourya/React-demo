import React, {useEffect} from 'react'
import Aos from 'aos'


function Section1() {
useEffect(()=>{
        Aos.init({duration:1000});
       
    }, [])

    return (
        <div >
            <div className="" style={{backgroundColor: '#212529'}}>
                <div className="container">
                <div class="row ">
                        <div class="col-lg-8 text-light" data-aos="fade-up">
                        <h1 className='text-center p-4'>Welcome to <span style={{color: '#f58634'}}>SIMMI</span> </h1>
                        <p className='text-justify text1'>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.p</p>
                    </div>

                    <div class="col-lg-4">
                        <img src={require('./images/map-dark.png')} style={{ width: '331px', height: '450px' }} alt="" data-aos="fade-up"/>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Section1