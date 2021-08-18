export default function CardsView(props) {
    console.log(props.cards)
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    
    return (
        <div className={cardClass}>
            {props.cards.map( items => (
                <div className='divImgCard'>
                    <p>{items.name}</p>
                    <p>{items.color}</p>
                    <img src={items.img}/>
                    <p>{items.price}</p>
                    <button>Add to cart</button>
                </div>     
            ))}
        </div>
    )
}