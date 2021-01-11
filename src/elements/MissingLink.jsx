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

class MissingLink extends Component{
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
                <PageHelmet pageTitle='MissingLink' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Missing Link</h2>
                                    <p>Cryptocurrencies are hard to understand.</p><p>Why not make their real-time impacts more clear?
 </p>
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
                                        <h2>Data Correlation </h2>
                                        <p className="subtitle">Many sites have a similar features, but their news stories and market data are considered distinct. Some traders can gain special access to news. We wanted to give insider tips to all cryptocurrency traders.
  </p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Language</span>
                                                <h4 style={{paddingTop: 20 + 'px'}}>Javascript</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4 style={{paddingTop: 20 + 'px'}}>Interactive Charts</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Application</span>
                                                <h4><a className="rn-button-style--2" href="https://moonstripe11.github.io/proj1/"><span>View Project</span></a></h4>
                                            </div>
                                        </div>

                                    
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/ml1.jpg" alt="API Research"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/ml2.jpg" alt="Design Process"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

              
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
export default MissingLink;
