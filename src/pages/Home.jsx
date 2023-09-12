import React from 'react'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Aboutme from '../components/Aboutme';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Test from '../components/Test';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Aboutme />
      <Skills />    
      <Projects />
      {/* <Test /> */}
    </div>
  )
}

export default Home