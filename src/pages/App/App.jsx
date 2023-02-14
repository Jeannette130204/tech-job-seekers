import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NewJobPage from '../NewJobPage/NewJobPage'
import AuthPage from '../AuthPage/AuthPage'
import JobPage from '../JobPage/JobPage'
import NavBar from '../../components/NavBar/NavBar'
import MainPage from '../MainPage/MainPage'
import { getUser } from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState([getUser()])//getUser()

  return (
    <main className="App">
      {user ?
      <>
      <NavBar user={user} setUser={setUser}/>
        <Routes>
          {/*Route components in here */}
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/jobs/new' element={<NewJobPage />} />
          <Route path='/jobs' element = {<JobPage />} />
        </Routes>
        </>
        :
        <AuthPage setUser= {setUser} />
      }
    </main>
  );
}

