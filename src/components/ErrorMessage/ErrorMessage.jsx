export default function ErrorMessage(props){
    const textstyle = {
        color: 'white',
        textAlign: 'center'
    }

    const ErrorMessageStyle = {
        backgroundColor: 'red',
        display: props.display,
        alignContent: 'center',
        width: '350px',
        marginTop: '1rem'
    }

    return (
        <>
            <div style={ErrorMessageStyle}>
                <p style={textstyle}>
                    Usuario y/o constraseña incorrectos. Intente de nuevo
                    por favor.
                </p>
            </div>
        </>
    )
}