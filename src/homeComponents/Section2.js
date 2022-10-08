import React,{useEffect} from 'react';
import Aos from 'aos'

function Section2() {

    useEffect(()=>{
        Aos.init({duration:1000});
       
    }, [])

    let style = {
        fontSize: '34px',
        fontWeight: 'bold',
        color: 'black'
    }

    let style2 = {
        color: "#eeeeee",
        fontSize: "1.3rem"
    }
    return (
        <div>

            <div className="text-center m-auto" style={{ width: '97%' }}>

                <div className="row">
                    <h3 className='body-heading'>Objectives</h3>

                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="card m-3">

                            <img class="card-img-top" src={require('./images/education.jpg')} alt=""/>
                            <div className="card-body bodyHover">

                                <h5 class="card-title titleHover" >Education</h5>

                                <p class="card-text">We provide free academic education, scholarship, training and other incentives to the children.</p>

                                <div class="footer">

                                    <a href="/">Read more <span style={style}>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="card m-3">

                            <img class="card-img-top" src={require('./images/livelihood.jpg')} alt="Card image cap" />
                            <div className="card-body bodyHover">

                                <h5 class="card-title titleHover">Livelihood</h5>

                                <p class="card-text">We implement various schemes to provide livelihood and uplift the poor in society..</p>

                                <div class="footer">

                                    <a href="/">Read more <span style={style}>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="card m-3">

                            <img class="card-img-top" src={require('./images/healthcare.jpg')} alt="Card image cap" />
                            <div className="card-body bodyHover">

                                <h5 class="card-title titleHover" >Healthcare</h5>

                                <p class="card-text">We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.</p>

                                <div class="footer">

                                    <a href="/">Read more <span style={style}>&rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3" data-aos="fade-up">
                        <div className="card m-3">

                            <img class="card-img-top" src={require('./images/women empowerment.jpg')} alt="Card image cap" />
                            <div className="card-body bodyHover">

                                <h5 class="card-title titleHover" >Women and Youth Empowerment</h5>

                                <p class="card-text">We focus on providing equal opportunities for women in the work field.</p>

                                <div class="footer">

                                    <a href="/">Read more <span style={style}>&rarr;</span> </a>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* help us */}

            <div className="text-center m-auto fixedBg" style={{ width: '97%' }}>

                <div className="row">
                    <h3 className='body-heading'>How can you help us</h3>

                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="card m-4">
                            <div className="card-body">

                                <h5 class="card-title" >Collaborate</h5>

                                <p class="card-text">Simmi Foundation serves in the collaboration with schools, colleges and other institutions.</p>

                                <div class="footer">

                                    <a href="/"><span style={style2}>Collaborate with us &rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="card m-4">
                            <div className="card-body">

                                <h5 class="card-title">Donate Money</h5>

                                <p class="card-text">Your donation will further our mission of ensuring a happy and healthy life of those in need.</p>

                                <div class="footer">

                                    <a href="/"> <span style={style2}>Donate now &rarr;</span></a>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4" data-aos="fade-up">
                        <div className="card m-4">
                            <div className="card-body">
                                <h5 class="card-title" >Be a Volunteer</h5>

                                <p class="card-text">Even the all-powerful Pointing has no control about the blind texts.</p>

                                <div class="footer">
                                    <a href="/"><span style={style2}>Read more &rarr;</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Section2;