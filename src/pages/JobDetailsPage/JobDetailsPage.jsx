import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import EditJobPage from "../EditJobPage/EditJobPage";

export default function JobDetailsPage({ jobList, handleDelete, user }) {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  let { id } = useParams();
  console.log(id);
  const job = jobList.find((job) => job._id == id);
  function handleDeleteClick() {
    handleDelete(job._id);
  }

  async function handleDelete(id) {
    const response = await axios
      .delete(`http://localhost:3001/api/jobs/delete/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status == 200) navigate("/jobs");
      });
  }
  return (
    <div className="box-borders">
      <div id="job-detail">
        {editMode ? (
          <EditJobPage jobList={jobList} />
        ) : (
          <>
            <section id="block">
              <p className="details" id="details-title">
                Job Title: {job.title}
              </p>
              <p className="details">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="details">
                <strong>Description:</strong> {job.description}
              </p>
              <p className="details">
                <strong>Location</strong> {job.location}
              </p>
              <p id="link">
                <a target="_blank" href={`${job.link}`}>
                  Go to {job.company} application
                </a>
              </p>
            </section>

            <section id="buttons">
              {job.createdBy == user.name ? (
                <div>
                  <button
                    className="detail-buttons"
                    onClick={() => setEditMode(true)}
                  >
                    Edit
                  </button>
                  <button
                    className="detail-buttons"
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                ""
              )}
            </section>
            <a href="/jobs">Return to all jobs</a>

          </>
        )}
      </div>
    </div>
    
  );
}
