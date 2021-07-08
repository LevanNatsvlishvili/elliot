import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Text = (props) => {
  const classes = useStyles({
    color: props.color,
    fontSize: props.fontSize,
    fontSizeMd: props.fontSizeMd,
    lineHeight: props.lineHeight,
    lineHeightMd: props.lineHeightMd,
    fontWeight: props.fontWeight,
    fontFamily: props.fontFamily,
    textAlign: props.textAlign,
  });
  const { children } = props;
  return (
    <Typography className={classes.root} >
      {children}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: (props) => theme.colors[props.color || 'black'],
    fontSize: (props) => props.fontSize || '14px',
    lineHeight: (props) => props.lineHeight || '14px',
    fontWeight: (props) => props.fontWeight || '400',
    textAlign: props => props.textAlign || 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: (props) => props.fontSizeMd,
      lineHeight: (props) => props.lineHeightMd,
    },
  },
}));

export default Text;