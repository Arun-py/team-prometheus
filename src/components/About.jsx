import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaUsers, FaLightbulb, FaGithub, FaTwitter } from 'react-icons/fa';
import arunProfile from '../../images/arun_profile.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Arun T',
      role: 'Team Leader & Hardware Engineer',
      department: 'B.E. EEE',
      year: 'III Year',
      email: '727723euee010@skcet.ac.in',
      linkedin: 'https://linkedin.com/in/arun-thanigaimani-128156365',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      image: arunProfile,
    },
    {
      name: 'Kushadaa Ajath TV',
      role: 'ML & Embedded Systems Developer',
      department: 'B.E. EEE',
      year: 'III Year',
      email: '727723euee063@skcet.ac.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Lokeshvaran U',
      role: 'Embedded Systems Developer',
      department: 'B.E. EEE',
      year: 'III Year',
      email: '727723euee066@skcet.ac.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Madhavan P',
      role: 'MATLAB Simulation & Backend Engineer',
      department: 'B.E. EEE',
      year: 'III Year',
      email: '727723euee067@skcet.ac.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Renukadevi K R',
      role: 'App & Web Developer',
      department: 'B.Tech IT',
      year: 'III Year',
      email: '727724euit512@skcet.ac.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Sandheesh S',
      role: 'Backend & Software Developer',
      department: 'B.Tech IT',
      year: 'III Year',
      email: '727723euit201@skcet.ac.in',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  ];

  const mentor = {
    name: 'Ms. Mahalakshmi G',
    role: 'Mentor',
    department: 'Assistant Professor, EEE',
    year: 'Faculty',
    email: 'mahalakshmig@skcet.ac.in',
    isMentor: true,
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="section-header"
        >
          <h2 className="section-title">
            <FaUsers className="section-icon" />
            Who We Are
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div
          data-aos="fade-up"
          data-aos-delay="200"
          className="about-content"
        >
          <p className="about-description">
            Team Prometheus is a six-member, third-year student team mentored by <strong>Ms. Mahalakshmi G</strong> from <strong>Sri Krishna College of Engineering and Technology</strong>, 
            representing the departments of Electrical and Electronics Engineering (EEE) and Information Technology (IT). 
            We specialize in developing intelligent hardware, AI-driven automation, and sustainable IoT systems that blend 
            embedded intelligence with real-world practicality.
          </p>
          <p className="about-description">
            Our name — <strong>Prometheus</strong> — stands for bringing the <span className="highlight">fire of innovation</span> into engineering.
          </p>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="team-card"
            >
              <div className="card-inner">
                <div className="card-front">
                  {member.image ? (
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                  ) : (
                    <div className="member-avatar">
                      <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  )}
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="member-details">
                      <span className="detail-badge">{member.department}</span>
                      <span className="detail-badge">{member.year}</span>
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="contact-info">
                    <a href={`mailto:${member.email}`} className="contact-link">
                      <FaEnvelope /> Email
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                      <FaLinkedin /> LinkedIn
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                      <FaGithub /> GitHub
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="contact-link">
                      <FaTwitter /> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentor Card - Centered Below Team */}
        <div className="mentor-section">
          <motion.div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="team-card mentor-card"
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="member-avatar">
                  <span>{mentor.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{mentor.name}</h3>
                  <p className="member-role">{mentor.role}</p>
                  <div className="member-details">
                    <span className="detail-badge">{mentor.department}</span>
                    <span className="detail-badge">{mentor.year}</span>
                  </div>
                </div>
              </div>
              <div className="card-back">
                <div className="mentor-contact">
                  <a href={`mailto:${mentor.email}`} className="mentor-email-link">
                    <FaEnvelope className="mentor-email-icon" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
