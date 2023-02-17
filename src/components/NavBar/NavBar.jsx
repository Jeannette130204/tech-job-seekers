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
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)', fontWeight:'bold'}} to='/' className='links'>Main Page</Link>
            &nbsp; | &nbsp;
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)', fontWeight:'bold'}} to='/jobs' className='links'>All Jobs</Link>
            &nbsp; | &nbsp;
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)', fontWeight:'bold'}} to='/jobs/new' className='links'>Add New Job</Link>
            &nbsp; | &nbsp;
            <Link style={{border:'1px solid white', padding: '1%', marginTop:'2px', borderRadius: '5px', textDecoration:'none', backgroundColor:'rgba(255,255,255,0.5)', fontWeight:'bold'}} to='' onClick={handleLogOut} className='links'>Log out</Link>
        </nav>
    )
}