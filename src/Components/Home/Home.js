import React from 'react';
import logo from '../../images/logo.png';
import image1 from '../../images/tool.png';
import image2 from '../../images/connect.png';
import image3 from '../../images/train.png';
import Navbar from './Navbar';
import demo1 from '../../images/demo/1.jpg';
import demo2 from '../../images/demo/2.jpg';
import demo3 from '../../images/demo/3.jpg';
import demo4 from '../../images/demo/4.jpg';
import demo5 from '../../images/demo/5.jpg';
import demo6 from '../../images/demo/6.jpg';
import demo7 from '../../images/demo/7.jpg';
import demo8 from '../../images/demo/8.jpg';
import demo9 from '../../images/demo/9.jpg';
import demo10 from '../../images/demo/10.jpg';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {

    const serviceData = [
        {
            image: image1,
            title: 'TECHNICAL ASSISTANCE',
            description: 'JBITL provides direct technical assistance for expert testimony in contested dockets, engineering reports, and modeling. Technical assistance platform is supported by a network of over 60 independent consultants and firms with recognized power systems knowledge.'
        },
        {
            image: image2,
            title: 'CONNECTIVITY PLATFORM',
            description: 'JBITL is an online community forum for advocates, experts, and other interested parties to share knowledge and technical information around the design, operation, and attributes of a flexible and dynamic grid. The JBITL platform has over 220 members and hosts discussions ranging from the role of regulated utilities in owning energy storage to appropriate valuation methods for avoided distribution charges.'
        },
        {
            image: image3,
            title: 'TRAINING',
            description: 'JBITL partners with allied organizations to develop training modules on complex grid topics for use by advocates, regulators, and policymakers. In addition, JBITL develops written reports and whitepapers on relevant grid issues for dissemination to a broader audience.'
        }
    ]

    const publicationData = [
        {
            name: 'Affordable Reliable Decarbonization Pathways For Montana',
            link: '',
            image: demo1
        },
        {
            name: 'Removing Barriers to DER in Wholesale Markets',
            link: '',
            image: demo2
        },
        {
            name: 'Pathways and Policies to Achieve Nevada’s Climate Goals',
            link: '',
            image: demo3
        },
        {
            name: 'Western States Deep Decarbonization',
            link: '',
            image: demo4
        },
        {
            name: 'NREL Inertia and the Power Grid: A Guide Without the Spin',
            link: '',
            image: demo5
        },
        {
            name: 'A Playbook For Modernizing The Distribution Grid',
            link: '',
            image: demo6
        },
        {
            name: '10 Things you should know about Grid-Forming Inverters',
            link: '',
            image: demo7
        },
        {
            name: 'Regulating Voltage: Recommendations For Smart Inverters',
            link: '',
            image: demo8
        },
        {
            name: 'The Role of Distributed Energy Resources in New Jersey Clean Energy Transition',
            link: '',
            image: demo9
        },
        {
            name: 'Modernizing the Grid in the Public Interest: Getting a Smarter Grid at the Least Cost for South Carolina Customers',
            link: '',
            image: demo10
        },

    ]

    return (
        <div className='home-container'>
            <div className="hero-section">

                <div className="container">
                    <Navbar />
                    <h1 data-aos="fade-up" className='text-white mt-5'>Japan Bangladesh Ideas and Technologies Ltd.</h1>
                </div>
            </div>

            <div style={{ marginTop: '100px' }} className="featured container">
                <h3 className='text-center fw-bold title-secondary'>ENABLING A RELIABLE, LOW-CARBON GRID</h3>
                <p className='text-center fs-5 p-primary'>JBITL provides comprehensive technical expertise to policy makers,
                    advocates and other energy decision makers on the design,
                    operation and attributes of a flexible and dynamic grid.</p>
            </div>

            <div className="featured-title d-flex align-items-center justify-content-center">
                <h2 className='text-center text-white'>OUR APPROACH</h2>
            </div>

            <div className="container d-flex mt-5">
                <div className="row">
                    {
                        serviceData.map(service =>
                            <div data-aos="fade-right" className='col-sm-4 mt-3'>
                                <img className='img-fluid mx-auto d-block' src={service.image} alt='JBITL' />
                                <div className="featured-border">
                                    <h5 className='text-center mt-5 title-secondary'>{service.title}</h5>
                                    <p className='text-center p-primary px-5'>{service.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div style={{ backgroundColor: '#f7f7f7', marginTop: '100px' }}>
                <div className="container pt-5">
                    <h2 className='fw-bold title-secondary'>JBITL PUBLICATIONS</h2>
                    <div className="d-flex">

                        <div className="row">
                            <div className="col-sm-4">
                                {
                                    publicationData.map(pub =>

                                        <p className='mt-5'>
                                            <a className='a-primary' href={pub.link}>{pub.name}</a>
                                        </p>
                                    )
                                }
                            </div>

                            <div className="col-sm-8">
                                <div className="container d-flex flex-wrap mt-5">
                                    {
                                        publicationData.map(pub =>
                                            <div className="col-md-4 mt-5 p-5">
                                                <img className="img-fluid mx-auto d-block" src={pub.image}
                                                    alt="JBITL" />
                                            </div>


                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <footer style={{ backgroundColor: '#141714', fontSize: '14px',height:'60vh' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div style={{ marginTop: '100px' }} className="col-md-3">
                            <a class="" href="/">
                                <img src={logo} alt="JBITL Logo" width="100" height="60" />
                            </a>
                            <h6 className='text-white'>Japan Bangladesh Ideas and Technologies Ltd.</h6>
                        </div>
                        <div style={{ marginTop: '100px' }} className="col-md-3">
                            <h6 className='text-white mt-3'>CONTACT</h6>
                            <p className='text-white mt-3'>
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg> +88029677756, +88028613527, +88029669433
                            </p>
                            <p className='text-white mt-3 fw-bold'>Planners Tower (19th Floor), 13/A, Sonargaon Road,
                                <br />
                                Dhaka 1000,
                                <br />
                                Bangladesh
                                <br />
                            </p>
                            <span style={{ marginTop: '20px' }}>info@jbitl.net</span>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

            </footer>
                <div style={{backgroundColor: 'black',height:'50px'}} className="d-flex align-items-center justify-content-center social-links">
                    <div className="container-fluid d-flex">
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"><a className='a-secondary fw-bold' href="https://twitter.com/">Twitter</a></div>
                        <div className="col-md-1 ps-5"><a className='a-secondary fw-bold' href="https://www.linkedin.com/in/eftykharrahman/">Linkedin</a></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div style={{backgroundColor: 'black',borderTop:'1px solid #212529', fontSize:'13px'}}className="d-flex align-items-center justify-content-center">
                    <p className='text-center mt-2 text-secondary'>COPYRIGHT <span style={{cursor:'pointer'}} className='a-secondary fw-bold'>JBITL</span> © {(new Date()).getFullYear()}. ALL RIGHTS RESERVED
                    </p>
                </div>
        </div>
    );
};

export default Home;