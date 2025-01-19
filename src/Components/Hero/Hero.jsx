/* eslint-disable react/jsx-no-undef */
import "./Hero.css";
import { useRef } from "react";
import MyImg from "../../../public/images/my-img.jpeg";

// import Lottie to animation images
import Lottie from "lottie-react";
import HeroAnimation from "../../animation/Animation - 1726777888206.json";

// Motion import
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <article className="left-section">
        <div className="parent-avater">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={MyImg}
            alt=""
            className="avater"
          />
          <span className="icon-verified"></span>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
          className="title"
        >
          Front End React Developer
        </motion.h2>
        <p className="sub-title">
          Hi, I&apos;m Rokaia Khalid <br/>
          As a dedicated front-end developer
          specializing in frameworks like React.js, I thrive in collaborative
          work environments where creativity and innovation are encouraged.
          Constantly evolving alongside emerging technologies, I am passionate
          about refining my skills to deliver excepational user experiences.
          With a keen eye for detail and a commitment to exceeding client
          expectations.
        </p>
        <div className="social flex">
          <a href="https://github.com/RokaiaKhalid">
            <div className="icon icon-github"></div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100089967781903&mibextid=ZbWKwL">
            <div className="icon icon-facebook-square"></div>
          </a>
          <a href="https://wa.me/+201090098257">
            <div className="icon icon-x"></div>
          </a>
          <a href="https://www.linkedin.com/in/rokaia-khalid-b3ab50288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app8">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </article>
      <div className="right-section animation">
        <Lottie
          className="animation"
          loop={false}
          lottieRef={lottieRef}
          // style={{ height: 350 }}
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={HeroAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
