import React from 'react';
import logo from '../../images/logo.png';
import image1 from '../../images/tool.png';
import image2 from '../../images/connect.png';
import image3 from '../../images/train.png';
import Navbar from './Navbar';
import publication1 from '../../images/publication-1.jpg';
import publication2 from '../../images/publication-2.jpg';
import publication3 from '../../images/publication-3.jpg';

import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {

    const serviceData = [
        {
            image: image1,
            title: 'EXPERTISE',
            description: 'The product and the technology is made in Japan by Eiken Co. Ltd. This is a complete replacement of clay brick. In civil construction, people needs brick as basic goods for wide range of works. This could fill up all purpose needs and 100% environment friendly.'
        },
        {
            image: image2,
            title: 'CONNECTIVITY PLATFORM',
            description: 'Japan Bangladesh Ideas and Technologies Ltd. (JBITL) has Begun 2021 with the fantasy to acquaint new innovation items with the local area. Environment changes are the justification natural contamination. The contamination is basically coming from coal and fossil consuming in conventional Brickfields. JBITL is giving new block projects and moving the innovation for business visionaries in Bangladesh.'
        },
        {
            image: image3,
            title: 'MISSION',
            description: 'To meet the ecological products demand in Construction and Maintenance services with standards in health and safety towards our Community'
        }
    ]

    const publicationData = [
        {
            name: 'Affordable Reliable Decarbonization Pathways For Montana',
            link: '',
            image: publication1
        },
        {
            name: 'Removing Barriers to DER in Wholesale Markets',
            link: '',
            image: publication2
        },
        {
            name: 'Pathways and Policies to Achieve Nevada’s Climate Goals',
            link: '',
            image: publication3
        },
        {
            name: 'Western States Deep Decarbonization',
            link: '',
            image: publication2
        },
        {
            name: 'NREL Inertia and the Power Grid: A Guide Without the Spin',
            link: '',
            image: publication3
        },
        {
            name: 'A Playbook For Modernizing The Distribution Grid',
            link: '',
            image: publication1
        },
        {
            name: '10 Things you should know about Grid-Forming Inverters',
            link: '',
            image: publication3
        },
        {
            name: 'Regulating Voltage: Recommendations For Smart Inverters',
            link: '',
            image: publication2
        },
        {
            name: 'The Role of Distributed Energy Resources in New Jersey Clean Energy Transition',
            link: '',
            image: publication1
        }

    ]

    return (
        <div className='home-container'>
            <div className="hero-section">

                <div className="container">
                    <Navbar />
                    <h1 data-aos="fade-up" className='text-white mt-5'>Japan Bangladesh Ideas and Technologies Ltd.</h1>
                    <p className='text-white'>We respect the community and the environment</p>
                </div>
            </div>

            <div style={{ marginTop: '100px' }} className="featured container">
                <h3 className='text-center fw-bold title-secondary text-uppercase'>Alternative of Traditional Bricks & Blocks</h3>
                <p className='text-center fs-5 p-primary'>Japan Bangladesh Ideas & Technologies Ltd. (JBITL) has Started 2021 with the dream to introduce new technology products to the community. Climate changes are the reason for environmental pollution. The pollution is mainly coming from coal & fossil burning in traditional Brickfields. JBITL is providing new brick projects and transferring the technology for entrepreneurs in Bangladesh.</p>
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
                                        <p style={{ cursor: 'pointer' }} className='mt-5 a-primary'>{pub.name}</p>
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

            <footer style={{ backgroundColor: '#141714', fontSize: '14px' }}>
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
                                Bangladesh.
                                <br />
                            </p>
                            <span style={{ marginTop: '20px' }}>info@jbitl.net</span>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

            </footer>
            <div style={{ backgroundColor: 'black', height: '50px' }} className="d-flex align-items-center justify-content-center social-links">
                <div className="container-fluid d-flex">
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"><a className='a-secondary fw-bold' href="https://twitter.com/">Twitter</a></div>
                    <div className="col-md-1 ps-5"><a className='a-secondary fw-bold' href="https://www.linkedin.com/">Linkedin</a></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div style={{ backgroundColor: 'black', borderTop: '1px solid #212529', fontSize: '13px' }} className="d-flex align-items-center justify-content-center">
                <p className='text-center mt-2 text-secondary'>COPYRIGHT <span style={{ cursor: 'pointer' }} className='a-secondary fw-bold'>JBITL</span> © {(new Date()).getFullYear()}. ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    );
};

export default Home;