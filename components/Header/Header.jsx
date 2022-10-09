import React, { useRef, useEffect } from 'react';

import { Container } from 'reactstrap';
import classes from './header.module.css';
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

const Header = () => {
    const headerRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add(`${classes.header_shrink}`);
        } else {
            headerRef.current.classList.remove(`${classes.header_shrink}`);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    return (
        <header className={`${classes.header}`} ref={headerRef}>
            <Container>
                <div className={`${classes.nav_wrapper}`}>
                    {/*  navigation logo  */}
                    <div className={`${classes.logo}`}>
                        <h1>
                            <span>P</span>utra Rama
                        </h1>
                    </div>
                    {/*  nav menu  */}
                    <div className={`${classes.navigation}`}>
                        <div className={`${classes.nav_menu}`}>
                            {NAV_LINK.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}

                            <div className={`${classes.nav_right}`}>
                                <p className=" d-flex align-items-center gap-2 mb-0 ">
                                    {' '}
                                    <i className="ri-phone-line"></i> +6281328161375{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
