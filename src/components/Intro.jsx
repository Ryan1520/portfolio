import React from 'react'
import styled from 'styled-components'
import {Facebook, LinkedIn, GitHub} from '@mui/icons-material';
import ava_img from '../assets/new_ava.jpg'


const Container = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #00235B;
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

const ImgContainer = styled.div`
  ${'' /* border: 1px solid black; */}
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E21818;
`

const BackCircle = styled.div`
  border: 2px dashed #00235B;
  width: 95%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${'' /* border-radius: 50%; */}
  position: absolute;
  ${'' /* transform: scale(3.5);
  top: 140px;
  left: -390px; */}
  transform: scale(1.4);
  top: 50px;
  left: 0px;
`

const Content = styled.div`
  ${'' /* border: 1px solid black; */}
  flex: 2;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`

const Hello = styled.h1`
  ${'' /* border: 1px solid black; */}
  color: #FFDD83;
  font-size: 45px;
`

const Role = styled.h1`
  ${'' /* border: 1px solid black; */}
  color: #98DFD6;
`

const NetWork = styled.div`
  ${'' /* border: 1px solid black; */}
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 40px;
  color: white;
`

const Contact = styled.div`
  justify-self: end;
`
const InfoLink = styled.a`
  ${'' /* border: 1px solid black; */}
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Intro = () => {
  return (
    <Container id="intro">
      <Wrapper>
        <ImgContainer>
          <BackCircle>
            <Img src={ava_img}/>
          </BackCircle>
        </ImgContainer>

        <Content>
          <Hello>Hi, My Name is Tran Dai Nguyen!</Hello>
          <Role>I am a Junior Full-Stack Web Developer</Role>
          <NetWork>
            <InfoLink href='https://www.facebook.com/profile.php?id=100010728311858&mibextid=2JQ9oc' target="_blank">
              <Facebook sx={{fontSize: "50px"}}/>
            </InfoLink>
            <LinkedIn sx={{fontSize: "50px"}}/>
            <InfoLink href='https://github.com/Ryan1520' target="_blank">
              <GitHub sx={{fontSize: "50px"}}/>
            </InfoLink>
          </NetWork>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Intro