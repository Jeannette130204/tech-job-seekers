import { useEffect } from "react"
import JobCard from "../../components/JobCard/JobCard"

export default function JobList({jobList, setJobList, handleCheckToken}){




    useEffect(() => {
        handleCheckToken()
    }, [])

    const handleDelete = (id) =>{
        const newJobList = jobList.filter((job)=>job._id===id)
        setJobList(newJobList)
    }

    return (
        <>
        <div id="all-box">
        <h1 id="job-h">Jobs Hiring</h1>
        <button onClick={handleCheckToken}>Find All Jobs</button>
        {
        jobList.map((job, index) => (< JobCard job={job} key={index} handleDelete={handleDelete}/>
        ))}
        </div>
        </>
    )
}
