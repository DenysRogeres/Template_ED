import { Botao } from "../components/Botao"
import { Disclaimer } from "../components/Disclaimer"
import myIcon from '../assets/step1.svg';

export function Etapa01({setPage}) {
   return (
      <div className="container">

         <img src={myIcon} style={{ width: '90vw', maxWidth: '660px', height: 'auto', marginTop:'16px' }} />

         <div className="headline">
            <h1>How old are you?</h1>
         </div>

         <div>
            <Botao onClick={() => setPage(2)} title="Under 25"/>
            <Botao onClick={() => setPage(2)} title="25-44"/>
            <Botao onClick={() => setPage(2)} title="45-64"/>
            <Botao onClick={() => setPage(2)} title="Over 65"/>
         </div>

         <Disclaimer />
      </div>
   )
}