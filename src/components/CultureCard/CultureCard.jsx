// --------- STYLES ---------
import './CultureCard.scss'

export default function CultureCard({ blurb }) {

    return (
        <div className="card">
            <div className="card__red-line"></div>
            <h3 className="card__title">{blurb.title}</h3>
            <p className="card__text">{blurb.text}</p>
        </div>
    );
}