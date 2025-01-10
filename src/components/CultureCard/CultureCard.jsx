// --------- STYLES ---------
import './CultureCard.scss'

export default function CultureCard({ blurb }) {

    return (
        <div className="card">
            <div className="card__red-line"></div>
            <h3 className="card__title">{blurb.title}</h3>
            <div className="card__body">
                {blurb.text.map((text, index) => (
                    <p className="card__text" key={index}>{text}</p>
                    // <br></br>
                ))}
            </div>

        </div>
    );
}
{/* <p className="card__text">{blurb.text[0]}</p>
<br></br>
<p className="card__text">{blurb.text[1]}</p>
<br></br>
<p className="card__text">{blurb.text[2]}</p>
<br></br>
<p className="card__text">{blurb.text[3]}</p>
<br></br>
<p className="card__text">{blurb.text[4]}</p>
<br></br>
<p className="card__text">{blurb.text[5]}</p>
<br></br>
<p className="card__text">{blurb.text[6]}</p>
<br></br>
<p className="card__text">{blurb.text[7]}</p> */}