import React from 'react';
import Rotas from './routes/rotas';
import { Toaster } from "sonner";
import "./App.css";

function App() {

  return (
    <>
      <Toaster richColors position="top-right" />
      <Rotas />
    </>
  )
}

export default App
