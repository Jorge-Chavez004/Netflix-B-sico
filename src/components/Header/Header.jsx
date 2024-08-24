import NavBar from "../NavBar/NavBar"
import HeaderMenu from "../HeaderMenu/HeaderMenu"

const Header =() =>{

    const headerStyle={
        paddingLeft: '80px',
        paddingTop: '20px',
        paddingBottom: '10px',
        height: '50px',
        display: 'flex',
    }

    const fondoStyle={
        display: 'grid'
    }

    return (
        <>
            <header style={headerStyle} >
                <img style={fondoStyle} src='src\assets\Logo_Netflix.png'/>
            <NavBar />
            <HeaderMenu/>
            </header>
        </>
    )
}

export default Header