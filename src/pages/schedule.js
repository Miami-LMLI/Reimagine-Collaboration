import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/header';
import Layout from '../components/layout';

function createData(time, event, location) {
    return { time, event, location };
}

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
                title="Schedule"
                location={this.props.location}>
                <div className="content">
                    <Header text={'Schedule'} applyGradient={true} />
                    <div className="wrapper">
                        <h1 className="section-headline">
                            Schedule for Reimagine Collaboration (EST)
                        </h1>
                        <div className="content schedule" style={{ textAlign: "center" }}>                  
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 9:00 - 9:45 </b></h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Check-In </h3>
                                </Col>
                                <Col md={4}>
                                    <h4> Benton Hall Atrium </h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 9:45 - 10:00 </b></h4> 
                                </Col>
                                <Col md={4}>
                                </Col>
                                <Col md={4}> 
                                    <h4> Transition to Farmer </h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 10:00 - 10:20 </b></h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Welcome </h3>
                                    <p> Louise Morman - Executive Director of Lockheed Martin Leadership Institute </p>
                                    <p> Dr. Gregory Crawford - President of Miami University </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 10:20 - 11:05 </b></h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Jeff Wilcox </h3>
                                    <p> Former Vice President of Digital Transformation at Lockheed Martin </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b>11:10 - 11:40 </b></h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Breakout Groups </h3>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0024, 0027, 0028, 0031</h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 11:40 - 12:35 </b></h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Lunch </h3>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business Common Area </h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 12:45 - 1:30 </b></h4> 
                                </Col>
                                <Col md={4}> 
                                    <h3> Amy Leschke-Kahle </h3>
                                    <p> Vice President of Performance Acceleration at the Marcus Buckingham Company </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 1:30 - 1:45 </b></h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Break </h3>
                                </Col>
                                <Col md={4}>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col md={4}> 
                                    <h4><b> 1:45 - 2:30 </b></h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Bryce Williams </h3>
                                    <p> Advisor + Workforce Collaboration at Eli Lilly and Company </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}> 
                                    <h4><b>  2:30 - 3:00 </b></h4>
                                </Col>
                                <Col md={4}> 
                                    <h3> Closing Remarks </h3>
                                    <p> Dr. Beena Sukumaran - Dean, College of Engineering and Computing </p>
                                </Col>
                                <Col md={4}>
                                    <h4> Farmer School of Business 0025</h4>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="break" />
            </Layout>
        );
    }
}

// Defines the propTypes of Categories.
Categories.propTypes = {
    location: PropTypes.any,
};

export default Categories;
