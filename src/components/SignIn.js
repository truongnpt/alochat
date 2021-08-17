import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button, Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
      
    },
  }));

function SignIn() {
    const classes = useStyles();

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <Container className={classes.container}>
            <Box>
                <Typography className={classes.title } variant="h6">
                Alo Chat
                </Typography>
                <Button className={classes.button} variant="contained" color="primary" onClick={signInWithGoogle}>Sign In With Google</Button>
            </Box>
        </Container>
    )
}

export default SignIn

