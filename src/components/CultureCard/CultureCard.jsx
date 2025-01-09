// --------- STYLES ---------
import './CultureCard.scss'

export default function CultureCard({ blurb }) {

    return (
        <div className="card">
            <h3 className="card-title">{blurb.title}</h3>
            <p className="card-text">{blurb.text}</p>
        </div>
    );
}