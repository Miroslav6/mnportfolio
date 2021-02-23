import './App.css';
import AvatarImgSrc from './Files/Images/me.jpg';


function App() {
  return (
    <div class="container entry-content cv-page">
  <div class="cv-page-inner">

    <div class="cv-section cv-header">
      <div class="cv-header-avatar">
        <img src={AvatarImgSrc} alt="Avatar" />
      </div>
      <div class="cv-header-text">
        <h1 class="cv-header-name">Miroslav Nedev</h1>
        <h2 class="cv-header-subname">Lead Front End Developer</h2>
        <p class="cv-header-lead">
          Self-motivated software developer with over eight years of professional experience in coding, launching and
          teaching others.<br />
          
        </p>
      </div>
      <div class="cv-header-meta">
        <div class="cv-header-meta-right">
          <div class="cv-header-meta-row">
            
            <a href="mailto:miroslav.nedev1@gmail.com">miroslav.nedev1@gmail.com</a>
        </div>
          <div class="cv-header-meta-row">
            +359 883 378 679
          </div>
        </div>
      </div>
    </div>

    <div class="cv-section">
      <h3 class="cv-section-title">Experience</h3>
      <div class="cv-section-content">
        <div class="cv-timeline">

          <div class="cv-timeline-row">
            <div class="cv-timeline-side">
              <div class="cv-timeline-company">KUKUI</div>
              <div class="cv-timeline-date">6/2012 - till now</div>
              <a href="https://kukui.com">kukui.com</a>
            </div>
            <div class="cv-timeline-body">
              <h4 class="cv-timeline-position">Team Leader of Front-end Developers</h4>
              <p>Developed the new frontend for one of the KUKUI in the Automotive industry.</p>
              <ul>
                <li>Hiring and Education of the new employees, resolving of problems and leaded most of the decisions during the website developing.</li>
                <li>Helped recruit, onboard and mentor new team members.</li>
                <li>Manage and organise the work with new websites.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="cv-section">
      <h3 class="cv-section-title">Skills</h3>
      <div class="cv-section-content cv-section-content--indented">
        <ul class="cv-tech-tags tech-tags">
          <li><a  rel='nofollow' target='_blank'>CSS</a></li>
          <li><a  rel='nofollow' target='_blank'>HTML</a></li>
          <li><a  rel='nofollow' target='_blank'>Bootstrap</a></li>
          <li><a  rel='nofollow' target='_blank'>JavaScript</a></li>
          <li><a  rel='nofollow' target='_blank'>Angular</a></li>
          <li><a  rel='nofollow' target='_blank'>Adobe Photoshop</a></li>
          <li><a  rel='nofollow' target='_blank'>Tortuise SVN</a></li>
          <li><a  rel='nofollow' target='_blank'>Customer support</a></li>
          <li><a  rel='nofollow' target='_blank'>Project estimation</a></li>
          <li><a  rel='nofollow' target='_blank'>Tech recruitment</a></li>
          <li><a  rel='nofollow' target='_blank'>Client negotiations</a></li>
          <li><a  rel='nofollow' target='_blank'>Mentor & Leader</a></li>
        </ul>
      </div>
    </div>
    
    <div class="cv-section">
      <h3 class="cv-section-title">Education</h3>
      <div class="cv-section-content">
        <div class="cv-timeline">
          <div class="cv-timeline-row">
            <div class="cv-timeline-side">
              <div class="cv-timeline-company">Professional high school of electronics and electrical "M.V.Lomonosov" G.Oriahovica</div>
              <div class="cv-timeline-date">2004 - 2007</div>
              <a href="https://pglomonosov.org/">pglomonosov.org</a>
            </div>
            <div class="cv-timeline-body">
              <div class="cv-timeline-position">Еlectronic technique with profile Мicroprocessor technology</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cv-section">
            <div class="cv-section-content">
              <div class="cv-timeline">
                <div class="cv-timeline-row">
                  <div class="cv-timeline-side">
                    <div class="cv-timeline-company">Technical university of Gabrovo</div>
                    <div class="cv-timeline-date">2007 - 2011</div>
                    <a href="https://www.tugab.bg/index.php?lang=bg">www.tugab.bg</a>
                  </div>
                  <div class="cv-timeline-body">
                    <div class="cv-timeline-position">Bachelor degree - Computer systems and technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    <div class="cv-section">
                <div class="cv-section-content">
                  <div class="cv-timeline">
                    <div class="cv-timeline-row">
                      <div class="cv-timeline-side">
                        <div class="cv-timeline-company">Technical university of Gabrovo</div>
                        <div class="cv-timeline-date">2011 - 2014</div>
                        <a href="https://www.tugab.bg/index.php?lang=bg">www.tugab.bg</a>
                      </div>
                      <div class="cv-timeline-body">
                        <div class="cv-timeline-position">Master degree - Computer systems and technologies</div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    <div class="cv-section">
      <h3 class="cv-section-title">Other perks</h3>
      <div class="cv-section-content cv-section-content--indented">
        <ul>
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
    </div>

  </div>
</div>
  );
}

export default App;
