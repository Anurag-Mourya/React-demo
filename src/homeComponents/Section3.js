import React, { useEffect } from 'react'
import Counter from './Counter'
import Aos from 'aos'

function Section3() {

    useEffect(() => {
        Aos.init({ duration: 1000 });

    }, [])

    let cardHeight = {
        minHeight: '97%'
    }
    return (
        <div className='bg-dark'>
            <div className="m-auto" style={{ width: '97%' }}>

                <div className="row my-5" >
                    <h3 className='body-heading text-white'>Current and Upcoming events</h3>

                    <div className="col-lg-6" data-aos="fade-up">

                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/bg_3.jpg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Marathon Event
                                    Delhi</h5>
                                <h2>Delhi</h2>
                                <p><span>22:25:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">

                                    Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee

                                </p>

                                <div class="footer">

                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/Image(17).jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >event-til</h5>
                                <h2>Delhi</h2>
                                <p><span>02:13:00 - 02:43:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>





                <div className="row my-5" >
                    <div className="col-lg-6 heightControl" data-aos="fade-up">

                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/LIVE SESSION DOCTOR.jpg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Marathon Event
                                    Delhi</h5>
                                <h2>Delhi</h2>
                                <p><span>22:25:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">

                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 heightControl" data-aos="fade-up">
                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2022-01-16 at 2.55.59 PM.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >event-til</h5>
                                <h2>Delhi</h2>
                                <p><span>02:13:00 - 02:43:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="row my-5" >
                    <div className="col-lg-6 heightControl" data-aos="fade-up">

                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2022-01-20 at 11.05.43 PM.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Marathon Event
                                    Delhi</h5>
                                <h2>Delhi</h2>
                                <p><span>22:25:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">

                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 heightControl" data-aos="fade-up">
                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2022-01-20 at 11.05.44 PM.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >event-til</h5>
                                <h2>Delhi</h2>
                                <p><span>02:13:00 - 02:43:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="row my-5" >
                    <div className="col-lg-6 heightControl" data-aos="fade-up">

                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2022-01-21 at 7.51.38 PM.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Marathon Event
                                    Delhi</h5>
                                <h2>Delhi</h2>
                                <p><span>22:25:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">

                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="card m-5 heightControl" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2022-01-21 at 8.05.34 PM.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >event-til</h5>
                                <h2>Delhi</h2>
                                <p><span>02:13:00 - 02:43:00 - 23:25:00</span>2020-07-09<span></span></p>

                                <p class="card-text">Lorem Ipsum generator a baeeLorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee Lorem Ipsum generator a baee</p>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Counter data-aos="fade-up" />

                <div className="row text-center" >
                    <h3 className='body-heading text-white'>Fundraisers</h3>
                    <p className="mt-3 text-white">A little change makes all the difference.</p>

                    
                    <div className="col-lg-6 heightControl" data-aos="fade-up">
                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/Villagekid.jpg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Test Fund Raiser Kavach</h5>

                                <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Sit amet consectetur adipiscing elit duis tristiqu
                                </p>

                                <p className='card-text'>15000 raised of 30000</p>

                                <div class="progress" style={{ height: '5px' }}>
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 heightControl" data-aos="fade-up">
                        <div className="card m-5" style={cardHeight}>
                            <img class="card-img-top" src={require('./images/fundRaiserKavach.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Kavach Initiative</h5>

                                <p class="card-text">
                                    Simmi Foundation has taken an initiative Kavach to donate shield masks to the workers who put their lives at risk daily. Let's make a change during this lockdown Let's make a change during this lockdown to help these workers who do not have the luxury to
                                </p>

                                <p className='card-text'>21000 raised of 150000</p>

                                <div class="progress" style={{ height: '5px' }}>
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row text-center my-5" >
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="card m-5" style={{height: "90%"}}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2021-11-09 at 10.34.25.jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Donating Clothes</h5>

                                <p class="card-text">
                                SIMMI FOUNDATION Donated Clothes and blankets to almost 4500 Underprivileged people. As we know how how important is clothes at this winter time, Hence SIMMI Foundation appeal you all to help us in this drive by donating the much you could have.
                                </p>

                                <p className='card-text'>10000 raised of 100000</p>

                                <div class="progress" style={{ height: '5px' }}>
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '10%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 " data-aos="fade-up">
                        <div className="card m-5" style={{height: "90%"}}>
                            <img class="card-img-top" src={require('./images/WhatsApp Image 2021-11-09 at 10.34.25 (40).jpeg')} alt="" />
                            <div className="card-body">

                                <h5 class="card-title" >Education</h5>

                                <p class="card-text">
                                Smart India Multi Management Institute (SIMMI) Foundation working dedicatedly in providing education to underprivileged poor children free of cost. Meanwhile post covid situation our team working on giving Chaupal Classes and almost motivated almost 4500+
                                </p>

                                <p className='card-text'>10000 raised of 500000</p>

                                <div class="progress" style={{ height: '5px' }}>
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '6%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <div class="footer">
                                    <a href="/">Read more <span>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default Section3