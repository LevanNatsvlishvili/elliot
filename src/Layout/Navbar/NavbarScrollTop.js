import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from 'Components/Buttons/IconButton';

function ScrollTop(props) {
  const { children, } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });


  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger} >
      <div className={classes.root}>
        <IconButton background='transparent' onClick={handleClick} icon="/icons/top.svg" >

        </IconButton>
      </div>
    </Zoom>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 200,
    right: 26,
    zIndex: 2000,

  },
}));

export default ScrollTop;