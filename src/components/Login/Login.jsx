import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { useNavigate } from "react-router-dom"
import {useState} from "react"

export default function Login() {

    const [displayErrorMessage, setDisplayErrorMessage]=useState("none")

    const h2style = {
        color: 'white',
        textAlign: 'center'
    }
    const loginFormStyle = {
        display: 'grid', //Se ordena verticalmente
        backgroundColor: 'Black',
        padding: '48px 68px 68px 48px',
        position: 'absolute',
        top: '25%',
        left: '35%'
    }

    const inputFormStyle = {
        backgroundColor: 'black',
        borderRadius: '2px 2px 2px 2px',
        borderColor: 'grey',
        color: 'white',
        padding: '1rem',
        marginTop: '1.5rem',
        marginBottom: '1rem',
        width: '314px',
        fontSize: '16px'
    }

    const submitButtonStyle = {
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '2px 2px 2px 2px',
        borderColor: 'red',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingBottom: '0.5 rem',
        paddingTop: '1.5 rem',
        width: '350px',
        height: '50px',
        fontSize: '16px',
        fontWeight: 'bold'
    }

    const navigate = useNavigate();

    function validarCredenciales(){
        const username = document.querySelector("#input-username").value
        const password = document.querySelector("#input-password").value
        if (username=="user" && password=="12345"){
            navigate("/menu")
        }else {
            setDisplayErrorMessage("flex")
        }
    }


    return (
        <>
        <div style={loginFormStyle}>
            <h2 style={h2style} >Iniciar Sesión</h2>
            <input id="input-username" style={inputFormStyle} type="text" placeholder="Gmail o número de celular"></input>
            <input id="input-password" style={inputFormStyle} type="password" placeholder="Contraseña"></input>
            <input style={submitButtonStyle} type="submit" value="Iniciar Sesión" onClick={validarCredenciales}></input>
            <ErrorMessage display={displayErrorMessage}/>
        </div>
        </>
    )
}