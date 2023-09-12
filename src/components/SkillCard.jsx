import React from 'react'
import styled from 'styled-components'
import react_logo from '../assets/react-logo.png'
const Card = styled.div`
  border: 1px solid black;
  width: 90px;
  height: 90%;
`

const Top = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 70%;
`

const Logo = styled.img`
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Bottom = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SkillCard = () => {
  return (
    <Card>
      <Top>
        <Logo src={react_logo}/>
      </Top>
      <Bottom>React</Bottom>
    </Card>
  )
}

export default SkillCard