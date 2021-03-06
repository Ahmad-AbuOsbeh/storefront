import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default function Footer() {
  return (
    <>
      {/* <h4>all Rights reserved @ Ahmad Abu Osbeh 2021</h4> */}
      <ButtonAppBar />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='footer'>
      <AppBar id='nav-bar' position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'></IconButton>
          {/* <Typography variant='h6' className={classes.title}> */}
          <h5>all Rights reserved @ Ahmad Abu Osbeh 2021</h5>
          {/* </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
