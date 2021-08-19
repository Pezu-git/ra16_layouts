import { v4 as uuidv4 } from 'uuid';

export default function CardsView(props) {
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    
    return (
        <div key={uuidv4()} className={cardClass}>
            {props.cards.map( items => (
                <div key={uuidv4()} className='divImgCard'>
                    <p key={uuidv4()} className='cardText'>{items.name}</p>
                    <p key={uuidv4()} className='cardText'>{items.color}</p>
                    <img src={items.img} alt={items.color} width='300px' height='300px'/>
                    <div key={uuidv4()} className='cardFooter'>
                        <p key={uuidv4()} className='cardPrice'>${items.price}</p>
                        <button key={uuidv4()} className='addButton'>Add to cart</button>
                    </div>
                </div>     
            ))}
        </div>
    )
}