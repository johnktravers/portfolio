import React, {FC} from 'react';

import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const Icons: FC = () => (
  <div>
    <a href="https://github.com/johnktravers"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/johnktravers"><FaLinkedin /></a>
    <a href="https://alumni.turing.io/alumni/john-travers"><FaGraduationCap /></a>
  </div>
)

export default Icons
