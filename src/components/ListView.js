export default function ListView(props) {
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    return (
        <div key={Math.random()} className={cardClass}>
            {props.cards.map( items => (
                <div key={Math.random()} className='divImgList'>
                    <img src={items.img} alt={items.color}/>
                    <p key={Math.random()}>{items.name}</p>
                    <p key={Math.random()}>{items.color}</p>
                    <p key={Math.random()}>{items.price}</p>
                    <button key={Math.random()} className='addButton'>Add to cart</button>
                </div>     
            ))}
        </div>
    )
}