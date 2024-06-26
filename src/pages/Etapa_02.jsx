import { Botao } from "../components/Botao"
import { Disclaimer } from "../components/Disclaimer"
import myIcon from '../assets/step2.svg';

export function Etapa02({setPage}) {
   return (
      <div className="container">

         <img src={myIcon} style={{ width: '90vw', maxWidth: '660px', height: 'auto', marginTop:'16px' }} />

         <div className="headline">
            <h1>How Many Times Do You Want To Enjoy Sex And Satisfy Your Partner Every Week?</h1>
         </div>

         <div style={{ marginTop: '16px'}}>
            <Botao onClick={() => setPage(3)} title="1-4 Times a Week"/>
            <Botao onClick={() => setPage(3)} title="5-10 Times a Week"/>
            <Botao onClick={() => setPage(3)} title="As Often As I Want"/>
         </div>

         <Disclaimer />
      </div>
   )
}