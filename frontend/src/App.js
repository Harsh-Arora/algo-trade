import './scss/index.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
// register
import RegBasic from './pages/register/regBasic'
import RegKotak from './pages/register/regKotak'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register-basic' element={<RegBasic />} />
        <Route path='/register-kotak' element={<RegKotak />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
