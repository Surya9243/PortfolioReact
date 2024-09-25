import React, { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'
import Contact from './Components/Contact'


const App = () => {

  const [project, setProject] = useState('Work')
  const [showNavLi,setShowNavLi] = useState('closed')
  const [closeNavLi,setCloseNavLi] = useState('opened')

  function showUl(){
    if(showNavLi== 'closed' || closeNavLi == 'opened'){setShowNavLi('opened') || setCloseNavLi('closed')}
  else{setShowNavLi('closed') || setCloseNavLi('opened')}
  }

  function getName(e) {
    const listName = e.target.innerText
    setProject(listName)
  }
  return (
    <div>
      <nav>
        <h1>Suryadeep</h1>
        <img className={showNavLi} onClick={showUl} src="https://img.icons8.com/glyph-neue/64/FFFFFF/menu--v1.png" />
        <img className={closeNavLi} onClick={showUl} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png" />
    
        <ul className={showNavLi} onClick={getName}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='pageNames'>
        {project == 'Home' && <Home/> }
        {project == 'About' && <About/> }
        {project == 'Services' && <Services/> }
        {project == 'Work' && <Work/> }
        {project == 'Contact' && <Contact/> }
      </div>
    </div>
  )
}

export default App
