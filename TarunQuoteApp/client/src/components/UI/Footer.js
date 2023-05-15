import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {

    const currYear = new Date().getFullYear();

    return <>
        <div className={classes.footer}>
            <div className={classes.copyright}>
            © { `${currYear}` } Tarun Kumar Dey.
            </div>
            <div className={classes.contactLinks}>
            <a href=''>LinkedIn |</a> 
            <a href=''> Instagram</a>
            </div>
        </div>
    </>
}

export default Footer;