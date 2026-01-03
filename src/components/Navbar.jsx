import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" className="w-5" />
        <ul>
          <p>Finder</p>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Window</p>
          <p>Help</p>
        </ul>
      </div>
      <div>
        <img src="/icons/wifi.svg" alt="wifi" className="icon w-5" />
        <img src="/icons/search.svg" alt="search" className="icon w-5" />
        <time>{new Date().toLocaleString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit'
        })}</time>
      </div>
    </nav>
  )
}

export default Navbar
