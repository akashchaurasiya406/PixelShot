import React from 'react'
import axios from 'axios'

import {useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault()                 // to stop reload of page as form submitted

        const formData =new FormData(e.target)

        axios.post("http://localhost:3000/create-post",formData)
        .then((res)=>{
            // const navigate = useNavigate()          // if call here then it will give error
            navigate("/feed")
        })
    }

  return (
    <section className='create-post-section'>
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder='Enter caption' required />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}


export default CreatePost