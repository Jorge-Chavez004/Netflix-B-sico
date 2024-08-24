export default function NavItem (props){
    
    const itemStyle = {
        fontSize: '14px',
        marginRight: '1.5rem',
        listStyleType: 'none',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif'
    }
    
    return<>
            <li style={itemStyle}>
                {props.item}
            </li>
        </>
}