import React from 'react'
import CountUp from 'react-countup';
import Aos from 'aos'

function Counter() {
    return (

        <div>          
                <div className="row text-center fs-3">
                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="card m-5">
                            <h5 class="card-title fs-1"><CountUp end={10} /> + </h5>
                            <p class="card-text">COUNTRIES</p>
                        </div>
                    </div>


                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="card m-5">

                            <h5 class="card-title fs-1"><CountUp end={150} /> +</h5>


                            <p class="card-text">PROJECTS</p>
                        </div>
                    </div>


                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="card m-5">

                            <h5 class="card-title fs-1"><CountUp end={1000} /> +</h5>


                            <p class="card-text">VOLUNTEERS</p>
                        </div>
                    </div>
                </div>


            <div className="row text-center fs-3 m-4">
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="card m-5">

                        <h5 class="card-title fs-1"><CountUp end={20} /> +</h5>


                        <p class="card-text">STATES</p>
                    </div>
                </div>


                <div className="col-lg-6" data-aos="fade-up">
                    <div className="card m-5">

                        <h5 class="card-title fs-1"><CountUp end={5000} /> +</h5>


                        <p class="card-text">BENIFICIRIES</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Counter