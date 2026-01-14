import React from 'react'
import { 
  Navbar, 
  Welcome, 
  Dock, 
  TerminalWindow,
  SafariWindow,
  FinderWindow,
  PhotosWindow,
  ContactWindow,
  ResumeWindow
} from './components'

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      
      {/* Windows */}
      <TerminalWindow />
      <SafariWindow />
      <FinderWindow />
      <PhotosWindow />
      <ContactWindow />
      <ResumeWindow />
      
      <Dock />
    </main>
  )
}

export default App
