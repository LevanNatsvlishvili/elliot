import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from './Card';

const ImageSliderSlides = (props) => {
  const classes = useStyles();
  const { slides, curr } = props;

  if (Array.isArray(slides) && slides.length > 0) return (
    slides.map((slide, i) => (
      <Card key={i} curr={curr} slide={slide} />
    ))
  );

  return null
}

const useStyles = makeStyles((theme) => ({
  slide: {
    padding: 15,
    transition: '.5s',
    minWidth: '33.33%',
  },
  card: {
    borderRadius: 10,
    maxHeight: 535,
    background: 'transparent',
    boxShadow: 'none',
    position: 'relative',
    "&:hover": {
      background: 'transparent',
    },
    '& main': {
      display: 'none',
    },
    '&:hover main': {
      display: 'unset'
    }
  },
  content: {
    color: '#fff',
    textAlign: 'center',
    padding: 30,
    paddingBottom: 0,
  },
  actionArea: {
    background: 'rgba(255,255,255,.8)',
    borderRadius: 10,
    height: 68,
    width: '80%',
    margin: 'auto',
    position: 'absolute',
    bottom: '100px',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }
}));

export default ImageSliderSlides;
