import './index.css'
import Login from '../components/Login/Login'

export default function LoginPage() {

    const logoStyle = {
        paddingLeft: '80px',
        paddingTop: '20px',
        height: '50px',
        display: 'flex'
    }

    return(
        <>
            <img style={logoStyle} src='src\assets\Logo_Netflix.png'></img>
            <Login />
        </>
    )
}