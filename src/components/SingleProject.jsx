import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import github_logo from '../assets/github-logo.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'

const Container = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: calc(100vh - 70px);
  margin-bottom: 100px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  scroll-margin-top: 70px;
`

const Wrapper = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 1100px;
  margin-inline: auto;
  height: 100%;
`

const Name = styled.h1`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 15%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Abstract = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  height: 70%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

const Card = styled.img`
  ${'' /* border: 1px solid black; */}
  background-color: gray;
  width: 100%;
  height: 100%;
  object-fit: cover:
`

const Desc = styled.h4`
  ${'' /* border: 1px solid black; */}
  flex: 1;
  padding: 20px;
  letter-spacing: 1px;
  line-height: 25px;
  text-align: justify;
  text-justify: inter-word;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 50%;
    ${'' /* background-color: orange; */}
    border-left: 5px solid orange;
    border-top: 5px solid orange;
  }
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50%;
    ${'' /* background-color: orange; */}
    border-right: 5px solid orange;
    border-bottom: 5px solid orange;
  }
`

const GitHub = styled.a`
  ${'' /* border: 1px solid black; */}
  width: fit-content;
  margin-inline: auto;
  height: 15%;
  display: flex; 
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const GHlogo = styled.img`
  height: 75%;
`

const SingleProject = ({info}) => {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <Container>
      <Wrapper>
        <Name>
          {info.title}
        </Name>

        <Abstract>
          <Swiper
            modules={[Mousewheel, Pagination]}
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            style={{
              "width": "60%",
              "aspectRatio": "16/9",
              "borderRadius": "20px",
              "boxShadow": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            }}
            onSwiper={(swiper) => console.log('ok')}
            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          >
            {
              info.img.map(i => (
                <SwiperSlide style={{'width': '100%', 'height': '100%'}}>
                  <Card src={require('../assets/' + i)}/>
                </SwiperSlide>
              ))
            }
            {/* <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide> */}
          </Swiper>
          <Desc>
            {info.desc[slideIndex]}
          </Desc>
        </Abstract>

        <GitHub href={info.github} target='_blank'>
          <GHlogo src={require('../assets/github-logo.png')}/>
        </GitHub>
      </Wrapper>
    </Container>
  )
}

export default SingleProject