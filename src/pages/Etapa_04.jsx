import { useState, useEffect } from "react";
import './styles.css';

import myIcon from '../assets/step4.svg';
import scientific_ref from '../assets/scientific_ref.webp';
import ref_art from '../assets/ref_art.webp';
import ref_buygoods from '../assets/ref_buygoods.webp';
import ref_buygoods_blakc from '../assets/ref_buygoods_blakc.webp';

import { VSL } from "../components/Vsl"
import { Botao } from "../components/Botao";
import { BotaoCheckout } from "../components/BotaoCheckout";
import { CountdownTimer } from "../components/CountdownTimer";
import { Loading } from "./Loading";


export function Etapa04() {
   //const [showButton, setShowButton] =  useState(false);
   const [showCountdown, setShowCountdown] = useState(false);
   //const [showTempPage, setShowTempPage] = useState(false);

   const [showTempPage, setShowTempPage] = useState(() =>
      {
         const savedPage = sessionStorage.getItem('showTempPage');
         return savedPage !== null ? JSON.parse(savedPage) : true;
       }
   );

   const [showButton, setShowButton] = useState(
      sessionStorage.getItem('showButton') == 'true' || false
   );

  useEffect(() => {
    const tenMinutes = 19 * 60 * 1000;;
    const firstVisitTime = localStorage.getItem('firstVisitTime');

    if (!firstVisitTime) {
      const now = new Date().getTime();
      localStorage.setItem('firstVisitTime', now);
      setTimeout(() => {
        setShowCountdown(true);
      }, tenMinutes);
    } else {
      const now = new Date().getTime();
      const timeElapsed = now - firstVisitTime;

      if (timeElapsed >= tenMinutes) {
        setShowCountdown(true);
      } else {
        setTimeout(() => {
          setShowCountdown(true);
        }, tenMinutes - timeElapsed);
      }
    }
  }, []);

  useEffect(() => {

      const timer = setTimeout(() => {
        setShowTempPage(false);
        sessionStorage.setItem('showTempPage', false);
      }, 4400);

      return () => clearTimeout(timer);

      /*

      setShowTempPage(true);

      const timer = setTimeout(() => {
      setShowTempPage(false);
      }, 4400); 

      return () => clearTimeout(timer);*/
  }, [])


   return (
      <>
      <div className="container">
     
         <img src={myIcon} style={{ width: '90vw', maxWidth: '660px', height: 'auto', marginTop:'16px' }} />
         
         {showButton == true ? 
         <>
            {showTempPage ? <Loading /> : <VSL/> }
            <div className="buttonCheckout">
               {showCountdown == true ?
                  <>
                     <BotaoCheckout />
                     <div>
                        <CountdownTimer />
                     </div>
                  </>
               : ''}
            </div>
         </> :
            <>
               <div className="headline">
                  <h1>
                     <span className="highlight-red">CONGRATULATIONS!</span>
                  </h1>
                  <h2>Your answers reveal that your "tool" problems can be fixed up with this little known method. 
                  <span className="highlight-orange"> Click below now to watch a FREE presentation that reveals how to put you little boy up faster than ever... boost your confidence... and provide the performance of your dreams at any time.</span></h2>
               </div>
               <div className="buttonPresentation">
                  <Botao 
                     onClick={() => {setShowButton(true); sessionStorage.setItem('showButton', true)}}
                     title=">>> Watch the free presentation"
                  />
               </div>
            </>
          }

      </div>

         <div className="footer">
            <div className="section-full-width ref-1">
               <img src={scientific_ref} />
            </div>
            <div className="section-full-width ref-2">
               <img src={ref_art} />
            </div>

            <div className="section-full-width buygoods">
               <img src={ref_buygoods} />
            </div>

            <div className="section-full-width buygoods-footer">
               <img src={ref_buygoods_blakc} />
            </div>
         </div>
      </>
   )
}
