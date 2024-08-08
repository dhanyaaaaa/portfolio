import React, { useEffect, useState } from "react";

const About = () => {
  const resumeUrl = "dhanya new resume.pdf"; // Replace with the actual path to your resume file
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = "I am Dhanyashree";
    let index = 0;
    let interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText("");
          index = 0;
          interval = setInterval(() => {
            if (index <= text.length) {
              setDisplayText(text.substring(0, index));
              index++;
            } else {
              clearInterval(interval);
            }
          }, 100); // Adjust the interval for typing speed
        }, 2000); // Adjust the timeout for pause between loops
      }
    }, 100); // Adjust the interval for typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/image.png')` }} // Update this path if your image is stored differently
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url('Dhanyashree.JPG')` }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 container px-5 py-10 mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{displayText}</h1>
        
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white py-2 px-6 rounded-full hover:bg-navy-dark transition duration-300 transform hover:scale-105"
          style={{ backgroundColor: "#001f3f" }}
        >
          My Resume <i className="fas fa-download"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
