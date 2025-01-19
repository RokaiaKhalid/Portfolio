import { useState , useEffect} from 'react'
import './Header.css'
const Header = () => {
  // change modal page (colors)
  const [showModal, setShowModal] = useState(false);
  const [thame, setThame] = useState(localStorage.thame ?? "dark");
  useEffect(() => {
    document.body.classList.add(thame); 
    if (thame == "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.remove("light");
    }
    
  }, [thame])
  return (
      <header className='flex'>
        <button className='menu icon-menu' onClick={() => {
          setShowModal(true)
        }} />
        <div />
        <nav>
          <ul className='flex'>
            <li className="item-1"><a href="#about">About</a></li>
            <li className="item-2"><a href="#skills">Skills</a></li>
            <li className="item-3"><a href="#projects">Projects</a></li>
            <li className="item-4"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className='flex' onClick={() => {
          // Add current modal to localStorage
          localStorage.setItem("thame", thame == "light" ? "dark" : "light");

          // change thame
          setThame(localStorage.thame)
          
        }}
        style={thame == "light" ?{color: "rgb(240 200 78)", boxShadow: "0 0 8px 5px #ddd inset", border: "none"} : {}}
        >
          <span className={thame == "dark" ? "icon-moon-o" : "icon-sun"} ></span>
        </button>

        {showModal && (<div className="fixed">
          <ul className="mudal">
              <li><button className="icon-cross" onClick={() => {
                setShowModal(false)
              }}/></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </div>)}
      </header>
  )
}

export default Header
