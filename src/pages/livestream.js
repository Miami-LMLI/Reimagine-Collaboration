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
                <div>
                    <div className="content">
                        <div className="wrapper">
                            <h2 className="section-headline">
                                Virtual Schedule
                            </h2>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell>10:00 - 10:20 </TableCell>
                                    <TableCell >Opening Remarks
                                        Louise Morman - Executive Director of Lockheed Martin Leadership Institute
                                        Dr. Gregory Crawford - President of Miami University</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>10:20 - 11:05 </TableCell>
                                    <TableCell> Jeff Wilcox
                                        Former Vice President of Digital Transformation at Lockheed Martin
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12:45 - 1:30 </TableCell>
                                    <TableCell> Amy Leschke-Kahle
                                        Vice President of Performance Acceleration at the Marcus Buckingham Company
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>1:45 - 2:30 </TableCell>
                                    <TableCell> Bryce Williams
                                        Advisor + Workforce Collaboration at Eli Lilly and Company
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2:30 - 3:00 </TableCell>
                                    <TableCell> Closing Remarks
                                        Dr. Beena Sukumaran - Dean, College of Engineering and Computing</TableCell>
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

