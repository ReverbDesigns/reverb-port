import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb2 extends Component{
    render(){
        const { title , parent} = this.props;
        return(
            <React.Fragment>
                <div className="breadcrumb-area  ptb--120 bg_image bg_image--33" data-black-overlay="1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h2 className="title">{title}</h2>
                                    <ul className="page-list">
                                        <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                        {parent? <li className="breadcrumb-item">{parent}</li>:''}
                                        <li className="breadcrumb-item active">{title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb2;

