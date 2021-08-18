import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Actions from './Actions';
import translation from '../static/translation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: '10px'
  },
}));

export default function Header() {
  const classes = useStyles();
  const currentLang = translation.find(t => t.key === 'vi');
  const { photoURL } = auth.currentUser;

  
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
              <Avatar className="CurrentUser__avata" alt="Alo Chat" src={photoURL} />
              <Typography className={classes.title} variant="h6" noWrap>
                {currentLang.app_name}
            </Typography>
          </IconButton>
          <Actions />
        </Toolbar>
      </AppBar>
    </div>
  );
}
