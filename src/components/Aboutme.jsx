import React from 'react'
import styled from 'styled-components'
import img from '../assets/cartoon-photo.jpg'

const Container = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #EEE2DE;
`

const Wrapper = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 1100px;
  margin-inline: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`

const Content = styled.div`
  ${'' /* border: 1px solid black; */}
  flex: 1;
`

const Title = styled.h1`
  ${'' /* border: 1px solid black; */}
  width: fit-content;
  padding: 10px;
  background-color: #B31312;
  color: #2B2A4C;
  position: relative;
  isolation: isolate;
  border-top-right-radius: 20px;

  &::before{
    content: "";
    position:absolute;
    bottom: 0;
    left: 100%;
    height:40px;
    width: 40px;
    border-bottom-left-radius: 50%;
    box-shadow: -20px 0 0 0 #B31312;
    z-index: -1
  }
`

const Detail = styled.p`
  ${'' /* border: 1px solid black; */}
  border-radius: 0px 20px 20px 0px;
  padding: 20px 10px;
  letter-spacing: 1px;
  line-height: 23px;
  background-color: #EA906C
`

const ImgContainer = styled.div`
  ${'' /* border: 1px solid black; */}
  flex: 1px;
  height: 95%;
`

const Img = styled.img`
  border-radius: 20px;
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 100%;
  object-fit: cover
`

const Aboutme = () => {
  return (
    <Container id="aboutme">
      <Wrapper>
        <Content>
          <Title>About Me</Title>
          <Detail>
            I have studied at Danang University of Science and Technology for 4 years in Mechatronics major. During that time, I had chance to learn coding in many languages (C++, Python, C#, MATLAB) via mini projects and realized that coding would be my career path. After graduation, I worked as a Mechatronics engineer but wasn't happy with that non-code position. I quit and wholeheartedly taught myself to become a Web Developer until now. I am looking for an opportunity to learn more from IT business, upgrade my skills in professional environment and contribute to the company with all of my value.
          </Detail>
        </Content>
        <ImgContainer>
          {/* <Img src="https://i.ibb.co/N3R4q3c/cartoon-photo.png"/> */}
          <Img src = {img} />
        </ImgContainer>
      </Wrapper>
    </Container>
  )
}

export default Aboutme