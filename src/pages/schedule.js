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

function createData(time, event, location) {
    return { time, event, location };
}

const rows = [
    createData("9:00 - 9:45", "Check-In", "Benton Hall Atrium"),
    createData("9:45 - 10:00", "", "Transition to Farmer"),
    createData("10:00 - 10:20", "Welcome", "Farmer School of Business 0025"),
    createData("10:20 - 11:05", "Jeff Wilcox", "Farmer School of Business 0025"),
    createData("11:10-11:40", "Breakout Groups", "Farmer School of Business 0024, 0027, 0028, 0031"),
    createData("11:40-12:35", "Lunch", "Farmer School of Business Common Area"),
    createData("12:45-1:30", "Amy Leschke-Kahle", "Farmer School of Business 0025"),
    createData("1:30-1:45", "Break", ""),
    createData("1:45-2:30", "Bryce Williams", "Farmer School of Business 0025"),
    createData("2:30-3:00", "Closing Remarks", "Farmer School of Business 0025"),
];

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
                    <div className="wrapper">
                        <h2 className="section-headline">
                            Schedule (EST)
                        </h2>
                    </div>
                    <div className="content" style={{ textAlign: "center" }}>
                        <div className="wrapper">
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="right">Time</TableCell>
                                            <TableCell align="right">Event</TableCell>
                                            <TableCell align="right">Location</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="right">{row.time}</TableCell>
                                                <TableCell align="right">{row.event}</TableCell>
                                                <TableCell align="right">{row.location}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
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
