import { useState, useEffect } from 'react'
import './App.css'
import { Etapa01 } from './pages/Etapa_01'
import { Etapa02 } from './pages/Etapa_02'
import { Etapa03 } from './pages/Etapa_03'
import { Etapa04 } from './pages/Etapa_04'

function App() {
  const [page, setPage] = useState(1)
  
  /*
  const [page, setPage] = useState(() => {
    const savedPage = sessionStorage.getItem('page');
    return savedPage !== null ? JSON.parse(savedPage) : 1;
  });

  useEffect(() => {
    sessionStorage.setItem('page', JSON.stringify(page));
  }, [page]);
  */

  return (
    <>
      { page == 1 ? <Etapa01 setPage={setPage}/> :
        page == 2 ? <Etapa02 setPage={setPage}/> : 
        page == 3 ? <Etapa03 setPage={setPage}/> : <Etapa04 /> }
      
    </>
  )
}

export default App
