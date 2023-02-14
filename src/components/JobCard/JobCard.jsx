import { useNavigate } from "react-router-dom"

export default function JobCard({ job }){
    const navigate = useNavigate()
    return (
        <div 
        id="job-card"
        onClick={() => navigate(`/jobs/${job.title}`)}>
            <h1>{ job.title }</h1>
            <p>{ job.company }</p>
        </div>


    )

}