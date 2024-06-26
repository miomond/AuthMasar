import { useState } from 'react'
import '@fontsource/roboto';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Naver from './components/Naver'
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(true)

  return (
    <>
<button onClick={()=> setCount(!count)}>button</button>
    {/* <Naver/> */}


    {count === true ? <Login/> : <Register/>}
{/* <Login/> */}
    </>
  )
}

export default App
