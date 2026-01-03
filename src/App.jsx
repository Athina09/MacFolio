import React from 'react'
import Navbar from '#components/Navbar'

const App = () => {
  return (
    <main>
      <Navbar />
      <section id="welcome">
        <h1 className="text-4xl font-georama font-bold">Welcome to my MacFolio</h1>
        <p className="text-lg mt-2 font-roboto">Click on the dock icons to explore</p>
      </section>
    </main>
  )
}

export default App
