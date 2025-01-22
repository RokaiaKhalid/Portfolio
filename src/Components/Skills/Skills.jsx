import "./Skills.css"
const Skills = () => {
  return (
    <section className="skills flex">
      <h1 className="heading">My Skills</h1>
      <div className="container-skills flex">
        <div className="skill">
          <span className="icon-react"></span>
          <p>React js</p>
        </div>
        <div className="skill">
          <span className="icon-tailwindcss"></span>
          <p>Tailwind css</p>
        </div>
        <div className="skill">
          <span className="icon-sass"></span>
          <p>SASS</p>
        </div>
        <div className="skill">
          <span className="icon-javascript"></span>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <span className="icon-css31"></span>
          <p>CSS3</p>
        </div>
        <div className="skill">
          <span className="icon-html5" style={{color: "#e34c26"}}></span>
          <p>HTML5</p>
        </div>
        <div className="skill">
          <span className="icon-terminal"></span>
          <p>Command Line</p>
        </div>
        <div className="skill">
          <span className="icon-github"></span>
          <p>Github</p>
        </div>
        <div className="skill">
          <span className="icon-csharp"></span>
          <p>C#</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
