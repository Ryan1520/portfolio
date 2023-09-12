import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Blogs} from '../data'
import Navbar from '../components/Navbar'
import Markdown from "markdown-to-jsx"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import rehypeHighlight from 'rehype-highlight'

const Post = () => {
  const { id } = useParams()
  const [postContent, setPostContent] = useState("")
  const filteredBlog = Blogs.find(b => b.id === Number(id))
  // console.log(filteredBlog)

  useEffect(() => {
    // https://stackoverflow.com/questions/74225046/how-to-pass-a-variable-in-a-file-path-react-js
    // https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
    import ("../markdown/" + filteredBlog.file)
    .then(res => {
      fetch(res.default)
        .then(response => response.text())
        .then(response => setPostContent(response))
        .catch(err => console.log(err))
    })
  }, [filteredBlog.file])
  // console.log(postContent)


  return (
    <>
      <Navbar />
      <div className='markdown-container'>
        {/* https://stackoverflow.com/questions/74607419/react-markdown-don%C2%B4t-render-markdown */}
        {/* <Markdown className='markdown'>{postContent}</Markdown> */}
        <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} children={postContent} />
        {/* <ReactMarkdown className='markdown'>{postContent}</ReactMarkdown> */}

      </div>
    </>
  )
}

export default Post