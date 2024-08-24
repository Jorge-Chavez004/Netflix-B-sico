
export default function HeaderMenu(){
    const menustyle={
        paddingLeft: '40rem',
        paddingTop: '0px',
        display: 'flex',
        justifyContent: 'center', /* Centra horizontalmente */
        alignItems: 'center' /* Centra verticalmente */
    }

    const searchStyle={
        height: '20px',
        paddingRight: '2rem',
    }

    const araragi={
        height: '55px',
        marginRight: '2rem'
    }
    
    return(
        <div style={menustyle}>
            <input style={searchStyle} type="image" src="src/assets/search_icon.png" alt="Submit"></input>
            <img style={araragi} src="src/assets/araragi.jpg"></img>
        </div>
    )
}