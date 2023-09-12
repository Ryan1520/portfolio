import React from 'react'
import styled from 'styled-components'
import { Frontend, Backend, Language } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const Container = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 1100px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const SkillF = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  min-height: 150px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: #57C5B6;
  position: relative;

  &::before{
    ${'' /* border: 1px solid black; */}
    content: 'Front-end';
    position: absolute;
    width: 120px;
    height: 40px;
    top: calc(50% - 20px);
    left: -80px;
    transform: rotate(-90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #57C5B6;
    border-bottom: 2px dashed black;
    font-size: 20px;
    font-weight: 600;
  }
`

const SkillB = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  min-height: 150px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #9F0D7F;
  position: relative;

  &::before{
    ${'' /* border: 1px solid black; */}
    content: 'Back-end';
    position: absolute;
    width: 120px;
    height: 40px;
    top: calc(50% - 20px);
    left: -80px;
    transform: rotate(-90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9F0D7F;
    border-bottom: 2px dashed black;
    font-size: 20px;
    font-weight: 600;
  }
`
const SkillL = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  min-height: 150px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: #F94A29;
  position: relative;

  &::before{
    ${'' /* border: 1px solid black; */}
    content: 'Language';
    position: absolute;
    width: 120px;
    height: 40px;
    top: calc(50% - 20px);
    left: -80px;
    transform: rotate(-90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F94A29;
    border-bottom: 2px dashed black;
    font-size: 20px;
    font-weight: 600;
  }
`

const Card = styled.div`
  ${'' /* border: 1px solid black; */}
  min-width: 90px;
  height: 100px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  overflow: hidden;
`

const Top = styled.div`
  ${'' /* border: 1px solid black; */}
  background-color: white;
  width: 100%;
  height: 70%;
`

const Logo = styled.img`
  background-image: url(${(props) => props.src}), white;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Bottom = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #002B5B;
  font-weight: 500
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <SkillF>
          <Swiper
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            {
              Frontend.map(f => (
                <SwiperSlide>
                  <Card color="#159895">
                    <Top>
                      <Logo src={f.logo}/>
                    </Top>
                    <Bottom>{f.skill}</Bottom>
                  </Card>
                </SwiperSlide>
              ))
            }  
          </Swiper>
        </SkillF>
        <SkillB>
          {
            Backend.map(f => (
              <Card color="#EA1179">
                <Top>
                  <Logo src={f.logo}/>
                </Top>
                <Bottom>{f.skill}</Bottom>
              </Card>        
            ))
          }
        </SkillB>
        <SkillL>      
          {
            Language.map(f => (
              <Card color="#FCE22A">
                <Top>
                  <Logo src={f.logo}/>
                </Top>
                <Bottom>{f.skill}</Bottom>
              </Card>
            ))
          }  
        </SkillL>
      </Wrapper>
    </Container>
  )
}

export default Skills