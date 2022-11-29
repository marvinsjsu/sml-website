import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


const DoneContent = () => {
  return (
    <div className='pay-content'>
      {/* personalized recommendations */}
      <Player
        src='https://assets5.lottiefiles.com/packages/lf20_JEC7Oo.json'
        className="player"
        autoplay
        keepLastFrame
        style={{ height: '200px', width: '250px' }}
      />
    </div>
  );
};

export default DoneContent;
