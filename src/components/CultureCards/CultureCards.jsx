// ---------- FXNALITY ----------
import blurb from "../../data/culturecards.json";
// --------- COMPONENTS ---------
import CultureCard from '../CultureCard/CultureCard';
// --------- STYLES ---------
import './CultureCards.scss'

export default function CultureCards() {

    let cardText = blurb;

    return (
        <section className="culture">
            <h2 className="culture__title">Driven by a century of culture</h2>
            <div className="culture__cards">
                {cardText.map((blurb) => {
                    return <CultureCard key={blurb.id} blurb={blurb} />
                })}
            </div>
            <div className="culture__logos">
                <img src="src/assets/images/CIPF.avif" alt="CIPF Member Logo" className="culture__logo CIPF" />
                <img src="src/assets/images/CIRO.avif" alt="Regulated by CIRO Logo" className="culture__logo CIRO" />
                <img src="src/assets/images/IIROC.avif" alt="IIROC AdvisorReport Logo" className="culture__logo IIROC" />
            </div>
            <div className="culture__legal-section">
                <p className="culture__legal">®</p>
                <p className="culture__legal">Registered trademark of The Bank of Nova Scotia, used under licence. Scotia Wealth Management® consists of a range of financial services provided by The Bank of Nova Scotia (Scotiabank®); The Bank of Nova Scotia Trust Company (Scotiatrust®); Private Investment Counsel, a service of 1832 Asset Management L.P.; 1832 Asset Management U.S. Inc.; Scotia Wealth Insurance Services Inc.; and ScotiaMcLeod®, a division of Scotia Capital Inc. Private banking services are provided by The Bank of Nova Scotia. Estate and trust services are provided by The Bank of Nova Scotia Trust Company. Portfolio management is provided by 1832 Asset Management L.P. and 1832 Asset Management U.S. Inc. Insurance services are provided by Scotia Wealth Insurance Services Inc. Wealth advisory and brokerage services are provided by ScotiaMcLeod, a division of Scotia Capital Inc. International investment advisory services are provided by Scotia Capital Inc. Financial planning services are provided by The Bank of Nova Scotia and ScotiaMcLeod. Scotia Capital Inc. is a member of the Canadian Investor Protection Fund and is regulated by the Canadian Investment Regulatory Organization. Scotia Wealth Insurance Services Inc. is the insurance subsidiary of Scotia Capital Inc., a member of the Scotiabank group of companies. When discussing life insurance products, ScotiaMcLeod advisors are acting as Life Insurance Agents (Financial Security Advisors in Quebec) representing Scotia Wealth Insurance Services Inc.
                </p>
            </div>
        </section>
    );
}