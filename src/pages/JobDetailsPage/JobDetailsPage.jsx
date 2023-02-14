import { useParams } from "react-router-dom"


export default function JobDetailsPage({jobList}){
    let { id } = useParams()
    const job = jobList.find((job) => job._id==id)
    return(
        <div>
            <h1>{job.title}</h1>
            <p>{job.company}</p>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.link}</p>
        </div>
    )
}