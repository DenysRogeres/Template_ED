import { useEffect } from 'react';
import { ContadorView } from './ContadorView';

export function VSL() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/667d92ed2339ec000b5862c2/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/667d92ed2339ec000b5862c2/player.js';
    script.async = true;
    script.id = 'scr_667d92ed2339ec000b5862c2';

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
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
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
   <div className='center'>
   <p style={{margin: '16px 8px 8px 8px', color: 'yellow'}}>My Wife was shocked with my size and thickness after this.</p>

    <div className="vsl">
      <div id="vid_667d92ed2339ec000b5862c2" style={{ position: 'relative', width: '100%', padding: '176.47058823529412% 0 0' }}>
        <img
          id="thumb_667d92ed2339ec000b5862c2"
          src="https://images.converteai.net/6320f6d8-4d0e-4729-bff9-b0cb2cc291c6/players/667d92ed2339ec000b5862c2/thumbnail.jpg"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          alt="Video Thumbnail"
        />
        <div
          id="backdrop_667d92ed2339ec000b5862c2"
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