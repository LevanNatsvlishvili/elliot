import React from 'react';
import ImageSlider from './ImageSlider';
import OurTeam from './OurTeam';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      {/* <Box bgcolor='#999' opacity='0.3' height='100vh'>
        <img src="/images/bg.png" alt="" />
      </Box> */}
      <OurTeam />
    </div>
  );
}

export default Home;
