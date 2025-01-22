import './Footer.css'
const Footer = () => {
  let date = new Date();
  return (
    <footer className='flex'>
      <ul className='flex'>
      <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="social flex">
          <a href="https://github.com/RokaiaKhalid">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089967781903&mibextid=ZbWKwL">
            <div className="icon icon-facebook-square"></div>
          </a>
          <a href="https://wa.me/+201090098257">
            <div className="icon icon-whatsapp"></div>
          </a>
          <a href="https://www.linkedin.com/in/rokaia-khalid">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      <p> &copy; {date.getFullYear()} Rokaia Khalid, All rights reserved</p>
    </footer>
  )
}

export default Footer
