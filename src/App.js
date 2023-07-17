import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import './Custom.scss'
import { createContext, useState } from 'react'
import Header from './components/Header'

export const ThemeContext = createContext('null')

function App() {
  // const [theme, setTheme] = useState('dark')

  // const toggleTheme = () => {
  //   setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  // }

  return (
    <div>
      <Router>
        <Header />
        {/* 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer /> */}
      </Router>
    </div>
  )
}
export default App
