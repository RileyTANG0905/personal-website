import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App.jsx'
import HostingPage from './pages/HostingPage.jsx'
import DramaPage from './pages/DramaPage.jsx'
import './styles/global.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/drama" element={<DramaPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
