import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ForecastMap from './pages/ForecastMap'
import TopSpots from './pages/TopSpots'
import History from './pages/History'
import Yozakura from './pages/Yozakura'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ForecastMap />} />
          <Route path="/spots" element={<TopSpots />} />
          <Route path="/history" element={<History />} />
          <Route path="/yozakura" element={<Yozakura />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
