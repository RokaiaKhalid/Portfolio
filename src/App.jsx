import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Main from './Components/Main/Main'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
function App() {
  
  // show & hide up button
  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll0Top(true);
      } else {
        setShowScroll0Top(false);
      }
    })

  })

  const [showScroll0Top, setShowScroll0Top] = useState(false);
  return (
    <div className='container'>
      <Header />
      <Hero />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{opacity: showScroll0Top ? 1 : 0, transition: "1s"}} href='#up' className='scrollTop icon-keyboard_arrow_up'></a>
    </div>
  )
}

export default App
