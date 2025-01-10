import { useState, useEffect } from "react";
import "./Carousel2Card.scss";
import Carousel2 from "../../data/Carousel2.json";

export default function Carousel2Card() {

    const [toggleState, setToggleState] = useState(1);
    const [content, setContent] = useState(Carousel2[0]);

    const toggleTab = (index) => {
        setToggleState(index);
        setContent(Carousel2[index - 1]);
    };

    useEffect(() => {
        setContent(Carousel2[toggleState - 1]); 
    }, [toggleState]);


    return (
    <section className="products">
        <h2 className="products__title">Choose your preferred level of portfolio participation</h2>
        <ul className="products__tab-container">
            <li
                className={
                toggleState === 1 ? "products__tab active-tab" : "products__tab"
                }
                onClick={() => toggleTab(1)}
            >
                Personalized
            </li>
            <li
                className={
                toggleState === 2 ? "products__tab active-tab" : "products__tab"
                }
                onClick={() => toggleTab(2)}
            >
                Moderated
            </li>
            <li
                className={
                    toggleState === 3 ? "products__tab active-tab" : "products__tab"
                }
                onClick={() => toggleTab(3)}
                >
                Managed
            </li>
        </ul>
        <div className="products__content">
            <h1 className="products__content--title">{content.title}</h1>
            <div className="products__content--paragraph">
                {content.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    </section>
);
}