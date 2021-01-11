import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class SmallBusiness extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--3"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Small Business Web Dev</h2>
                                    <p>Responsive Web Design. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

             {/* Start Portfolio Details */}
             <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Inuitive UX <br></br>for any size screen</h2>
                                        <p className="subtitle"> Creating a User Interface that dynamically adjust to be both engaging and simple to navigate in any configuration or size is a hallmark of what I believe quality web design is about.</p>
                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Language</span>
                                                <h4 style={{paddingTop: 20 + 'px'}}>CSS Media Queries</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4 style={{paddingTop: 20 + 'px'}}>Responsive Design</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Small Business Website</span>
                                                <h4><a className="rn-button-style--2" href="http://bodyslopesmassage.com/"><span>View Project</span></a></h4>
                                            </div>
                                        </div>
                                        
                                       
                                       

                                       

                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='rqWVjUJMj1A' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

            ]

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
export default SmallBusiness;
