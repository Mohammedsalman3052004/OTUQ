import Image from "next/image";
import '../css/cards.css';
import cardData from '../json/cardData.json';

export default function Cards({image, name, review, backgroundColor }) {
    return (
        <div className="cards" style={{ backgroundColor, padding: '20px', borderRadius: '10px' }}>
            <Image src={image} alt="Avatar" width={76} height={76} />
            <h3 className="card-name">{name}</h3>
            <div className="card-content">
                <p className="card-review">{review}</p>
            </div>
        </div>
    );
}