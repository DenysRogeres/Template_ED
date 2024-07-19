import { Botao } from "../components/Botao"
import { Disclaimer } from "../components/Disclaimer"
import myIcon from '../assets/step3.svg';

export function Etapa03({setPage}) {
   return (
      <div className="container">

         <img src={myIcon} style={{ width: '90vw', maxWidth: '660px', height: 'auto', marginTop:'16px' }} />

      <div className="headline">
         <h1>
            Besides having a hard-on anytime, what&apos;s your priority in increasing your size?
         </h1>
      </div>
         
         <div>
            <Botao onClick={() => setPage(4)} title="Improve confidence and self-esteem"/>
            <Botao onClick={() => setPage(4)} title="Better satisfy your partner" />
            <Botao onClick={() => setPage(4)} title="Increase sexual pleasure"/>
            <Botao onClick={() => setPage(4)} title="All of the above" />
         </div>

         <Disclaimer />

      </div>
   )
}