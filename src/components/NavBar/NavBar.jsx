import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){
    function handleLogOut(){
        userService.logOut()
        setUser(null)
        }
    return (
        <nav>
            <h1 id="page-title">Welcome {user.name}</h1>
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)'}} to='/' class='links'>Main Page</Link>
            &nbsp; | &nbsp;
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)'}} to='/jobs' class='links'>All Jobs</Link>
            &nbsp; | &nbsp;
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)'}} to='/jobs/new' class='links'>Add New Job</Link>
            &nbsp; | &nbsp;
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)'}} to='' onClick={handleLogOut} class='links'>Log out</Link>
        </nav>
    )
}