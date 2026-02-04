import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out through any of these platforms:</p>
      
      <div className="social-links">
        <a href="mailto:your.email@example.com" className="fa fa-paper-plane" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.instagram.com/yourhandle" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://github.com/yourusername" className="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

export default Contact;
