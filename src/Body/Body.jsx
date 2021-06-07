import React from 'react';
import AvatarImgSrc from '../Files/Images/me.jpg';
import Rating2 from '../Files/Images/rating-2.png';
import Rating3 from '../Files/Images/rating-3.png';

class Body extends React.Component {
  render() {
    return (
        
      <div className="row cv-page-inner">

      <div className="col-sm-5 col-md-2 cv-header-avatar">
        <img src={AvatarImgSrc} alt="Avatar" />
      </div>
      <div className="col-sm-7 col-md-7 cv-header-text">
        <h1 className="cv-header-name">Miroslav Nedev</h1>
        <h2 className="cv-header-subname">Lead Front End Developer</h2>
        <p className="cv-header-lead">
          Self-motivated software developer with over eight years of professional experience in coding, launching and
        teaching others.<br />

        </p>
      </div>
      <div className="col-sm-12 col-md-3 text-center text-md-right">
        <div className="cv-header-meta">
          <a href="mailto:miroslav.nedev1@gmail.com">miroslav.nedev1@gmail.com</a>
          <br />
          <a href="tel:+359883378679">+359 883 378 679</a>
          <p> Veliko Tarnovo, Bulgaria</p>
        </div>
      </div>



      <h2 className="offset-sm-2 col-sm-10 cv-section-title">Professional Experience</h2>
      <div className="col-sm-2 text-right cv-timeline-details">
        <div className="cv-timeline-company">KUKUI</div>
        <div className="cv-timeline-date">6/2012 - 6/2021</div>
        <a href="https://kukui.com">kukui.com</a>
      </div>
      <div className="col-sm-10 cv-timeline-body">
        <h4 className="cv-timeline-position">Team Leader of Front-end Developers</h4>
        <p>Developed the new frontend for KUKUI, one of the top CRM and website providers in the US Automotive Industry</p>
        <ul>
          <li>Recruit, interview and hire website developers</li>
          <li>Onboard, train and mentor new website developers</li>
          <li>Lead and manage website team, ensuring quality standards</li>
          <li>Handle escalation of website problems and advise on solutions</li>
          <li>Oversee website development, including creation and review of HTML, JavaScript and CSS</li>
          <li>Manage projects ensuring development completed and delivered on time</li>

        </ul>
      </div>
      <div className="col-sm-2 text-right">
        <div className="cv-timeline-company">KUKUI</div>
        <div className="cv-timeline-date">6/2012 - 8/2015</div>
        <a href="https://kukui.com">kukui.com</a>
      </div>
      <div className="col-sm-10 cv-timeline-body">
        <h4 className="cv-timeline-position">Front-end Developer</h4>
        <ul>
          <li>Create website from PSD, converting it to HTML and CSS</li>
          <li>Responsive Design: Develop website ensuring adherence to responsive grid or design</li>
          <li>Javascript</li>
          <li>High Quality Websites</li>
        </ul>
      </div>

      <h3 className="offset-sm-2 col-sm-10 cv-section-title">Skills</h3>
      <div className="offset-sm-2 col-sm-10 cv-section-content cv-section-content--indented">
        <ul className="cv-tech-tags tech-tags">
          <li><a rel='nofollow' target='_blank'>CSS</a></li>
          <li><a rel='nofollow' target='_blank'>HTML</a></li>
          <li><a rel='nofollow' target='_blank'>Bootstrap</a></li>
          <li><a rel='nofollow' target='_blank'>JavaScript</a></li>
          <li><a rel='nofollow' target='_blank'>Angular</a></li>
          <li><a rel='nofollow' target='_blank'>React</a></li>
          <li><a rel='nofollow' target='_blank'>Adobe Photoshop</a></li>
          <li><a rel='nofollow' target='_blank'>Tortuise SVN</a></li>
          <li><a rel='nofollow' target='_blank'>Git</a></li>
          <li><a rel='nofollow' target='_blank'>NPM</a></li>
          <li><a rel='nofollow' target='_blank'>SalesForce</a></li>
          <li><a rel='nofollow' target='_blank'>DUDA</a></li>
          <li><a rel='nofollow' target='_blank'>Customer support</a></li>
          <li><a rel='nofollow' target='_blank'>Project estimation</a></li>
          <li><a rel='nofollow' target='_blank'>Tech recruitment</a></li>
          <li><a rel='nofollow' target='_blank'>Client negotiations</a></li>
          <li><a rel='nofollow' target='_blank'>Mentor & Leader</a></li>
        </ul>
      </div>



      <h3 className="offset-sm-2 col-sm-10 cv-section-title">Education</h3>

      <div className="col-sm-2 text-right cv-timeline-header">
        <div className="cv-timeline-company">Professional high school of electronics and electrical "M.V.Lomonosov" G.Oriahovica</div>
        <div className="cv-timeline-date">2004 - 2007</div>
        <a href="https://pglomonosov.org/">pglomonosov.org</a>
      </div>
      <div className="col-sm-10 cv-timeline-body">
        <div className="cv-timeline-position"><p>Еlectronic technique with profile Мicroprocessor technology</p></div>

      </div>





      <div className="col-sm-2 text-right">
        <div className="cv-timeline-company">Technical university of Gabrovo</div>
        <div className="cv-timeline-date">2007 - 2011</div>
        <a href="https://www.tugab.bg/index.php?lang=bg">www.tugab.bg</a>
      </div>
      <div className="col-sm-10 cv-timeline-body">
        <div className="cv-timeline-position">Bachelor degree - Computer systems and technologies</div>
      </div>


      <div className="col-sm-2 text-right">
        <div className="cv-timeline-company">Technical university of Gabrovo</div>
        <div className="cv-timeline-date">2011 - 2014</div>
        <a href="https://www.tugab.bg/index.php?lang=bg">www.tugab.bg</a>
      </div>
      <div className="col-sm-10 cv-timeline-body">
        <div className="cv-timeline-position">Master degree - Computer systems and technologies</div>
      </div>


      <h3 className="offset-sm-2 col-sm-10 cv-section-title">Other perks</h3>
      <div className="offset-sm-2 col-sm-10 cv-section-content">
        <ul>
          <li>In 2019 - Certified ScrumMaster (CSM)<br />
          Credential Identifier - 1131235
          </li>
          <li>In 2011 - Cisco | Networking Acdemy<br />
          Certificate of course Competition - CCNA Exploration: Network fundamentals
          </li>
          <li>In 2011 - Cisco | Networking Acdemy<br />
          Certificate of course Competition - CCNA Exploration: Routing Protocols and Concepts
        </li>

          <li>In 2012 - Cisco | Networking Acdemy<br />
          Certificate of course Competition - CCNA Exploration: Acceessing the WAN
        </li>

        </ul>
      </div>


      <h3 className="offset-sm-2 col-sm-10 cv-section-title">Languages</h3>
      <div className="offset-sm-2 col-sm-10 cv-section-content">
        <section>
          <div className="table-header">
            <div className="table-col-1"></div>
            <div className="table-col-1">Speaking</div>
            <div className="table-col-1">Writing</div>
          </div>
          <div className="table-row">
            <div className="table-col-1">English</div>
            <div className="table-col-1"><img src={Rating2} alt="Rating" /></div>
            <div className="table-col-1"><img src={Rating3} alt="Rating" /></div>
          </div>
        </section>
      </div>


      <h3 className="offset-sm-2 col-sm-10 cv-section-title">LinkedIn</h3>
      <div className="offset-sm-2 col-sm-10 cv-section-content ">
        <a href="https://www.linkedin.com/in/miroslav-nedev" target="blank">www.linkedin.com/in/miroslav-nedev</a>
      </div>


      <h3 className="offset-sm-2 col-sm-10 cv-section-title">Web CV</h3>
      <div className="offset-sm-2 col-sm-10 cv-section-content cv-section-content--indented">
        <a href="https://miroslav6.github.io/mnportfolio/" target="blank">miroslav6.github.io/mnportfolio</a>
      </div>


      <h3 className="offset-sm-2 col-sm-10 cv-section-title">Github</h3>
      <div className="offset-sm-2 col-sm-10 cv-section-content cv-section-content--indented">
        <a href="https://github.com/Miroslav6" target="blank">https://github.com/Miroslav6</a>
      </div>

    </div>
 
    );
  }
}

export default Body;