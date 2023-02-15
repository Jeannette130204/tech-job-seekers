import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from 'react';
import EditJobPage from "../EditJobPage/EditJobPage"


export default function JobDetailsPage({ jobList, handleDelete, user }) {
    const navigate = useNavigate()
    const [editMode, setEditMode] = useState(false);

  let { id } = useParams();
  console.log(id)
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
  return (
    <div id="job-detail">
      {editMode ? (
        <EditJobPage jobList={jobList} />
      ) : (
        <>
          <section id="block">
            <h1>Job Title: {job.title}</h1>
            <p>Company: {job.company}</p>
            <p>Description: {job.description}</p>
            <p>Location: {job.location}</p>
            <p>
              <a target="_blank" href={`https://${job.link}`}>
                Link
              </a>
            </p>
          </section>
  
          <section>
            {job.createdBy == user.name ? (
              <div>
                <button className="detail-buttons" onClick={() => setEditMode(true)}>
                  Edit
                </button>
                <button className="detail-buttons" onClick={handleDeleteClick}>
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </section>
        </>
      )}
    </div>
  );
 }