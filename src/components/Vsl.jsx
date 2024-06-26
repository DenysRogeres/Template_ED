import { useEffect } from 'react';
import { ContadorView } from './ContadorView';

export function VSL() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/667a4c9008bf60000bdb8c9f/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
   <div className='center'>
   <p style={{margin: '16px 8px 8px 8px', color: 'yellow'}}>My Wife was shocked with my size and thickness after this.</p>

    <div className="vsl">
      <div id="vid_667a4c9008bf60000bdb8c9f" style={{ position: 'relative', width: '100%', padding: '176.47058823529412% 0 0' }}>
        <img
          id="thumb_667a4c9008bf60000bdb8c9f"
          src="https://images.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/667a4c9008bf60000bdb8c9f/thumbnail.jpg"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          alt="Video Thumbnail"
        />
        <div
          id="backdrop_667a4c9008bf60000bdb8c9f"
          style={{ position: 'absolute', top: 0, width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
        ></div>
      </div>
      <style>{`
        .elementor-element:has(#smartplayer) {
          width: 100%;
        }
      `}</style>
    </div>

    <p style={{marginTop: '8px'}}><ContadorView /> people watching now...</p>
   </div>


  );
}
