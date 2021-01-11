// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";

// Home layout

import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
import SmallBusiness from './elements/SmallBusiness';
import DeliverTheMessage from './home/DeliverTheMessage';
import Captivate from './home/Captivate';
import Paradise from './home/Paradise';
import BringingDataToLife from './home/BringingDataToLife';


// Element Layout
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import MissingLink from "./elements/MissingLink";
import error404 from "./elements/error404";


// Blocks Layout

import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                   

   
                 
                  
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DesignerPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio}/>
                   


                    {/* Element Layot */}
                   
                    <Route exact path={`${process.env.PUBLIC_URL}/map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Missinglink`} component={MissingLink}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Smallbusiness`} component={SmallBusiness}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Deliverthemessage`} component={DeliverTheMessage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Bringingdatatolife`} component={BringingDataToLife}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Captivate`} component={Captivate}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Paradise`} component={Paradise}/>
                   


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>



                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();