import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Country from "./pages/Country.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
