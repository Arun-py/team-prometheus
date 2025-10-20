import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';

const Research = () => {
  const references = [
    {
      title: 'High-Gain Quasi-Mutually Coupled Active Impedance Source Converter',
      source: 'ResearchGate',
      url: 'https://www.researchgate.net/',
    },
    {
      title: 'Microgrids Control Strategies & Real-Time Monitoring',
      source: 'MDPI Energies Journal',
      url: 'https://www.mdpi.com/journal/energies',
    },
    {
      title: 'Defining Short-Circuit Values for Circuit Breakers',
      source: 'ABB',
      url: 'https://www.abb.com/',
    },
    {
      title: 'MCB Testing and Auto Riveting Machine',
      source: 'Screlektroniks',
      url: 'https://www.screlektroniks.com/',
    },
    {
      title: 'Quality Assurance in MCB Manufacturing',
      source: 'Viox',
      url: 'https://www.viox.com/',
    },
    {
      title: 'How AI and Automation Are Speeding Up Discovery',
      source: 'Berkeley Lab, 2025',
      url: 'https://www.lbl.gov/',
    },
  ];

  return (
    <section className="research" id="research">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="section-header"
        >
          <h2 className="section-title">
            <FaBook className="section-icon" />
            Research & References
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technical resources and citations that support our innovations
          </p>
        </motion.div>

        <div className="references-grid">
          {references.map((ref, index) => (
            <motion.a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="reference-card"
            >
              <div className="reference-content">
                <h4>{ref.title}</h4>
                <p className="reference-source">{ref.source}</p>
              </div>
              <FaExternalLinkAlt className="reference-icon" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
