import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaPlay, FaExternalLinkAlt, FaChartLine, FaMicrochip, FaWifi, FaShieldAlt, FaFilePowerpoint } from 'react-icons/fa';
import gridSyncLogo from '../../images/gridsync_logo.jpg';
import project1Image from '../../images/project1_image.png';
import project2Image from '../../images/project2_images.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: '01 - GridSync',
      fullTitle: 'GridSync: Proactive Monitoring & Optimization of Microgrids',
      theme: 'Renewable & Sustainable Energy',
      psId: 'SIH25051',
      category: 'Hardware',
      logo: gridSyncLogo,
      video: 'https://www.youtube.com/watch?v=Cu67_BxlkpE',
      ppt: 'https://drive.google.com/file/d/1Im6EN7KSZG30ByE-zzjtNrqxWtYWkKj0/view?usp=sharing',
      overview: 'GridSync is an IoT-based microgrid management assistant that combines edge AI, predictive maintenance, and real-time performance analytics to enhance rural energy efficiency and reliability. The system uses ESP32-based IoT nodes and a Raspberry Pi 5 master controller to monitor solar, battery, AC, and DC subsystems efficiently — even in low-connectivity environments. Built with insights from MODERN CRITIQUES of existing systems and MODERNIZ principles for sustainable development.',
      features: [
        'Modular IoT nodes for solar, battery, AC, and DC management',
        'Raspberry Pi 5 "Grid Brain" with lightweight ML forecasting',
        'Offline-first data architecture with Flask + MongoDB backend',
        'Vernacular voice + SMS alerts for rural operators',
        'Simple, color-coded mobile app for intuitive monitoring',
        'Predictive maintenance for battery health and solar panel cleaning',
      ],
      tech: {
        hardware: 'ESP32, Raspberry Pi 5, DS18B20, BH1750, ACS712, Voltage Sensors, Solar Panels, Battery Units',
        software: 'Flask API, MongoDB, Python ML Scripts, Edge Inference, Wi-Fi Mesh Communication, Android/Web Dashboard',
      },
      math: {
        description: 'Village example: 400 homes, 2000 people',
        before: '1300 kWh/day',
        after: '1450 kWh/day',
        improvement: '11.3%',
      },
      impact: [
        'Reliable power supply in remote regions',
        'Reduced maintenance and operational downtime',
        'Extended asset life and energy optimization',
        'Affordable and accessible smart microgrid management',
        'Promotes sustainable, diesel-free energy systems for rural India',
      ],
      image: project1Image,
      color: '#ff6b00',
    },
    {
      id: 2,
      title: '02 - ACTSYS',
      fullTitle: 'Automated High-Current Short-Circuit Test System for MCBs',
      theme: 'Smart Automation',
      psId: 'SIH25054',
      category: 'Hardware',
      logo: gridSyncLogo,
      ppt: 'https://drive.google.com/file/d/1b6XGtNGAMoaLhbnOvKRaY6p-X_S048SB/view?usp=sharing',
      overview: 'An advanced, fully automated test platform that performs high-current short-circuit testing for MCBs in compliance with IEC 60898-1:2015. The system integrates robotic handling, hybrid impedance control, and AI-based fault detection to ensure high accuracy, safety, and repeatability for industrial testing. Developed using MODERN CRITIQUES DEMO approach and MODERNIZ standards for industrial automation.',
      features: [
        'Active Synthetic Impedance Module (ASIM): precisely controls R + jX dynamically',
        'Closed-loop Feedback: ensures accurate current and power factor control',
        'Robotic MCB Mounting: automated handling and torque testing',
        'Digital Twin Simulation: safety validation before test execution',
        'AI Fault Detection: real-time waveform and arc anomaly identification',
        'Multi-layer Safety Architecture: emergency dump and interlocks for operator protection',
      ],
      tech: {
        hardware: 'High-current transformer (up to 10 kA), DSP-controlled ASIM bridge (SiC/IGBT-based), PLC/Industrial PC with interlock logic, Motorized R–L banks and contactors, DAQ with Rogowski & Hall sensors, Robotic test fixture with torque control',
        software: 'PLC Firmware (IEC 61131-3 Ladder + Structured Text), DSP/FPGA closed-loop controller, HMI/SCADA via LabVIEW / Ignition / WinCC, Data logging in Python with AI anomaly analysis, Automated IEC report generator',
      },
      workflow: [
        'Robotic arm mounts MCB and checks contact torque',
        'ASIM and R–L bank set target impedance',
        'Digital twin validates current safety margins',
        'High-current fault test executed automatically',
        'Data logged, AI module analyzes waveform and generates report',
      ],
      impact: [
        '50% faster testing cycles compared to manual setups',
        'Zero manual tuning and high repeatability',
        'Safety-first design with automated interlocks',
        'Enables cost-efficient, IEC-compliant testing for Indian MCB manufacturers',
      ],
      image: project2Image,
      color: '#ffa500',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="section-header"
        >
          <h2 className="section-title">
            <FaRocket className="section-icon" />
            Our Innovations at Smart India Hackathon 2025
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            We are proud participants in SIH 2025 (Hardware Edition) with two innovative solutions that blend 
            intelligent control, data analytics, and hardware automation to address real-world challenges.
          </p>
        </motion.div>

        <div className="project-tabs">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`tab-button ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
              style={{ 
                '--tab-color': project.color,
                opacity: 1,
                visibility: 'visible'
              }}
            >
              <span className="tab-title">{project.title}</span>
            </button>
          ))}
        </div>

        <div className="project-content">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-details ${activeProject === index ? 'active' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: activeProject === index ? 1 : 0, y: activeProject === index ? 0 : 30 }}
                transition={{ duration: 0.6 }}
                className="project-header"
              >
                <div className="project-title-section">
                  <h3 className="project-title" style={{ color: project.color }}>{project.fullTitle}</h3>
                  <div className="project-badges">
                    <span className="badge badge-theme">{project.theme}</span>
                    <span className="badge badge-ps">PS ID: {project.psId}</span>
                    <span className="badge badge-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-links">
                  {project.video && (
                    <a href={project.video} className="demo-link" target="_blank" rel="noopener noreferrer">
                      <FaPlay /> Watch Demo
                    </a>
                  )}
                  {project.ppt && (
                    <a href={project.ppt} className="demo-link ppt-link" target="_blank" rel="noopener noreferrer">
                      <FaFilePowerpoint /> View PPT
                    </a>
                  )}
                </div>
              </motion.div>

              <div className="project-body">
                <motion.div
                  data-aos="fade-right"
                  className="project-main"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${project.color}22, transparent)` }}></div>
                  </div>

                  <div className="project-overview">
                    <h4><FaBolt /> Overview</h4>
                    <p>{project.overview}</p>
                  </div>

                  <div className="project-features">
                    <h4><FaMicrochip /> Core Features</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                          <span className="feature-bullet" style={{ background: project.color }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  data-aos="fade-left"
                  className="project-sidebar"
                >
                  <div className="tech-stack">
                    <h4><FaWifi /> Technical Stack</h4>
                    <div className="tech-section">
                      <h5>Hardware</h5>
                      <p>{project.tech.hardware}</p>
                    </div>
                    <div className="tech-section">
                      <h5>Software</h5>
                      <p>{project.tech.software}</p>
                    </div>
                  </div>

                  {project.math && (
                    <div className="math-proof">
                      <h4><FaChartLine /> Mathematical Proof</h4>
                      <p className="math-desc">{project.math.description}</p>
                      <div className="math-stats">
                        <div className="stat">
                          <span className="stat-label">Without GridSync</span>
                          <span className="stat-value">{project.math.before}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">With GridSync</span>
                          <span className="stat-value" style={{ color: project.color }}>{project.math.after}</span>
                        </div>
                        <div className="stat highlight-stat">
                          <span className="stat-label">Efficiency Improvement</span>
                          <span className="stat-value" style={{ color: project.color }}>{project.math.improvement}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.workflow && (
                    <div className="workflow">
                      <h4><FaShieldAlt /> Workflow</h4>
                      <ol>
                        {project.workflow.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <div className="impact">
                    <h4>Impact & Benefits</h4>
                    <ul>
                      {project.impact.map((item, idx) => (
                        <li key={idx}>
                          <span className="impact-bullet" style={{ borderColor: project.color }}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
