import JobCard from "../../components/JobCard/JobCard"

export default function OrderHistoryPage({jobList, setJobList, handleCheckToken}){

        // const expDate = await checkToken()
        // console.log(expDate)
    
    return (
        <>
        <h1>Jobs Hiring</h1>
        <button onClick={handleCheckToken}>Check</button>
        {
        jobList.map((job, index) => < JobCard job={job} key={index}/>)
    }
        </>
    )
}
