import { PHOTOS, SERVICES, img } from "./data";

export default function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-title">
      <div className="wrap services__grid">
        <div className="services__head">
          <h2 id="services-title" className="h2">
            Prices
          </h2>
          <p>All prices in rupees. Every cut includes a wash and a hot towel finish.</p>
          <div className="services__photos" aria-hidden="true">
            <img src={img(PHOTOS.tools, 600)} alt="" loading="lazy" />
            <img src={img(PHOTOS.comb, 600)} alt="" loading="lazy" />
          </div>
        </div>

        <ul className="board">
          {SERVICES.map((s) => (
            <li key={s.name} className="board__row">
              <div>
                <h3>{s.name}</h3>
                <p>{s.note}</p>
              </div>
              <span className="board__time">{s.mins} min</span>
              <span className="board__price">Rs {s.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
