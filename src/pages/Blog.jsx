import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Blogs } from '../data'
import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  background-color: #539165;
`

const Wrapper = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 1100px;
  margin: 0px auto;
  padding: 50px 0;
`

const Top = styled.div`
  ${'' /* border: 1px solid black; */}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  ${'' /* border: 1px solid black; */}
  padding: 0px 20px;
  color: #F7C04A;
  font-size: 50px;
`

const NumPost = styled.span`
  ${'' /* border: 1px solid black; */}
  align-self: flex-end;
  color: white;
  margin-right: 30px;
`

const Bottom = styled.div`
  ${'' /* border: 1px solid black; */}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 300px);
  grid-auto-rows: 300px;
  gap: 40px;
  padding: 20px;
`

const Card = styled.div`
  ${'' /* border: 1px solid black; */}
  padding: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  background-color: #3F497F;
`

const Label = styled.h3`
  ${'' /* border: 1px solid black; */}
  padding: 15px 10px;
  color: #F7C04A;
  border-bottom: 2px dashed white;
`

const Desc = styled.p`
  ${'' /* border: 1px solid black; */}
  margin-inline: 10px;
  color: #F8F5E4;
`

const ReadMore = styled.button`
  border: none;
  ${'' /* border: 1px solid black; */}
  width: 30%;
  margin-inline: 10px;
  padding: 7px;
  border-radius: 10px;
  background-color: #539165;
  color: #F7C04A;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    width: 50%;
  }
`

const TagContainer = styled.div`
  ${'' /* border: 1px solid black; */}
  margin-inline: 10px;
  display: flex;
  gap: 20px;
  color: #539165;
`

const Tag = styled.span`
  border: 1.3px dashed #F7C04A;
  padding: 2px;
  border-radius: 5px;
`

const Blog = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Top>
          <Title>Blog(still in development phase)</Title>
          <NumPost>{Blogs.length} Posts</NumPost>
        </Top>
        <Bottom>
          {Blogs.map(b => (
            <Card>
              <Label>{b.title}</Label>
              <Desc>{b.desc.slice(0, 150)}...</Desc>
              <Link to={`/post/${b.id}`}>
                <ReadMore>Read More</ReadMore>
              </Link>
              <TagContainer>
                {/* https://bobbyhadz.com/blog/javascript-split-string-multiple-spaces */}
                {b.tag.split(',').map(t => (<Tag>#{t.trim()}</Tag>))}
              </TagContainer>
            </Card>
          ))}
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Blog