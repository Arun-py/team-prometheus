import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGlobe, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="section-header"
        >
          <h2 className="section-title">
            <FaEnvelope className="section-icon" />
            Let's Collaborate
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            We're open to collaborations, research discussions, and innovation partnerships. 
            If you're interested in sustainable automation, IoT systems, or embedded AI, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          data-aos="fade-up"
          className="contact-info"
        >
            {/* First Row: Team Email and Leader Contact */}
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h4>Team Email</h4>
              <a href="mailto:prometheus140925@gmail.com">prometheus140925@gmail.com</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h4>Leader Contact</h4>
              <p>Arun T (Team Leader)</p>
              <a href="mailto:727723euee010@skcet.ac.in">727723euee010@skcet.ac.in</a>
            </div>

            {/* Second Row: Institution and Map */}
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h4>Institution</h4>
              <p>Sri Krishna College of Engineering and Technology (SKCET)</p>
              <p>Kuniamuthur, Coimbatore – 641008</p>
              <a href="http://www.skcet.ac.in" target="_blank" rel="noopener noreferrer">
                <FaGlobe /> www.skcet.ac.in
              </a>
            </div>

            <div className="info-card">
              <h4>Location Map</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7628644!2d76.9499905!3d10.9390304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bb22369d571%3A0x72cc0bed93b5b2b6!2sSri%20Krishna%20College%20of%20Engineering%20and%20Technology%20-%20SKCET!5e0!3m2!1sen!2sin!4v1729440000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SKCET Location"
                ></iframe>
              </div>
            </div>

            {/* Last Row: Social Links (spans full width) */}
            <div className="social-links social-card-full">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://linkedin.com/in/arun-thanigaimani-128156365" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <FaGithub />
                </a>
                <a href="mailto:prometheus140925@gmail.com" className="social-icon email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
