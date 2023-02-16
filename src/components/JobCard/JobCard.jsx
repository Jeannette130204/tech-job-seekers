import { useNavigate } from "react-router-dom"

export default function JobCard({ job }){
    const navigate = useNavigate()
    const id = job._id
    return (
        <div 
        id="job-card"
        onClick={() => navigate(`/jobs/${id}`)}>
            <div id="before">
                <h1 id="card-h">Job Title: { job.title }</h1>
                <div id="company" className="card-elements">Company: { job.company }</div>
            </div>
        </div>
    )
}