import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';

const CustomizedCard = (props) => {
  const classes = useStyles();
  const { img } = props;

  return (
    <CardMedia
      className={classes.media}
      component="img"
      alt="member"
      maxHeight='135px'
      image={img}
    />
  );

}

const useStyles = makeStyles((theme) => ({
  media: {
    maxHeight: 535,
  },

}));

export default CustomizedCard;
