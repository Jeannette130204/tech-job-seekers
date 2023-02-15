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

        // const expDate = await checkToken()
        // console.log(expDate)
    
    return (
        <>
        <h1>Jobs Hiring</h1>
        <button onClick={handleCheckToken}>Find All Jobs</button>
        {
        jobList.map((job, index) => (< JobCard job={job} key={index} handleDelete={handleDelete}/>
        ))}
        </>
    )
}
