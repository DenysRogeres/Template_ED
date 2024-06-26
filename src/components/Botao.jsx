import './styles.css'

export function Botao({title, subtitle, onClick}) {
   return (
      <>
         <button className="botaoQuiz" onClick={onClick}>
            {title} <br/> 
               <span style={{fontSize: 14, lineHeight: 0, margin: 0, padding: 0}}>
                  {subtitle}
               </span>
         </button>
      </>
   )
}