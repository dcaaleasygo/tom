import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './App.css'
import { Pages } from "./components/Pages"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Politicas } from "./components/PoliticasDePrivacidad"
import { Quienes } from "./components/QuienesSomos";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Pages />}
            />
             <Route
              path="/politica-de-privacidad"
              element={<Politicas />}
            />

            <Route
              path="/quienes-somos"
              element={<Quienes />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App
