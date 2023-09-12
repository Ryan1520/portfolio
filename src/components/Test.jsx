import React from 'react'
import styled from 'styled-components'
import add_icon from '../assets/add-icon.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Container = styled.div`
  border: 1px solid black;
  height: 250px;
  width: 70%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #FAF0E4;
  overflow: hidden;
`

const Card = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 170px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #9BCDD2;
  position: relative;
`

const AddAva = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 75%;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    bottom: -25px;
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
  }
`

const AddImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const SvgPlus = styled.img`
  ${'' /* border: 1px solid black; */}
  background-image: ${(props) => props.src};
  position: absolute;
  bottom: -35px;
  left: calc(50% - 35px);
  width: 70px;
  height: 70px;
  object-fit: cover;
`

const AccountName = styled.h3`
  ${'' /* border: 1px solid white; */}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 3px;
  color: black;
`

const Wrapper = styled.div`
  width: calc(100% - 170px);
  height: 100%;
  display: flex;
  
`
const CardImg = styled.img`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Name = styled.h3`
  ${'' /* border: 1px solid white; */}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 3px;
  color: white;
  mix-blend-mode: exclusive;
`

const AvaContainer = styled.div`
  ${'' /* border: 1px solid black; */}
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-bottom-right-radius: 10px;
  background-color: rgba(191, 191, 191, 0.2);
  backdrop-filter: blur(4px);
`

const Ava = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const AvaImg = styled.img`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
`
const Test = () => {
  const demoData = [1,2,3,4,5,6,7,8,9,10]
  return (
    <Container>
      <Card>
        <AddAva>
          <AddImg src="https://i.ibb.co/kmNvNk8/nature-img.jpg" />
          <SvgPlus src={add_icon}/>
        </AddAva>
        <AccountName>Nguyen Tran</AccountName>
      </Card>
      <Wrapper>
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={3.7}
          navigation
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >  
          { 
            demoData.map(d => (
              <SwiperSlide>
                <Card>
                  {/* <CardImg src="https://i.ibb.co/kmNvNk8/nature-img.jpg"/> */}
                  <CardImg src="https://i.ibb.co/BcjFX7X/nature.jpg"/>
                
                  <Name>Edogawa Conan</Name>
                  <AvaContainer>
                    <Ava>
                      <AvaImg src="https://i.ibb.co/ckCGnQ4/conan.jpg" />
                    </Ava>
                  </AvaContainer>
                </Card>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Wrapper>
    </Container>
  )
}

export default Test