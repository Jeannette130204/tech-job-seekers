import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditJobPage({ jobList }) {
  const { id } = useParams();
  const job = jobList.find((job) => job._id == id);
  const [post, setPost] = useState(job);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/api/jobs/edit/${post._id}`, post);
    // await axios.put(`http://localhost:3001/api/jobs/edit/:_id`, post);
  };

  return (
    <>
      <h1 id="edit-job-title">Edit Job Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Job title</label>
        <input type="text" name="title" value={post.title} onChange={handleChange} />
        <label>Company</label>
        <input type="text" name="company" value={post.company} onChange={handleChange} />
        <label>Description</label>
        <input type="textarea" name="description" value={post.description} onChange={handleChange} />
        <label>Location</label>
        <input type="text" name="location" value={post.location} onChange={handleChange} />
        <label>Job Link</label>
        <input type="text" name="link" value={post.link} onChange={handleChange} />
        <button type="submit">Update Job Post</button>
      </form>
    </>
  );
}
