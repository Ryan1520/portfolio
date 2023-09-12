import React from 'react'
import SingleProject from '../components/SingleProject'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { FullStackProjects, 
         ReactProjects, 
         JavascriptProjects } from '../data'

const Projects = () => {
  // https://stackoverflow.com/questions/66506891/useparams-hook-returns-undefined-in-react-functional-component
  const { cat } = useParams()
  let data = []
  if (cat === 'fullstack') data = FullStackProjects
  else if (cat === 'react') data = ReactProjects
  else data = JavascriptProjects
  return (
    <>
      <Navbar />
      {data.map(d => (
        <SingleProject info={d}/>
      ))}
    </>
  )
}

export default Projects