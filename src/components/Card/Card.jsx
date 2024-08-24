export default function Card(props){
    const cinta={
        backgroundColor: 'black'
    }
    
    const imgStyle={
        height: '150px',
        width: '260px',
    }

    const buttonStyle={
        backgroundColor: 'black',
        borderWigth: '0px',
        display:'flex',
        padding: '0px',
        marginRight: '10px'
        
    }

    return(
        <div style={cinta}>
        <button style={buttonStyle}>
            <img style={imgStyle} type="image" src={props.content}></img>
        </button>
        </div>
    )
}