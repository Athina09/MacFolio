import React from 'react'
import { Navbar, Welcome, Dock, TerminalWindow, SafariWindow } from './components';

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <TerminalWindow />
      <SafariWindow />
      <Dock />
    </main>
  )
}

export default App
