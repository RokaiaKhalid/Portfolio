import "./Main.css";
// import { myImgsPros } from "./imgsPros";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [catigory, setCatigory] = useState("all");
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    fetch('./public/imgsPros.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((repo) => {
        return repo.json()
      })
     .then((data) => {
        setRepos(data);
      })
      .catch((rej) => console.log(rej));
  }, []);


  useEffect(() => {
    const applyFilter = () => {
      const filtered = repos.filter((repo) => repo.skills.includes(catigory));
      setFilteredRepos(filtered);
    };

    applyFilter();
  }, [catigory, repos]);
  const myProjects = catigory != "all" ? filteredRepos : repos;
  return (
    <main className="flex" id="projects">
      <h1 className="heading">My Projcets</h1>
      <div className="sections flex">
        <section className="left-section flex">
          <button
            onClick={() => setCatigory("all")}
            className={catigory == "all" ? "active" : null}
          >
            All Projects
          </button>
          <button
            onClick={() => setCatigory("css3")}
            className={catigory == "css3" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => setCatigory("javascript")}
            className={catigory == "javascript" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => setCatigory("tailwindcss")}
            className={catigory == "tailwindcss" ? "active" : null}
          >
            Tailwindcss
          </button>
          <button
            onClick={() => setCatigory("reactjs")}
            className={catigory == "reactjs" ? "active" : null}
          >
            React
          </button>
        </section>
        <section className="right-section flex">
          <AnimatePresence>
            {myProjects.map((item, i) => {
              return (
                <motion.article
                  layout
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 8 ,stiffness: 50}}
                  key={i}
                  className="card"
                  style={{ width: "266px" }}
                >
                  <img src={`.${item.src_img}`} alt="" />
                  <div className="box">
                    <h1 className="title">{item.name}</h1>
                    <p className="sub-title">{item.description}</p>
                    <div className="flex links">
                      <a href={item.homepage} style={{ padding: "10px" }}>
                        <span className="icon-link"></span>
                      </a>
                      <a href={item.html_url}>
                        <span className="icon-github"></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
          <div style={{width: '100%'}}></div>
          <a href="https://github.com/RokaiaKhalid?tab=repositories" target="_blank" className='flex'>More<span className='icon-arrow-right' style={{alignSelf: "end"}}></span></a>

        </section>
      </div>
      
    </main>
  );
};

export default Main;
