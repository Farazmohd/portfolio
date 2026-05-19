import React from 'react';

const ResumeTemplate = ({ innerRef }) => {
  const styles = {
    container: {
      position: 'absolute',
      left: '-9999px',
      top: 0,
    },
    page: {
      width: '210mm',
      padding: '15mm 20mm',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.4',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    name: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#003399',
      marginBottom: '5px',
      textTransform: 'uppercase',
    },
    contact: {
      fontSize: '11px',
      color: '#000000',
      marginBottom: '15px',
    },
    sectionHeader: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#003399',
      borderBottom: '1.5px solid #003399',
      paddingBottom: '4px',
      marginTop: '15px',
      marginBottom: '10px',
      textTransform: 'uppercase',
    },
    subHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#000000',
      marginTop: '10px',
      marginBottom: '4px',
    },
    text: {
      fontSize: '11.5px',
      color: '#000000',
      textAlign: 'justify',
    },
    listContainer: {
      marginTop: '5px',
      marginBottom: '8px',
    },
    listItem: {
      display: 'flex',
      fontSize: '11.5px',
      color: '#000000',
      marginBottom: '4px',
    },
    bullet: {
      width: '15px',
      minWidth: '15px',
      textAlign: 'left',
      paddingLeft: '5px',
    },
    projectTitle: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#000000',
      marginTop: '10px',
      marginBottom: '4px',
    }
  };

  const ListItem = ({ children }) => (
    <div style={styles.listItem}>
      <span style={styles.bullet}>•</span>
      <span style={{ flex: 1 }}>{children}</span>
    </div>
  );

  return (
    <div style={styles.container}>
      <div ref={innerRef} style={styles.page}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.name}>MOHAMMED FARAZ</div>
          <p style={styles.contact}>
            Mysore, Karnataka, India | 9886550624 | mohdfaraz9886@gmail.com | linkedin.com/in/mohammed-faraz-716380269
          </p>
        </div>

        {/* Professional Summary */}
        <section>
          <div style={styles.sectionHeader}>PROFESSIONAL SUMMARY</div>
          <p style={styles.text}>
            Software Engineer with experience in React Native, Node.js, MS SQL Server, and AI/Deep Learning. Skilled in 
            building scalable web and mobile applications, REST APIs, CRM systems, and security auditing platforms.
          </p>
        </section>

        {/* Technical Skills */}
        <section>
          <div style={styles.sectionHeader}>TECHNICAL SKILLS</div>
          <div style={styles.text}>
            <div><strong>Languages:</strong> Java, Python, JavaScript, SQL</div>
            <div><strong>Frontend:</strong> React.js, React Native, HTML, CSS, Streamlit</div>
            <div><strong>Backend:</strong> Node.js, Express.js, Flask</div>
            <div><strong>Database:</strong> Microsoft SQL Server (MSSQL)</div>
            <div><strong>AI/ML:</strong> TensorFlow, Keras, CNN, LSTM</div>
            <div><strong>Tools:</strong> Git, Postman, VS Code</div>
            <div><strong>Concepts:</strong> REST APIs, CRUD, RBAC, SAST, Agile, Deep Learning</div>
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <div style={styles.sectionHeader}>PROFESSIONAL EXPERIENCE</div>
          
          <div style={styles.subHeader}>
            <span>Junior Software Engineer | Navabharath Technologies</span>
            <span>Nov 2025 – May 2026</span>
          </div>
          <div style={styles.listContainer}>
            <ListItem>Developed a multi-application e-commerce platform integrating retailer, vendor, warehouse, and delivery modules.</ListItem>
            <ListItem>Built React Native mobile applications and Node.js backend services.</ListItem>
            <ListItem>Designed REST APIs for order processing and user management.</ListItem>
            <ListItem>Optimized MS SQL queries for performance.</ListItem>
          </div>

          <div style={styles.subHeader}>
            <span>Android Developer Intern | Idionix Solutions</span>
            <span>Jun 2022 – Jul 2022</span>
          </div>
          <div style={styles.listContainer}>
            <ListItem>Developed an e-commerce Android application using Java.</ListItem>
            <ListItem>Implemented UI, navigation, and core features.</ListItem>
          </div>
        </section>

        {/* Key Projects */}
        <section>
          <div style={styles.sectionHeader}>KEY PROJECTS</div>
          
          <div style={styles.projectTitle}>QuantumGuard – Post-Quantum Cryptography Security Auditing Platform</div>
          <div style={styles.listContainer}>
            <ListItem>Built a security auditing platform to detect quantum-vulnerable cryptographic algorithms (RSA, MD5, ECC) and recommend NIST-approved PQC alternatives.</ListItem>
            <ListItem>Implemented client-side static analysis, RBAC dashboards, vulnerability scoring, and automated HTML/PDF compliance report generation.</ListItem>
            <ListItem><strong>Technologies:</strong> React.js, Vite, Node.js, Express.js, MSSQL, CSS3.</ListItem>
          </div>

          <div style={styles.projectTitle}>Signs of the Palace – Real-Time Video Classifier</div>
          <div style={styles.listContainer}>
            <ListItem>Engineered a deep learning pipeline using CNN for spatial feature extraction and LSTM for temporal sequence analysis.</ListItem>
            <ListItem>Built a Streamlit web application with Flask backend for real-time video predictions.</ListItem>
            <ListItem><strong>Technologies:</strong> Python, TensorFlow, Keras, CNN, LSTM, Streamlit, Flask.</ListItem>
          </div>

          <div style={styles.projectTitle}>Multi-Application E-Commerce Platform</div>
          <div style={styles.listContainer}>
            <ListItem>Developed retailer, vendor, warehouse, and delivery applications.</ListItem>
            <ListItem>Implemented end-to-end order lifecycle workflow.</ListItem>
            <ListItem><strong>Technologies:</strong> React Native, Node.js, Express.js, MS SQL Server.</ListItem>
          </div>

          <div style={styles.projectTitle}>Lead Management CRM System</div>
          <div style={styles.listContainer}>
            <ListItem>Managed 1000+ customer interactions per month.</ListItem>
            <ListItem>Implemented lifecycle tracking and onboarding workflows.</ListItem>
            <ListItem><strong>Technologies:</strong> Node.js, Express.js, MS SQL Server.</ListItem>
          </div>
        </section>

        {/* Education */}
        <section>
          <div style={styles.sectionHeader}>EDUCATION</div>
          <div style={styles.subHeader}>
            <span>B.E. in Computer Science | Visvesvaraya Technological University</span>
            <span>2019 – 2023</span>
          </div>
        </section>

        {/* Certifications */}
        <section style={{ pageBreakBefore: 'always', marginTop: '100px' }}>
          <div style={styles.sectionHeader}>CERTIFICATIONS</div>
          <div style={styles.listContainer}>
            <ListItem>Java Full Stack – Q-Spiders Mysore</ListItem>
            <ListItem>Data Analytics – NUCOT Bangalore</ListItem>
          </div>
        </section>

        {/* Languages */}
        <section>
          <div style={styles.sectionHeader}>LANGUAGES</div>
          <p style={{ ...styles.text, marginTop: '5px' }}>Kannada, Hindi, Urdu, English</p>
        </section>
      </div>
    </div>
  );
};

export default ResumeTemplate;
