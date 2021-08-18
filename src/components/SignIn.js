import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button, Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import translation from '../static/translation';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#3f51b5',
        color: '#fff',
        textAlign: 'center'
    },
    title: {
        marginBottom: '15px'
    },
    button: {
      background: '#fff'
    },
  }));

function SignIn() {
    const classes = useStyles();
    const currentLang = translation.find(t => t.key === 'vi');

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <Container className={classes.container}>
            <Box>
                <Typography className={classes.title } variant="h6">
                {currentLang.app_name}
                </Typography>
                <Button className={classes.button} variant="contained" onClick={signInWithGoogle}>{currentLang.sign_in}</Button>
            </Box>
        </Container>
    )
}

export default SignIn

