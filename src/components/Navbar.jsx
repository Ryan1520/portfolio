import React from 'react'
import styled from 'styled-components'
import N_logo from '../assets/N-logo.png'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll'


const Container = styled.nav`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 70px;
  background-color: #F9F5EB;
  position: sticky;
  z-index: 99;
  top: 0;
`

const Wrapper = styled.div`
  ${'' /* border: 1px solid black; */}
  height: 100%;
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  ${'' /* border: 1px solid black; */}
  height: 100%;
  display: flex;
  align-items: center;
`

const Img = styled.img`
  ${'' /* border: 1px solid black; */}
  background-image: url(${(props) => props.src});
  height: 100%;
`
const Name1 = styled.h1`
  font-size: 35px;
  color: #EA5455
`
const Name2 = styled.h1`
  font-size: 35px;
  color: #002B5B
`

const Menu = styled.ul`
  ${'' /* border: 1px solid black; */}
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`

const MenuItem = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 7px;
  border-radius: 10px;
  background-color: #E4DCCF;
  color: #002B5B;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: #EA5455
  }
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <RouterLink to='/' style={{height: '100%', textDecoration:'none'}}>
          <Logo>          
            <Img src={N_logo}/>
            <Name1>Tran</Name1>
            <Name2>Nguyen</Name2>
          </Logo>
        </RouterLink>
        <Menu>
          <Link to="intro" spy={true} smooth={true} offset={-70} duration={500}>
            <MenuItem>Intro</MenuItem>
          </Link>
          <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
            <MenuItem>About Me</MenuItem>
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
            <MenuItem>Skills</MenuItem>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <MenuItem>Projects</MenuItem>
          </Link>
          <RouterLink style={{textDecoration: 'none'}} to='/blog'>
            <MenuItem>Blog</MenuItem>
          </RouterLink>
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default Navbar