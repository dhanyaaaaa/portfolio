import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hello, I'm Dhanyashree
            <br className="hidden lg:inline-block" /> 
          </h1>
          <p className="mb-8 leading-relaxed  text-justify">
          A dedicated frontend developer with a passion for creating visually stunning and user-friendly interfaces. My expertise lies in merging aesthetic design with seamless functionality, using the latest technologies like HTML, CSS, and JavaScript to build responsive and interactive web applications. I enjoy transforming ideas into reality with creative animations and innovative design elements. Continuously learning and adapting to new trends, I strive to deliver high-quality work that not only looks exceptional but also performs efficiently. Let's work together to bring your vision to life.
          </p> 
          {/* </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="heroine"
            src="Dhanyashree.jpg"
          />
        </div>
      </div>
    </section>
  );
}

