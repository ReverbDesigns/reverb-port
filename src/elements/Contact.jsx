import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import marker from "../../public/assets/images/logo/marker.png";
const AnyReactComponent = ({ img }) => <img src={marker}/>;

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 37.920810,
            lng: -122.353805
        },
        zoom: 11
    };

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Let's get started</h2>
                                    <p>Contrary to popular belief, Big things happen with small steps. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Via Phone</h4>
                                        <p><a href="tel:+1 650 454 5256">1.650.454.5256</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:jordan@reverbdesigns.com"> jordan@reverbdesigns.com</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>1518 Seawind Drive <br /> Richmond, Ca 94804</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyBkf8t-ZHjGVhij5XVkUj32k1qztkpv3Ds' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        <AnyReactComponent
                            lat={37.960810}
                            lng={-122.353805}
                            object={marker} alt="Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </div>
                {/* End Contact Map  */}
                

             
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
export default Contact