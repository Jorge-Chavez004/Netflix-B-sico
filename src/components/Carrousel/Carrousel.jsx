import Card from "../Card/Card"

export default function Carrousel(props){
    const carrouselStyle={
        display: 'flex'
    }
    return(
        <div style={carrouselStyle}>
            {
                props.data.map((obj)=> {
                    return <Card key={obj.id} content={obj.image} />
                })
            }
        </div>
    )
}