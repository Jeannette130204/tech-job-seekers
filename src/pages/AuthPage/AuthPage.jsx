import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}){
    return (
        <main>
            <h1>Auth page</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>

        </main>
    )
}