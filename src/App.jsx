import { useEffect, useRef } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Project from './components/Project'
import Splitting from 'splitting'
import './styles/App.css'
import moaca from './assets/moaca.png'
import rockhound from './assets/rockhound.png'
import resume from './assets/resume.pdf'
import {Stack, IconButton} from '@mui/material';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FileDownload } from '@mui/icons-material'

function App() {
  const textRef = useRef(null)
  useEffect(() => {
        if (textRef.current) {
          let letters = Splitting({ target: textRef.current, by: 'chars' });
          for(const char of letters) {
            console.log(char)
          }
        }
  }, []);

  return (
    <>
      <Nav/>
        <section id='hero-section'>
          <h1 ref={textRef} data-splitting>Giovan Cervantes</h1>
          <p>Fullstack Developer</p>
          <div>
            <IconButton 
              href='https://www.linkedin.com/in/gecervantes/'
              id='linkedin-btn'
              target="_blank"
            >
              <LinkedInIcon fontSize='medium'/>
            </IconButton>
            <IconButton 
              href='https://github.com/Gecervantes01'
              id='github-btn'
              target="_blank"
            >
              <GitHubIcon fontSize='medium'/>
            </IconButton>
            <IconButton id='arrow-btn'
              href="#about"
            >
              <ArrowCircleDownOutlinedIcon id='arrow-icon'/>
            </IconButton>
          </div>
        </section>
        <main>
          <div id='about'>
            <h2>A little about me...</h2>
            <div id='about-content'>
              <div>
                <p>Hello, my name's Giovan and I specialize in fullstack development. I'm a recent graduate having earned a BAS in Software Development and would love to provide a meaningful impact to your team! Aside from coding, I enjoy creating art using a variety of medias as well as hiking, and reading. </p>
                <h4>Some skills</h4>
                <section id='skills'>
                  <small>HTML</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                  <small>React</small>
                  <small>Java</small>
                  <small>Node.js</small>
                </section>
              </div>   
            </div>
          </div>
          <div id="projects">
            <h2>Projects I've worked on...</h2>
            <div id='project-container'>
              <Project
                projectImg={moaca}
                projectTitle={'Anthropology Inventory'}
                projectDesc={'An inventory management system designed to keep track of anthropological artifacts for Green River College.'}
                techStack={['React', 'Node.js', 'MongoDB']}
              />
              <Project
                projectImg={rockhound}
                projectTitle={'Rockhound Mobile App'}
                projectDesc={'Custom convolutional neural network model, aimed at providing reliable mineral identification.'}
                techStack={['Python', 'Jupyter Notebook', 'TensorFlow', 'Numpy', 'Scikit-learn', 'Seaborn', 'matplotlib']}
              />
            </div>
          </div>
          <div id='resume'>
            <h2>My resume</h2>
            <ul>
              <li>
                <iframe
                 id='resume-preview'
                 src={resume}
                 allow='fullscreen'
                 />
                <IconButton id='download-resume-btn'>
                  <FileDownload/>
                </IconButton>
              </li>
            </ul>
          </div>
        </main>
      <Footer/>
    </>
  )
}

export default App
