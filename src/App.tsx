import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.tsx";
import Country from "./pages/Country.tsx";
import Loading from "./components/Loading.tsx";
import Error404 from "./pages/Error404.tsx";


export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<Country />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
