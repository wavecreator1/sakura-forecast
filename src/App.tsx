import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ForecastMap from './pages/ForecastMap'
import TopSpots from './pages/TopSpots'
import History from './pages/History'
import NightViewing from './pages/NightViewing'
import { useFeatureFlag } from './hooks/useFeatureFlag'
import { YOZAKURA_GUIDE_DEFAULT } from './config/featureFlags'

function App() {
  const showYozakura = useFeatureFlag(YOZAKURA_GUIDE_DEFAULT, 'yozakura')

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ForecastMap />} />
          <Route path="/spots" element={<TopSpots />} />
          <Route path="/history" element={<History />} />
          {showYozakura && (
            <Route path="/night-viewing" element={<NightViewing />} />
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
