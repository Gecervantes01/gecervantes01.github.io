import { useEffect, useRef } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Splitting from 'splitting'
import './styles/App.css'
import pfp from './assets/profile_pic2.png'

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
      <Navbar/>
        <main>
          <img src={pfp} id='profile-pic'/> 
          <div id='right-side'>        
            <h1 ref={textRef} data-splitting>Giovan Cervantes</h1>
            <p>Fullstack Developer</p>
          </div>
        </main>
      <Footer/>
    </>
  )
}

export default App
