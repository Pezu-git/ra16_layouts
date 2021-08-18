export default function ListView(props) {
    console.log(props.id)
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    return (
        <div className={cardClass}>
            {props.cards.map( items => (
                <div className='divImgList'>
                    <img src={items.img}/>
                    <p>{items.name}</p>
                    <p>{items.color}</p>
                    <p>{items.price}</p>
                    <button>Add to cart</button>
                </div>     
            ))}
        </div>
    )
}