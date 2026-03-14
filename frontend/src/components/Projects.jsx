import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "AI-Driven Traffic Management System",
    subtitle: "Team Reboot Crew | Problem Statement: Ps-1 (Hardware)",
    description: "Smart traffic management platform analyzing real-time traffic data to optimize signals and detect congestion with a live dashboard.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Computer Vision", "YOLOv8s", "ESP32", "IoT Sensors"],
    github: "https://github.com/Antony136/Roadzen-view",
    live: "#",
    details: {
      problemStatement: "Enhance Urban Living Through AI-Driven Traffic Management System. Urban areas face severe traffic congestion leading to increased pollution, delayed emergency responses, and economic losses. Traditional timed signals cannot adapt to dynamic traffic flows.",
      features: [
        { title: "Real-Time Traffic Monitoring", desc: "AI cameras continuously monitor vehicle flow, speed, and lane density in real time using YOLOv8s bounding box detection." },
        { title: "AI Traffic Analysis", desc: "Reinforcement models analyze traffic patterns to detect congestion and abnormal vehicle behavior, feeding data back to a centralized server." },
        { title: "Dynamic Signal Control", desc: "Traffic signals automatically adjust green and red timings based on real-time traffic density calculated by the AI script." },
        { title: "Emergency Vehicle Priority", desc: "Accurately tracks emergency vehicles and creates a green corridor for faster response times for ambulances and fire trucks." },
        { title: "Accident & Pedestrian Safety", desc: "AI anticipates accidents and pedestrians to improve road safety and prevent traffic disruptions." },
        { title: "Smart Dashboard & Routing", desc: "Live admin dashboard displays traffic status, congestion, and optimized travel routes." }
      ],
      feasibility: [
        "Low-Cost & Accessible Hardware: Uses affordable components (ESP32, standard IP cameras, LED signals).",
        "Minimal Infrastructure: Does not require tearing up roads; can be retrofitted onto existing Cisco CCTV infrastructure.",
        "Scalable Architecture: Supports live traffic analysis via cloud servers or edge nodes."
      ],
      novelty: [
        "AI-Based Adaptive Control: Signals adjust purely on real-time vision density, not pre-programmed loops.",
        "Emergency Vehicle Tracking: Dedicated tracking to prioritize critical response vehicles.",
        "Predictive Recommendation: Uses historical and real-time data to forecast congestion."
      ],
      business: {
        model: "B2G (Business to Government) & PPP (Public-Private Partnership) targeting National Highway Authorities & Municipal Corporations.",
        valueProps: [
          "Wait Time Reduction: Dynamic signal control reduces junction waiting times by 30% to 40% (per MORTH data).",
          "Sustainability: Optimization lowers fuel consumption and CO2 emissions by over 20%.",
          "Data Harvesting: Generates a 5-6% yearly dataset increase for government research and infrastructure action."
        ],
        roi: "Estimated ROI of 6-12 months for municipalities upon achieving 20-30% model efficiency, given per-junction implementation costs (~Rs.25,000+)."
      }
    }
  },
  {
    title: "Campus Event Tracking System (CampusFlow)",
    subtitle: "Team Ignitron | Theme: Student Innovation",
    description: "A centralized platform where students can view ongoing events, register with QR codes, and get their on-duty (OD) approvals automatically.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "MERN Stack"],
    github: "https://github.com/Antony136/Eventide-portal",
    live: "#",
    details: {
      problemStatement: "Managing campus events, tracking student participation, and approving on-duty requests is traditionally slow and tedious. This project creates a centralized digital hub to digitize the entire workflow—from event discovery to final OD certificate generation.",
      features: [
        { title: "Centralized Discovery", desc: "A single digital hub for students to discover and register for campus fests, workshops, and seminars." },
        { title: "Digital Registration & QR Passes", desc: "Students register in the app and receive a generated QR code pass for quick, seamless entry validation." },
        { title: "Automated OD Requests", desc: "After QR validation, students are automatically added to the On-Duty (OD) approval list on the admin dashboard." },
        { title: "Student Profiles", desc: "Provides a single place to view past events, attendance records, and generated certificates." },
        { title: "Organizer & Admin Tools", desc: "Faculty can manage event CRUD operations, verify attendance via scanning, approve ODs, and view analytics." },
        { title: "Role-Based Access Control", desc: "Secure JWT-based authentication separating student, organizer, and administrator privileges to ensure data integrity." }
      ],
      feasibility: [
        "Technical: Built using established web tech (Next.js, PostgreSQL, Firebase) with integrated QR and PDF generation.",
        "Operational: Mirrors existing manual campus workflows digitally, ensuring easy adoption by coordinators.",
        "Economic & Sustainable: Low development costs leveraging open-source tools; promotes a paperless eco-friendly campus."
      ],
      novelty: [
        "Automated On-Duty Processing: Completely removes the need for paper-based permission slips.",
        "QR-Based Attendance Verification: Instant validation replacing manual roll calls.",
        "Centralized Analytics: Gives administrators a bird's-eye view of campus engagement."
      ],
      business: {
        model: "Institutional Integration (B2B) - deployed for college administrations to organize campus culture.",
        valueProps: [
          "Time Efficiency & Automation: Eliminates manual paperwork, saving vast administrative effort for faculty.",
          "Transparency: Ensures clear, indisputable tracking of attendance and OD approvals.",
          "Student Engagement: Simplified discovery encourages massive participation in extracurriculars."
        ],
        roi: "Creates a highly organized digital event culture while completely automating administrative overhead."
      }
    }
  },
  {
    title: "IoT-Blockchain Integrated Smart Supply Chain",
    subtitle: "Ensuring transparency, security, and efficiency in the supply chain of perishable goods.",
    description: "Built real-time perishable goods tracking using IoT sensors and Blockchain architecture for monitoring conditions and enforcing compliance.",
    tech: ["Node.js", "React.js", "Express", "MongoDB", "Blockchain (Basic)", "IoT Sensors (DHT22, GPS)"],
    github: "https://github.com/Antony136/iot-blockchain-supply-chain",
    live: "#",
    details: {
      problemStatement: "The supply chain for perishable goods suffers from a lack of transparency, security, and efficiency. Spoilage occurs when temperature or humidity breaches go unnoticed. This project introduces a tamper-proof system using IoT sensors and a foundational Blockchain architecture to track the entire journey.",
      features: [
        { title: "IoT Sensor Integration", desc: "Hardware integration of DHT22 (temperature/humidity), GPS, and accelerometers with ESP32 microcontrollers to continuously monitor transit conditions." },
        { title: "Automated Alert System", desc: "If sensors detect anomalous conditions (e.g., temperature breach), the backend (Node/Express) immediately triggers real-time alerts." },
        { title: "Blockchain Immutability (Basic)", desc: "Essential supply chain records are formatted as JSON and hashed to create a tamper-proof, time-stamped log of the entire journey." },
        { title: "Compliance Automation", desc: "Foundational smart contract logic concepts implemented to automatically verify if the goods arrived safely within predefined condition thresholds before authorizing final compliance." },
        { title: "Real-Time Dashboard", desc: "A React.js based dashboard that visualizes real-time sensor metrics and compliance status, giving full transparency to both buyers and sellers." },
        { title: "Historical Data Analytics", desc: "Analyzes past shipment data stored in MongoDB to identify transit bottlenecks and optimize future delivery routes." }
      ],
      feasibility: [
        "Data Storage: Uses a primary backend database (MongoDB) interfaced alongside basic Blockchain-hashing concepts for data integrity.",
        "Custom Scalable API: Node.js and Express handle the high-frequency MQTT/HTTP requests coming from the active IoT microcontrollers.",
        "Hardware: Utilizes accessible ESP32 microcontrollers and DHT22 sensors, providing an accurate, low-cost hardware simulation."
      ],
      novelty: [
        "Cryptographic Data Hashing: Securing conventional database records against tampering by unauthorized actors.",
        "Automated Quality Assurance: Evaluating perishable states without manual human intervention based on hard sensor thresholds.",
        "Hybrid Architecture: Combining legacy MERN robustness with foundational decentralization concepts."
      ],
      business: {
        model: "Logistics and Shipping Companies focused on perishable goods (Food, Medicine).",
        valueProps: [
          "Spoilage Prevention: Automated anomaly alerts allow drivers/logistics to intervene before total spoilage.",
          "Tamper-Proof Transparency: The continuous, hashed record prevents disputes between buyers and shippers regarding when/where the goods were damaged.",
          "Automated Compliance: Smart thresholds drastically reduce the time spent manually inspecting quality upon delivery."
        ]
      }
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Featured <span className="gradient-text">Projects</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>A collection of projects that demonstrate my technical expertise and creative problem-solving.</p>
      </div>

      <div className="grid grid-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}
          >
            <h3 style={{ fontSize: '1.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.slice(0, 4).map(t => (
                <span key={t} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--glass-border)', borderRadius: '20px' }}>{t}</span>
              ))}
              {project.tech.length > 4 && <span style={{ fontSize: '0.75rem', padding: '4px 10px', color: 'var(--text-secondary)' }}>+{project.tech.length - 4} more</span>}
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
              <button 
                onClick={() => setSelectedProject(project)}
                style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', padding: 0 }}
              >
                View Details <ArrowRight size={16} />
              </button>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}><Github size={20} /></a>
                )}
                {project.live && project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}><ExternalLink size={20} /></a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal overlaying the app */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      
    </section>
  );
};

export default Projects;
