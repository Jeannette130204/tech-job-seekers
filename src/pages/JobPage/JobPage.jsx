import axios from 'axios'
import { useState } from 'react'

export default function OrderHistoryPage(){

    const [jobList, setJobList] = useState([{}])

    async function handleCheckToken(){
        axios.get('http://localhost:3001/api/jobs/jobs')
        .then(res => setJobList(res.data))

        // const expDate = await checkToken()
        // console.log(expDate)
    }
    return (
        <>
        <h1>Order History Page</h1>
        <button onClick={handleCheckToken}>Check</button>
        {
        jobList.map(job => <p>{job.title}</p>)
    }
        </>
    )
    
}
