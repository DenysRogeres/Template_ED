import React, { useEffect, useRef } from 'react';
import headline from '../assets/headline.png';
import { ContadorView } from './ContadorView';

const VSLBoostaro = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/664a424f87ac0e000b3e1266/player.js';
    script.async = true;
    script.id = 'scr_664a424f87ac0e000b3e1266';

    if (playerRef.current) {
      playerRef.current.appendChild(script);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.innerHTML = ''; // Clean up the script and player
      }
    };
  }, []);

  useEffect(() => {
    // Adiciona o Pixel do Facebook
    !(function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '994500031979030');
    fbq('track', 'PageView');

    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=994500031979030&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    return () => {
      document.head.removeChild(noscript);
    };
  }, []);

  return (
    <>
      <div className="center">
        <img
          src={headline}
          style={{ width: '80vw', maxWidth: '600px', height: 'auto', marginTop: '16px' }}
          alt="Headline"
        />
        <div className="vturb-player-container vsl" style={{ margin: 0, padding: 0 }}>
          <div
            ref={playerRef}
            id="vid_664a424f87ac0e000b3e1266"
            style={{ position: 'relative', width: '100%', padding: '177.04918032786884% 0 0' }}
          >
            <img
              id="thumb_664a424f87ac0e000b3e1266"
              src="https://images.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/664a424f87ac0e000b3e1266/thumbnail.jpg"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              alt="Thumbnail"
            />
            <div
              id="backdrop_664a424f87ac0e000b3e1266"
              style={{ position: 'absolute', top: 0, width: '100%', height: '100%', backdropFilter: 'blur(5px)' }}
            ></div>
          </div>
          <style>{`
            .elementor-element:has(#vid_664a424f87ac0e000b3e1266) {
              width: 100%;
              margin: 0;
              padding: 0;
            }
            .vturb-player-container {
              margin: 0;
              padding: 0;
            }
            #vid_664a424f87ac0e000b3e1266 {
              margin: 0;
              padding: 0;
            }
          `}</style>
        </div>
        <p style={{ marginTop: '8px' }}><ContadorView /> people watching now...</p>
      </div>
    </>
  );
};

export default VSLBoostaro;
