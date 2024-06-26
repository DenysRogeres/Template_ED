import loadingGif from '../assets/loading-ref.gif';

export function Loading() {
   return (
      <>
      <div className="loadingPage">
         <p>This video contains sensitive content. I strongly recommend that you watch this presentation alone.</p>
         <img src={loadingGif} width="50%"/>
      </div>
      </>
   )
}