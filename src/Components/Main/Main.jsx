import "./Main.css";
import { myImgsPros } from "./imgsPros";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const [catigory, setCatigory] = useState("all");
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const username = "RokaiaKhalid";

  useEffect(() => {
    let url = `https://api.github.com/users/${username}/repos`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data = data.map((pro, i) => ({ ...pro, src_img: myImgsPros[i] }));
        setRepos(data);
      })
      .catch((rej) => console.log(rej));
  }, [username]);

  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     try {
  //       const response = await fetch(`https://api.github.com/users/${username}/repos`);
  //       const reposWithLiveUrls = response.data.map((repo, i) => ({
  //         ...repo,
  //         src_img: myImgsPros[i]
  //       }));
  //       setRepos(reposWithLiveUrls);
  //       setFilteredRepos(reposWithLiveUrls);
  //     } catch (error) {
  //       Error('خطأ في جلب المستودعات', error);
  //     }
  //   };

  //   fetchRepos();
  // }, [username]);

  useEffect(() => {
    const applyFilter = () => {
      const filtered = repos.filter((repo) => repo.topics.includes(catigory));
      setFilteredRepos(filtered);
      console.log(filtered);
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
                  <img src={`./../../..${item.src_img}`} alt="" />
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
                      {/* <a href="" className='flex'>More<span className='icon-arrow-right' style={{alignSelf: "end"}}></span></a> */}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </div>
      
    </main>
  );
};

export default Main;
