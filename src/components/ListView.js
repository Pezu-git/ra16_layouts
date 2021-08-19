import { v4 as uuidv4 } from 'uuid';

export default function ListView(props) {
    let cardClass = props.className
    if(props.id !== props.className) {
        cardClass = 'disNone'
    }
    return (
        <div key={uuidv4()} className={cardClass}>
            {props.cards.map( items => (
                <div key={uuidv4()} className='divImgList'>
                    <img src={items.img} alt={items.color} width='300px' height='300px'/>
                    <p key={uuidv4()}>{items.name}</p>
                    <p key={uuidv4()}>{items.color}</p>
                    <p key={uuidv4()}>${items.price}</p>
                    <button key={uuidv4()} className='addButton'>Add to cart</button>
                </div>     
            ))}
        </div>
    )
}