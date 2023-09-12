import React from 'react'
import styled from 'styled-components'
import Mern from '../assets/MERN-logo.jpg'
import React_logo from '../assets/react-project-logo.png'
import JS_logo from '../assets/js-project-logo.jpeg'
import {Link} from 'react-router-dom'


const Container = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  background-color: #BAD7E9;
`

const Title = styled.h1`
  font-size: 56px;
  color: #2B3467;
`

const Wrapper = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 90%;
  height: 400px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Card = styled.div`
  ${'' /* border: 1px solid black; */}
  height: 100%;
  width: 300px;
  border-radius: 30px 0px 30px 0px;
  overflow: hidden;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    transform: scale(1.1);
    border-radius: 20px;
  }
`

const TopCard = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 50%;
`

const Img = styled.img`
  background-image: url(${(props) => props.src}) non-repeat;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const BottomCard = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FCFFE7
`

const Label = styled.h3`
  color: #EB455F;
  font-size: 30px;
`


const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Wrapper>
        <Link style={{textDecoration: 'none', height: '100%'}} to='/sideprojects/fullstack'>
          <Card>
            <TopCard>
              <Img src={Mern} />
            </TopCard>
            <BottomCard>
              <Label>
                Full-stack
              </Label>
            </BottomCard>
          </Card>
        </Link>

        <Link style={{textDecoration: 'none', height: '100%'}} to='/sideprojects/react'>
          <Card>
            <TopCard>
              <Img src={React_logo}/>
            </TopCard>
            <BottomCard>
              <Label>React</Label>
            </BottomCard>
          </Card>
        </Link>

        <Link style={{textDecoration: 'none', height: '100%'}} to='/sideprojects/js'>
          <Card>
            <TopCard>
              <Img src={JS_logo}/>
            </TopCard>
            <BottomCard>
              <Label>HTML | CSS | JS</Label>
            </BottomCard>
          </Card>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Projects