import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  IPadPage,
  IPhonePage,
  MacPage,
  ProductDetailPage,
  Navbar,
} from './components.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100vh-44px)] w-full max-w-[1440px] flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/iphone" element={<IPhonePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/ipad" element={<IPadPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
