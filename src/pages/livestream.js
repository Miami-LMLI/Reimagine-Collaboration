import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MemberPreview from '../components/member-preview';
import Header from '../components/header';
import Layout from '../components/layout';
import Crawford from '../assets/images/Crawford.jpg';
import Wilcox from '../assets/images/Wilcox.jpg';
import Leschke from '../assets/images/Leschke-Kahle.jpg';
import Williams from '../assets/images/Williams.jpg';
import Sukumaran from '../assets/images/Sukumaran.jpg';

/**
 * The class that represents the categories page.
 */
class Categories extends React.Component {
    /**
     * Returns the categories page content that is supposed to be rendered by a
     * user's browser inside a Layout component.
     * @return {*} The categories page content that is supposed to be rendered
     * by a browser.
     */
    render() {
        // Gets the GraphQL page query. This gets the images, title, descriptions,
        // and slugs for all categories.
        const categories = get(this.props, 'data.allContentfulMember.edges');

        return (
            <Layout
                title="Livestream"
                location={this.props.location}>
                <div className="content">
                    <Header text={'Livestream'} applyGradient={true} />
                    <div className="wrapper">
                        <h1 className="section-headline">
                            Livestream for Reimagine Collaboration
                        </h1>
                    </div>
                </div>
                <div className="content" style={{ textAlign: "center" }}>
                    <div className="wrapper">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="960" height="540" src="https://www.youtube.com/embed/U9bAh-W2r_U" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="content" style={{ textAlign: "center" }}>
                    <div className="wrapper">
                        <h2 className="section-headline">
                            Register for the Virtual Event
                        </h2>
                        <p><a href="https://www.eventbrite.com/x/266411061657/">Livestream Registration</a></p>
                    </div>
                </div>
                <div>
                    <div className="content">
                        <div className="wrapper">
                            <h2 className="section-headline">
                                Virtual Schedule (EST)
                            </h2>
                            <div className="livestream-schedule p-5">
                                <Row className="pb-4">
                                    <Col md={6}> 
                                        <h4 className="text-center"> 10:00 - 10:20 </h4>
                                        <img className="mx-auto" src={Crawford} alt="Crawford" style={{ height: "150px", width: "150px" }} />
                                    </Col>
                                    <Col md={6}> 
                                        <h3> Opening Remarks</h3>
                                        <h3> Louise Morman </h3>
                                        <p> Executive Director of Lockheed Martin Leadership Institute </p>
                                        <h3> Dr. Gregory Crawford </h3> 
                                        <p> President of Miami University </p>
                                        </Col>
                                </Row>
                                <Row className="pb-4">
                                    <Col md={6}> 
                                        <h4 className="text-center"> 10:20 - 11:05 </h4>
                                        <img className="mx-auto" src={Wilcox} alt="Wilcox" style={{ height: "150px", width: "150px" }} />
                                    </Col>
                                    <Col md={6}> 
                                        <h3> Jeff Wilcox </h3>
                                        <p> Former Vice President of Digital Transformation at Lockheed Martin </p>
                                    </Col>
                                </Row>
                                <Row className="pb-4">
                                    <Col md={6}> 
                                        <h4 className="text-center"> 12:45 - 1:30 </h4> 
                                        <img className="mx-auto" src={Leschke} alt="Leschke" style={{ height: "150px", width: "150px" }} />
                                    </Col>
                                    <Col md={6}> 
                                        <h3> Amy Leschke-Kahle </h3>
                                        <p> Vice President of Performance Acceleration at the Marcus Buckingham Company </p>
                                    </Col>
                                </Row>
                                <Row className="pb-4">
                                    <Col md={6}> 
                                        <h4 className="text-center"> 1:45 - 2:30 </h4>
                                        <img className="mx-auto" src={Williams} alt="Williams" style={{ height: "150px", width: "150px" }} />
                                    </Col>
                                    <Col md={6}> 
                                        <h3> Bryce Williams </h3>
                                        <p> Advisor + Workforce Collaboration at Eli Lilly and Company </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}> 
                                        <h4 className="text-center">  2:30 - 3:00 </h4>
                                        <img className="mx-auto" src={Sukumaran} alt="Sukumaran" style={{ height: "150px", width: "150px" }} />
                                    </Col>
                                    <Col md={6}> 
                                        <h3> Closing Remarks </h3>
                                        <h3> Dr. Beena Sukumaran </h3>
                                        <p> Dean, College of Engineering and Computing </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

// Defines the propTypes of Categories.
Categories.propTypes = {
    location: PropTypes.any,
};

export default Categories;

