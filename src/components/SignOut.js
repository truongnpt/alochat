import React from 'react'
import { auth } from '../firebase.js'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
      fontSize: '16px',
      padding: theme.spacing(2),
    },
  }));

function SignOut() {
    const classes = useStyles();

    return (
        <Typography className={classes.typography} onClick={() => auth.signOut()}>
            Sign Out
        </Typography>
    )
}

export default SignOut
