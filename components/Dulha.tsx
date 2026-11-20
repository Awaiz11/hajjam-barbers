import { DULHA, PHOTOS, SHOP, img } from "./data";

const ask = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
  `Assalam o alaikum, I'd like to ask about the Dulha package at ${SHOP.full}. My wedding date is: `
)}`;

export default function Dulha() {
  return (
    <section id="dulha" className="dulha" aria-labelledby="dulha-title">
      <div className="wrap dulha__inner">
        <div className="dulha__copy">
          <h2 id="dulha-title" className="h2">
            Getting married? Let us handle the dulha.
          </h2>
          <p>
            Our groom package covers you from the mehndi to the baraat, at the shop or at your home
            on the day.
          </p>
          <ul className="dulha__list">
            {DULHA.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className="dulha__prices">
            <p>
              <span>At the shop</span>
              <strong>Rs 9,500</strong>
            </p>
            <p>
              <span>At your home</span>
              <strong>Rs 14,000</strong>
            </p>
          </div>
          <a className="btn btn--red" href={ask} target="_blank" rel="noopener noreferrer">
            Ask about your date
          </a>
        </div>
        <div className="dulha__photo">
          <img src={img(PHOTOS.groom, 900)} alt="Freshly groomed client with a sharp beard line" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
