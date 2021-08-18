import React from 'react'
import { auth } from '../firebase.js'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import translation from '../static/translation';

const useStyles = makeStyles((theme) => ({
    typography: {
      fontSize: '14px',
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    icon: {
      marginRight: '10px', 
      fontSize: '16px'
    }
  }));

function SignOut() {
    const classes = useStyles();
    const currentLang = translation.find(t => t.key === 'vi');


    return (
        <Typography className={classes.typography} onClick={() => auth.signOut()}>
            <ExitToAppIcon color="primary" className={classes.icon}/> {currentLang.sign_out}
        </Typography>
    )
}

export default SignOut
