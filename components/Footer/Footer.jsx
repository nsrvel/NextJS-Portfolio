import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import classes from './footer.module.css';
import Link from 'next/link';

const NAV_LINK = [
    {
        path: '/',
        display: 'Home',
    },
    {
        path: '#about',
        display: 'About',
    },
    {
        path: '#services',
        display: 'Services',
    },
    {
        path: '#portfolio',
        display: 'Portfolio',
    },
    {
        path: '#contact',
        display: 'Contact',
    },
];

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    {/* footer top */}
                    <Col lg="6">
                        <div className={`${classes.nav_menu}`}>
                            {NAV_LINK.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className={`${classes.footer_creator}`}>
                            <h6>Created by Putra Rama</h6>
                        </div>
                    </Col>
                    {/* footer bottom */}
                    <Col lg="12">
                        <div className={`${classes.footer_copyright}`}>
                            <p>&copy; Copyright {year} - Developed by Putra Rama Setiawan. All right reserved. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
