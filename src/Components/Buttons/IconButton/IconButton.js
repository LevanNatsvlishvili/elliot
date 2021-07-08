import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const IconButton = (props) => {
  const classes = useStyles({
    background: props.background,
    width: props.width,
    widthMd: props.widthMd,
    hover: props.hover,
    svgHover: props.svgHover,
    transform: props.transform,
  });
  const { icon, svg, ...rest } = props;


  return (
    <Button className={classes.button} {...rest}>
      {icon ? <img src={icon} alt='icon' /> :
        svg
      }
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: props => theme.colors[props.background] || 'rgba(255,255,255,.16)',
    height: props => props.width || '40px',
    width: props => props.width || '40px',
    minWidth: 40,
    '&:hover': {
      background: props => theme.colors[props.hover || props.background] || 'rgba(255,255,255,.16)',
      opacity: .9,
      '& svg path': {
        fill: props => theme.colors[props.svgHover || 'blue'],
      }
    },
    '& svg': {
      transform: props => props.transform || null,
      '& path': {
        fill: props => theme.colors[props.svgHover || 'white'],
      }
    },
    [theme.breakpoints.down('md')]: {
      width: props => props.widthMd || props.width || '40px',
      height: props => props.widthMd || props.width || '40px',
    }
  },

}));

export default IconButton;
