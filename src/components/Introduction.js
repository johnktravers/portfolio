import React from 'react';

import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

function Introduction() {
  return (
    <div>
      <h1>Welcome. My name is John Travers.</h1>
      <article className="icons">
        <a href="https://github.com/johnktravers"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/johnktravers"><FaLinkedin /></a>
        <a href="https://alumni.turing.io/alumni/john-travers"><FaGraduationCap /></a>
      </article>
    </div>
  );
}

export default Introduction;
