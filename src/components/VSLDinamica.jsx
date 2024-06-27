import React, { useEffect, useRef } from 'react';
import headline from '../assets/headline.png'
import { ContadorView } from './ContadorView';


const VSLDinamica = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/ab-test/667d9ab22339ec000b586592/player.js';
    script.async = true;
    script.id = 'scr_667d9ab22339ec000b586592';

    if (playerRef.current) {
      playerRef.current.appendChild(script);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.innerHTML = ''; // Clean up the script and player
      }
    };
  }, []);

  return (


   <>
   <div className='center'>

      <img src={headline} style={{ width: '80vw', maxWidth: '600px', height: 'auto', marginTop:'16px' }} />
         <div className="vturb-player-container vsl" style={{ margin: 0, padding: 0 }}>
         <div ref={playerRef} id="smartplayer" style={{ margin: 0, padding: 0 }}></div>
         <style>{`
         .elementor-element:has(#smartplayer) {
            width: 100%;
            margin: 0;
            padding: 0;
         }
         .vturb-player-container {
            margin: 0;
            padding: 0;
         }
         #smartplayer {
            margin: 0;
            padding: 0;
         }
         `}</style>
      </div>

      <p style={{marginTop: '8px'}}><ContadorView /> people watching now...</p>
   </div>

   </>
  );
};

export default VSLDinamica;
