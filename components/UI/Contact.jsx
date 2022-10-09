import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/contact.module.css';
import Form from './Form';

const Contact = () => {
    return (
        <section id="contact" className={`${classes.contact}`}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <SectionSubtitle subtitle="Contact me" />
                        <h3 className="mt-4 mb-4">Contact with me</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, excepturi quis sunt
                            corrupti quaerat, cumque aperiam pariatur ipsum quia tenetur officiis eaque amet animi ab.
                        </p>

                        <ul className={`${classes.contact_info_list}`}>
                            <li className={`${classes.info_item}`}>
                                <span>
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                <p>Purwokerto - Banyumas- Central Java - Indonesia</p>
                            </li>
                            <li className={`${classes.info_item}`}>
                                <span>
                                    <i class="ri-mail-line"></i>
                                </span>
                                <p>putra1business@gmail.com</p>
                            </li>
                            <li className={`${classes.info_item}`}>
                                <span>
                                    <i class="ri-phone-line"></i>
                                </span>
                                <p>+6281328161375</p>
                            </li>
                        </ul>

                        <div className={`${classes.social_links}`}>
                            <Link href="#">
                                <i class="ri-youtube-line"></i>
                            </Link>
                            <Link href="#">
                                <i class="ri-github-line"></i>
                            </Link>
                            <Link href="#">
                                <i class="ri-facebook-line"></i>
                            </Link>
                            <Link href="#">
                                <i class="ri-linkedin-line"></i>
                            </Link>
                            <Link href="#">
                                <i class="ri-instagram-line"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <Form />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
