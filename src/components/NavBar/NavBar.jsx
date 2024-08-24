import NavItem from "../NavItem/NavItem.JSX"

export default function NavBar(){
            const list = ["Inicio", "Series", "Películas", "Nuevo y Popular", "Mi lista"]
            const items = list.map((i)=>{
                return(
                    <NavItem item={i} />
                )
            })

            const navStyle= {
                display: 'flex',
                padding: 'auto',
                marginLeft: '20px'
            }

            return <>
                <nav>
                    <ul style={navStyle}>
                        {items}
                    </ul>
                </nav>
            </>
}