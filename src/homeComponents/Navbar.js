import React from 'react';
// import img from './images/logo.png';
import '../Home.css';
// import MoveText from './MoveText';

function Navbar() {

    return (
        <div className='fixed_top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand" href="/">
                {/* <img src={img} alt="" style={{ width: '30px' }} /> */}

                {/* or */}

                <img src={require('./images/logo.png')} style={{ width: '30px' }} alt="" />
                &nbsp; &nbsp; &nbsp;<span>SIMMI FOUNDATION</span>   </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Volunteer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Careers</a>
                    </li>
                </ul>
            </div>
           
        </nav>

        <marquee width="100%" direction="left" height="30px" scrollamount="12" class="rolling-text" style={{ backgroundColor: 'white'}}>
  Smart India Multi Management Institute!    स्मार्ट इंडिया बहुद्देश्यीय प्रबन्धन संस्थान!   Registration number : 085953/2020    Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148
</marquee>
        </div>

    )
}

export default Navbar