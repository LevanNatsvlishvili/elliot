import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageSlider from './ImageSlider';

const OurTeam = () => {
  const classes = useStyles();

  return (
    <div className={classes.team}>
      <ImageSlider slides={members} />
    </div>
  );
}

const members = [
  {
    img: '/members/member1.png',
    name: 'Giorgi Giorgadze',
    position: 'Graphic Design',
  },
  {
    img: '/members/member3.png',
    name: 'Eka Shanidze',
    position: 'CEO',
  },
  {
    img: '/members/member2.png',
    name: 'Giorgi Giorgadze',
    position: 'Web Developer',
  },
  {
    img: '/members/member1.png',
    name: 'Giorgi Giorgadze',
    position: 'Graphic Design',
  },
  {
    img: '/members/member3.png',
    name: 'Eka Shanidze',
    position: 'CEO',
  },
  {
    img: '/members/member2.png',
    name: 'Giorgi Giorgadze',
    position: 'Web Developer',
  },


]


const useStyles = makeStyles((theme) => ({
  team: {
    marginTop: 50,
  },
}));

export default OurTeam;
