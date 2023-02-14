import { useNavigate } from "react-router-dom"

export default function JobCard({ job }){
    const navigate = useNavigate()
    const id = job._id
    return (
        <div 
        id="job-card"
        onClick={() => navigate(`/jobs/${id}`)}>
            <div></div>
            <h1>{ job.title }</h1>
            <p>{ job.company }</p>
            
        </div>


    )

}