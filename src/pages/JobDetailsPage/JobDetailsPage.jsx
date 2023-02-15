import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from 'react';


export default function JobDetailsPage({ jobList, handleDelete, user }) {
    const navigate = useNavigate()
  let { id } = useParams();
  const job = jobList.find((job) => job._id == id);

  function handleDeleteClick(){
    handleDelete(job._id)

  }

  async function handleDelete(id) {
    const response = await axios.delete(`http://localhost:3001/api/jobs/delete/${id}`)
    .then((res)=>{
      console.log(res)
      if (res.status == 200) navigate('/jobs')
    })
  }
  console.log(job.link)

  return (
    <div id="job-detail">
      <section id="block">
        <h1>Job Title: {job.title}</h1>
        <p>Company: {job.company}</p>
        <p>Description: {job.description}</p>
        <p>Location: {job.location}</p>
        <p>
            <a target="_blank" href={job.link}>Link</a>
        </p>
      </section>

      <section>
        {/* CONDITIONAL RENDERING: IF USER.NAME == POST.CREATEDBY RENDER BUTTON, IF NOT, RENDER '' */}
        {/*  CONDITIONAL EXAMPLE    user.name == post.createdby ? <button></button> : '' ;    */}
        {job.createdBy==user.name ? 
        <div>
            <button className="detail-buttons">Edit</button>
            <button className="detail-buttons" onClick={handleDeleteClick}>Delete</button>
        </div>
        :
        ""
        }
        </section>
    </div>
  );
}
