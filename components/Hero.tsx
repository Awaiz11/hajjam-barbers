import { PHOTOS, SHOP, img } from "./data";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__est">{SHOP.full}, DHA Phase 6</p>
          <h1 id="hero-title" className="hero__title">
            Sharp cuts,
            <br />
            done properly
          </h1>
          <p className="hero__lede">
            Fades, beard work and hot towel shaves by barbers who take their time. Pick your
            barber and a slot, and we&apos;ll keep the chair warm.
          </p>
          <div className="hero__actions">
            <a href="#book" className="btn btn--red">
              Book a chair
            </a>
            <a href="#services" className="btn btn--line">
              See prices
            </a>
          </div>
          <p className="hero__walkin">Walk-ins welcome before 6 pm</p>
        </div>

        <div className="hero__art">
          <div className="pole" aria-hidden="true">
            <span className="pole__cap" />
            <span className="pole__glass">
              <span className="pole__stripes" />
            </span>
            <span className="pole__cap pole__cap--bottom" />
          </div>
          <div className="hero__photo">
            <img
              src={img(PHOTOS.hero, 1000)}
              alt="Barber shaping a client's fade with clippers"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
