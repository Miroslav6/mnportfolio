import React from 'react';

function Welcome() {
  return (
   
    <div className="container welcome-section">
    <div className="row">
      <div className="col-md-10">
      <h1 className="ml2">Hi, my name is <strong>Miroslav Nedev</strong>,
      Front End Developer
      and Tech Enthusiast.</h1>
      <p>Self-motivated software developer with <strong>over 8 years</strong> of professional experience in coding, launching and teaching others.</p>
      </div>
      <div className="col-md-2">
      {/* <nav id="nav-wrap" className="nav-wrap text-center">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav">
            <li className="current"><a className="smoothscroll" href="#welcome-section">Home</a></li>
            <li><a className="smoothscroll" href="#experience-section">Experience</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav> */}
      </div>
    </div>
  </div>
            
   
  )
}

export default Welcome;