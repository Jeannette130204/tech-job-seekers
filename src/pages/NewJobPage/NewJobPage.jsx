import { useState } from "react"
import { postJob } from "../../utilities/users-service";
import axios from "axios";

export default function AddJob () {
        const initialPost = {
            title: '',
            company: '',
            description: '',
            location: '',
            link: ''
        }

        const [post, setPost] = useState(initialPost)

        const handleChange  = (e) => {
            const { name, value } = e.target
            setPost({
                ...post,
                [name]: value
            })
        }
        
        const handleSubmit= async (e) =>{
            e.preventDefault()
            await axios.post('http://localhost:3001/api/jobs', post)
            // postJob(post)
            setPost(initialPost)
        }
    
    return (
        <>
        <h1 id="new-job-title">Create New Job Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Job title</label>
                <input type="text" name="title" value={post.title} onChange={handleChange}/>
                <label>Company</label>
                <input type="text" name="company" value={post.company} onChange={handleChange}/>
                <label>Description</label>
                <input type="textarea" name="description" value={post.description} onChange={handleChange}/>
                <label>Location</label>
                <input type="text" name="location" value={post.location} onChange={handleChange}/>
                <label>Job Link</label>
                <input type="text" name="link" value={post.link} onChange={handleChange}/>
                <button type="submit">Add New Job Post</button>           
                </form>

        </>
    )
}

