
import React from 'react';
import './style.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(20),
            height: theme.spacing(25),
        },
    },
}));

function AboutMe() {
    const classes = useStyles();
    return (
        <Container className="introduction" style={{ height: '40vh' }}>
            <div className={classes}>
            </div>
            <p className="introduction-text">
                My name is James Jorissen. I work in Saint Paul Public Schools in the Division of Schools. I am learning web development as I look to make more opportunities available to myself as I move forward into a new career. I have a passion for computers and solving problems.
                <br />
                I have a wife named Andrea, a 2 year old daughter named Eden and 2 crazy dogs named Putter and Lily.
            </p>
        </Container>
    )
};
export default AboutMe;