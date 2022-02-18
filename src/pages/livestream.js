import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MemberPreview from '../components/member-preview';
import Header from '../components/header';
import Layout from '../components/layout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Crawford from '../assets/images/Crawford.png';
import Wilcox from '../assets/images/Wilcox.png';
import Leschke from '../assets/images/Leschke-Kahle.png';
import Williams from '../assets/images/Williams.png';
import Sukumaran from '../assets/images/Sukumaran.png';

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
                    <div className="wrapper">
                        <h2 className="section-headline">
                            Livestream
                        </h2>
                    </div>
                </div>
                <div className="content" style={{ textAlign: "center" }}>
                    <div className="wrapper">
                        <iframe width="960" height="540" src="https://www.youtube.com/embed/U9bAh-W2r_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell> <h4> 10:00 - 10:20 </h4>
                                        <img src={Crawford} alt="Crawford" style={{ height: "150px", width: "150px" }} />
                                    </TableCell>
                                    <TableCell > <h3> Opening Remarks</h3>
                                        <h3> Louise Morman </h3>
                                        <p> Executive Director of Lockheed Martin Leadership Institute </p>
                                        <h3> Dr. Gregory Crawford </h3> 
                                        <p> President of Miami University </p>
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <h4> 10:20 - 11:05 </h4>
                                        <img src={Wilcox} alt="Wilcox" style={{ height: "150px", width: "150px" }} />
                                    </TableCell>
                                    <TableCell> <h3> Jeff Wilcox </h3>
                                        <p> Former Vice President of Digital Transformation at Lockheed Martin </p>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <h4> 12:45 - 1:30 </h4> 
                                        <img src={Leschke} alt="Leschke" style={{ height: "150px", width: "150px" }} />
                                    </TableCell>
                                    <TableCell> <h3> Amy Leschke-Kahle </h3>
                                        <p> Vice President of Performance Acceleration at the Marcus Buckingham Company </p>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <h4> 1:45 - 2:30 </h4>
                                        <img src={Williams} alt="Williams" style={{ height: "150px", width: "150px" }} />
                                    </TableCell>
                                    <TableCell> <h3> Bryce Williams </h3>
                                        <p> Advisor + Workforce Collaboration at Eli Lilly and Company </p>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <h4>  2:30 - 3:00 </h4>
                                        <img src={Sukumaran} alt="Sukumaran" style={{ height: "150px", width: "150px" }} />
                                    </TableCell>
                                    <TableCell> <h3> Closing Remarks </h3>
                                        <h3> Dr. Beena Sukumaran </h3>
                                        <p> Dean, College of Engineering and Computing </p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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

