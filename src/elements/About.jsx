import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb2 from "../elements/common/Breadcrumb2";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class About extends Component{
    render(){
        let title = 'About',
        description = 'When diverse skill sets converge...';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb2 title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                            <div className="col-lg-12">
                            <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                            </div>
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="row mt--30">
                                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who I am</h3>
                                                    <p>I am a peninsula native with an affinity for User Experience. I have formal training in graphic design, typography, color theory, 3D asset animation, and brand development. I am proficient in JavaScript, PHP, SQL, HTML, CSS, and front-end development, and currently undergoing a MERN (Mongo, Express, React, Node) Full Stack Development course from UC Berkeley. The combination of these skillsets allows for a thoughtful comprehensive development and product, end to end. </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">What I do</h3>
                                                    <p style={{fontSize: 17 + 'px'}}>My ambition is to craft things that matter and add value to the digital world. By creating brands that resonate with audiences and frameworks that emulate that brand identity, individuals and companies develop beautiful and meaningful experiences for their users, the experience is the product I aim to optimize.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About