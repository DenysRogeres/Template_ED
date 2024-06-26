import './styles.css'
import { useState, useEffect } from 'react';

export function BotaoCheckout() {
   const [affiliateUrl, setAffiliateUrl] = useState('');

   useEffect(() => {
      const getUTMParameters = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return {
          utm_source: urlParams.get('utm_source'),
          utm_campaign: urlParams.get('utm_campaign'),
          utm_medium: urlParams.get('utm_medium'),
          utm_content: urlParams.get('utm_content'),
          utm_term: urlParams.get('utm_term'),
        };
      };
  
      const buildAffiliateUrl = (utmParams) => {
        const baseUrl = 'https://getalphabites.com/dtc/';
        const affId = '5474';
        const url = `${baseUrl}?aff_id=${affId}&subid=${utmParams.utm_source}&subid2=${utmParams.utm_campaign}&subid3=${utmParams.utm_medium}&subid4=${utmParams.utm_content}&subid5=${utmParams.utm_term}`;
        return url;
      };
  
      const utmParams = getUTMParameters();
      const url = buildAffiliateUrl(utmParams);
      setAffiliateUrl(url);
    }, []);
  

   return (
      <a href={affiliateUrl} target="_blank">
         <button className="botaoCheckout">
            YES! I WANT ALPHABITES NOW!!!
         </button>
      </a>
   )
}