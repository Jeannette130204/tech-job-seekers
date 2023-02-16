import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NewJobPage from '../NewJobPage/NewJobPage'
import AuthPage from '../AuthPage/AuthPage'
import JobPage from '../JobPage/JobPage'
import NavBar from '../../components/NavBar/NavBar'
import MainPage from '../MainPage/MainPage'
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage'
import { getUser } from '../../utilities/users-service';
import EditJobPage from '../EditJobPage/EditJobPage'
import Job from '../JobDetailsPage/JobDetailsPage'
import axios from 'axios'
export default function App() {
  const [user, setUser] = useState(getUser())//getUser()

  const [jobList, setJobList] = useState([{}])


async function handleCheckToken(){
  axios.get('http://localhost:3001/api/jobs/')
  .then(res => setJobList(res.data))}
      
  return (
    <main className="App">
      {user ?
      <>
      <NavBar user={user} setUser={setUser}/>
        <Routes>
          {/*Route components in here */}
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/jobs/new' element={<NewJobPage user={user} />} />
          <Route path='/jobs' element = {<JobPage jobList={jobList} setJobList={setJobList} handleCheckToken={handleCheckToken}/>} />
          <Route path='jobs/:id' element = {< JobDetailsPage jobList={jobList} user={user}/>} />
          <Route path='/edit/:id' element = {< EditJobPage jobList={jobList}/>} />
        </Routes>
        </>
        :
        <AuthPage setUser= {setUser} />
      }
    </main>
  );
}

