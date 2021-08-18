export default function ListView(props) {
    console.log(props.id)
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    return (
        <div className={cardClass}>
            {props.cards.map( items => (
                <div className='divImg'>
                    <img src={items.img}/>
                </div>     
            ))}
        </div>
    )
}