import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Link, BrowserRouter , Routes } from 'react-router-dom'  
import ReactDOM from 'react-dom';  
import { Home } from './pages/home/home';
import { SdkProvider } from '@cosmicdapp/logic';
import { config } from './config';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SdkProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
     
        </Routes>
      </BrowserRouter>
      </SdkProvider>
    </div>
  )
}

export default App
