import { useState, useEffect } from "react";
import "./Products.scss";
import productData from "../../data/products.json";

export default function Products() {
  const [toggleState, setToggleState] = useState(1);
  const [content, setContent] = useState(productData[0]);

  const toggleTab = (index) => {
    setToggleState(index);
    setContent(productData[index - 1]);
  };

  useEffect(() => {
    setContent(productData[toggleState - 1]);
  }, [toggleState]);

  return (
    <section className="products">
      <ul className="products__tab-container">
        <li
          className={
            toggleState === 1 ? "products__tab active-tab" : "products__tab"
          }
          onClick={() => toggleTab(1)}
        >
          Bespoke
        </li>
        <li
          className={
            toggleState === 2 ? "products__tab active-tab" : "products__tab"
          }
          onClick={() => toggleTab(2)}
        >
          Tailored
        </li>
        <li
          className={
            toggleState === 3 ? "products__tab active-tab" : "products__tab"
          }
          onClick={() => toggleTab(3)}
        >
          Envisioning
        </li>
        <li
          className={
            toggleState === 4 ? "products__tab active-tab" : "products__tab"
          }
          onClick={() => toggleTab(4)}
        >
          About Us
        </li>
      </ul>
      <div className="products__content">
        <h1 className="products__content--title">{content.title}</h1>
        <p className="products__content--paragraph">{content.body}</p>
      </div>
    </section>
  );
}
