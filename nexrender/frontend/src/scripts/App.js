import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Preloader from './pages/Preloader'
import CreateVideo from "./pages/CreateVideo";
import Download from "./pages/Download";
import NotFound from "./pages/NotFound";

import './App.css'

export default function App() {
  return (
    <div className={"appContainer lightBg"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Preloader/>} />
          <Route path="/create" element={<CreateVideo />} />
          <Route path="/download" element={<Download />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}