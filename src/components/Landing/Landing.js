import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import profileImg from '../../assets/png/profile.jpg';

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ 
                        backgroundColor: theme.primary,
                        flex: '0 0 120px', // SPREAD PURPLE MORE - WAS 80px
                        padding: '0 20px', // ADDED PADDING
                    }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                
                {/* Profile Image - Moved slightly UP */}
                <div className='landing--image-wrapper'>
                    <img
                        src={profileImg}
                        alt='Hia Paul'
                        className='landing--img'
                        style={{
                            opacity: `${drawerOpen ? '0' : '1'}`,
                            borderColor: theme.secondary,
                            marginTop: '-170px', // MOVED UP MORE
                        }}
                    />
                </div>
                
                {/* Text Content - Shifted RIGHT with buttons BELOW */}
                <div
                    className='landing--container-right'
                    style={{ 
                        backgroundColor: theme.secondary,
                        flex: '1', // TAKES REMAINING SPACE
                        padding: '2rem 6rem', // SPREAD BLACK MORE - WAS 2rem 4rem
                    }}
                >
                    <div
                        className='lcr--content'
                        style={{ 
                            color: theme.tertiary,
                            paddingLeft: '80px', // SHIFTED RIGHT
                        }}
                    >
                        <h6 style={{ 
                            fontWeight: '500', 
                            letterSpacing: '2px', 
                            textTransform: 'uppercase', 
                            opacity: '0.8',
                            marginBottom: '0.3rem',
                        }}>
                            {headerData.title}
                        </h6>
                        <h1 style={{ 
                            fontWeight: '700', 
                            fontSize: '3.5rem', 
                            margin: '0.3rem 0',
                            lineHeight: '1.2',
                        }}>
                            {headerData.name}
                        </h1>
                        <p style={{ 
                            fontSize: '1.2rem', 
                            lineHeight: '1.6', 
                            margin: '0.3rem 0 1rem 0', 
                            opacity: '0.9',
                        }}>
                            {headerData.desciption}
                        </p>

                        {/* Buttons - Now BELOW the text */}
                        <div className='lcr-buttonContainer' style={{ marginTop: '1.5rem' }}>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;