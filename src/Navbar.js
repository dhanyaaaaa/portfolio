/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <header style={{ backgroundColor: '#1f2937', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ maxWidth: '1200px', margin: 'auto', padding: '1.25rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', transition: 'transform 0.3s' }}>
          <img 
            src="im.jpg" 
            alt="Logo" 
            style={{ width: '50px', height: '50px', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <span 
            style={{ marginLeft: '0.75rem', fontSize: '1.25rem', color: 'white', fontFamily: 'Cursive', fontWeight: 'bold', fontStyle: 'italic', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            DHANYA
          </span>
        </div>
        <nav style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <a 
            href="#home" 
            style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#1f2937', border: 0, padding: '0.25rem 0.75rem', color: 'white', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold', margin: '0 0.5rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#374151';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#1f2937', border: 0, padding: '0.25rem 0.75rem', color: 'white', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold', margin: '0 0.5rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#374151';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#1f2937', border: 0, padding: '0.25rem 0.75rem', color: 'white', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold', margin: '0 0.5rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#374151';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Skills
          </a>
          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#1f2937', border: 0, padding: '0.25rem 0.75rem', color: 'white', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: 'bold', margin: '0 0.5rem', transition: 'all 0.3s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#374151';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2937';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Contact
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a 
            href="https://www.linkedin.com/in/dhanyaaaaa"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'white', margin: '0 0.5rem', fontSize: '1.5rem', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/dhanyaaaaa" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'white', margin: '0 0.5rem', fontSize: '1.5rem', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}
