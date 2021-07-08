import React from 'react';
import { makeStyles } from '@material-ui/styles';

const OurTeam = () => {
  const classes = useStyles();

  return (
    <div className={classes.team}>

    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  team: {
    marginTop: 50,
  },
}));

export default OurTeam;
