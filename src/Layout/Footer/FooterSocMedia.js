import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from 'Components/Buttons/IconButton';

const FooterSocMedia = () => {

  return (
    <Box display='flex' width='fit-content' mr={{ xs: 'auto', lg: '0' }} ml='auto' >
      <Box m='5px' my='5px'>
        <IconButton icon='/icons/facebook.svg' />
      </Box>
      <Box m='5px' my='5px'>
        <IconButton icon='/icons/linkedin.svg' />
      </Box>
      <Box m='5px' my='5px'>
        <IconButton icon='/icons/twitter.svg' />
      </Box>
    </Box>
  );
}

export default FooterSocMedia;