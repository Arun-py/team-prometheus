import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { Link } from 'react-scroll';
import bgVideo from '../../images/bg_fireparticles.mp4';

const Hero = () => {
  useEffect(() => {
    // Fire cursor trail effect
    const createFireTrail = (e) => {
      const fire = document.createElement('div');
      fire.className = 'fire-cursor';
      fire.style.left = e.clientX + 'px';
      fire.style.top = e.clientY + 'px';
      document.body.appendChild(fire);

      setTimeout(() => {
        fire.remove();
      }, 800);
    };

    let throttle = false;
    const handleMouseMove = (e) => {
      if (!throttle) {
        createFireTrail(e);
        throttle = true;
        setTimeout(() => {
          throttle = false;
        }, 50);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            <span className="title-line-1">TEAM PROMETHEUS</span>
            <span className="title-line-2">Igniting Ideas into Intelligent Engineering</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-subtitle"
          >
            Innovating Intelligent Systems for a Smarter, Sustainable Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-description"
          >
            We are a student innovation team from Sri Krishna College of Engineering and Technology (SKCET), Coimbatore, 
            working at the intersection of Artificial Intelligence, Automation, and Renewable Energy. Our mission is to 
            design intelligent, safe, and efficient systems that address real-world engineering challenges and redefine 
            industry standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="hero-buttons"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary"
            >
              Explore Our Projects <FaArrowRight />
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-secondary"
            >
              Meet the Team <FaPlay />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
