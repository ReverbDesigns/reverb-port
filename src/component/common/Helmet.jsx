import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Jordan Bell Portfolio </title>
                    <meta name="description" content="Creative React Based Portfolio." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
