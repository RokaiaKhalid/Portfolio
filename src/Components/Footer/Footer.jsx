import './Footer.css'
const Footer = () => {
  let date = new Date();
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>
      <p> &copy; {date.getFullYear()} Rokaia Khalid, All rights reserved</p>
    </footer>
  )
}

export default Footer
