import { Botao } from "../components/Botao"
import { Disclaimer } from "../components/Disclaimer"
import myIcon from '../assets/step3.svg';

export function Etapa03({setPage}) {
   return (
      <div className="container">

         <img src={myIcon} style={{ width: '90vw', maxWidth: '660px', height: 'auto', marginTop:'16px' }} />

      <div className="headline">
         <h1>
            Besides having a hard-on anytime, what&apos;s the most important issue you want to deal with?
         </h1>
      </div>
         
         <div>
            <Botao onClick={() => setPage(4)} title="Confidence" subtitle="“I want the kind of alpha energy that effortlessly draws women to me and makes me stand out everywhere I go.”"/>
            <Botao onClick={() => setPage(4)} title="Performance" subtitle="“I want to easily get in the mood as if on command and satisfy my partner with leg-shaking pleasure.”"/>
            <Botao onClick={() => setPage(4)} title="Shredded Body" subtitle="“I want the raw muscle strength I need to eventually outlift everyone at the gym.”"/>
            <Botao onClick={() => setPage(4)} title="Happiness" subtitle="“I want to enjoy happy, stable moods and have a positive outlook on my life.”"/>
         </div>

         <Disclaimer />

      </div>
   )
}