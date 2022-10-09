import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import classes from '../../styles/about.module.css';

import img01 from '../../public/images/img-01.jpg';
import img02 from '../../public/images/img-02.jpg';
import img03 from '../../public/images/img-03.jpg';
import img04 from '../../public/images/hero.jpg';

const About = () => {
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <SectionSubtitle subtitle="About me" />
                        <h3 className="mt-4">I&apos;m here</h3>
                        <h3 className="mb-4">to help your next project</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero blanditiis, nihil
                            quasi ipsum saepe, a at quidem cupiditate adipisci magni eius eveniet consectetur minima aut
                            tempore ipsam. Natus, necessitatibus? Voluptatibus repellendus, delectus enim at
                            necessitatibus voluptatum aliquid cum deserunt.
                        </p>

                        <div className="d-flex align-items-center gap-5">
                            <div>
                                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                    <span className={`${classes.about_icon}`}>
                                        <i class="ri-checkbox-circle-line"></i>
                                    </span>
                                    Problem Solving
                                </h6>
                                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                    <span className={`${classes.about_icon}`}>
                                        <i class="ri-checkbox-circle-line"></i>
                                    </span>
                                    Search A Lot
                                </h6>
                            </div>
                            <div>
                                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                    <span className={`${classes.about_icon}`}>
                                        <i class="ri-checkbox-circle-line"></i>
                                    </span>
                                    Creative Idea
                                </h6>
                                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                    <span className={`${classes.about_icon}`}>
                                        <i class="ri-checkbox-circle-line"></i>
                                    </span>
                                    High Quality
                                </h6>
                            </div>
                        </div>

                        <div className="mt-5">
                            <button className="primary_btn">
                                <Link href="#portfolio">My Portfolio</Link>
                            </button>
                            <button className="secondary_btn">
                                <Link href="#">Download CV</Link>
                            </button>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="d-flex gap-4 justify-content-end">
                            <div className="d-flex flex-column mb-3">
                                <div className={`${classes.about_img} ${classes.about_img_box}`}>
                                    <Image src={img01} alt="about-img" />
                                </div>
                                <div className={`${classes.about_img} ${classes.about_img_box}`}>
                                    <Image src={img02} alt="about-img" />
                                </div>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <div className={`${classes.about_img} ${classes.about_img_box}`}>
                                    <Image src={img03} alt="about-img" />
                                </div>
                                <div className={`${classes.about_img} ${classes.about_img_box}`}>
                                    <Image src={img04} alt="about-img" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
