export default function CardsView(props) {
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    
    return (
        <div key={Math.random()} className={cardClass}>
            {props.cards.map( items => (
                <div key={Math.random()} className='divImgCard'>
                    <p key={Math.random()} className='cardText'>{items.name}</p>
                    <p key={Math.random()} className='cardText'>{items.color}</p>
                    <img src={items.img} alt={items.color} />
                    <div key={Math.random()} className='cardFooter'>
                        <p key={Math.random()} className='cardPrice'>{items.price}</p>
                        <button key={Math.random()} className='addButton'>Add to cart</button>
                    </div>
                </div>     
            ))}
        </div>
    )
}