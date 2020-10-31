import React from 'react';



const PortfolioList = [
    {
        images: '9',
        category: 'JavaScript',
        title: 'Missing Link'
    },
    {
        images: '8',
        category: 'Html',
        title: 'Small Business'
    },
    {
        images: '7',
        category: 'Graphic',
        title: 'Decriptive Design'
    },
    {
        images: '4',
        category: 'After Effects',
        title: 'Deliver the message'
    },
    {
        images: '5',
        category: 'Branding',
        title: 'Find Your Identity'
    },
    {
        images: '6',
        category: 'Stingers',
        title: 'Captivate'
    },
    {
        images: '3',
        category: 'Mixed Media',
        title: 'Dream Big'
    },
    {
        images: '1',
        category: 'Print',
        title: 'Content Design'
    },
    {
        images: '10',
        category: 'CSS',
        title: 'Unique UX'
    },
    {
        images: '11',
        category: 'Data Visualization',
        title: 'Bringing Data To Life'
    },
    {
        images: '2',
        category: 'Editing',
        title: 'Paradise'
    },
    {
        images: '12',
        category: 'Freelancer',
        title: 'Getting tickets to the big show'
    },
]


const CreativePortfolio = () => {

    return (
        <div className="creative-portfolio">
            

            {/* Start Portfolio Area  */}
            <div className="creative-portfolio-wrapper bg_color--1">
                <div className="creative-portfolio-wrapper plr--10">
                    <div className="row row--5">
                        {PortfolioList.map((value, i: {
    images: Number;
    category: string;
    title: string;
}) => (
                            <div className="col-lg-3 col-md-6 col-12" key={i}>
                                <div className="portfolio-style--3">
                                    <div className="thumbnail">
                                        <a href={`/${value.title.replace(/\s/g, '')}`}>
                                            <img className="w-100"  src={`/assets/images/portfolio/portfolio-${value.images}.jpg`} alt="Portfolio Images"/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <p className="portfoliotype">{value.category}</p>
                                        <h4 className="title"><a href={`/${value.title.replace(/\s/g, '')}`}>{value.title}</a></h4>
                                        <div className="portfolio-btn">
                                            <a className="rn-btn text-white" style={{ whiteSpace: 'nowrap' }} href={`/${value.title.replace(/\s/g, '')}`} key={i}>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CreativePortfolio;