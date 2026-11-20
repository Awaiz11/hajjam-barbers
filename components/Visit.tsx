import { HOURS, PHOTOS, SHOP, img } from "./data";

export default function Visit() {
  return (
    <section id="visit" className="visit section" aria-labelledby="visit-title">
      <div className="wrap visit__grid">
        <div className="visit__photo">
          <img src={img(PHOTOS.shop, 1000)} alt="Inside the barbershop with chairs and mirrors" loading="lazy" />
        </div>
        <div>
          <h2 id="visit-title" className="h2">
            Find us
          </h2>
          <p className="visit__address">{SHOP.area}</p>
          <a className="link" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
          <table className="hours">
            <caption className="sr-only">Opening hours</caption>
            <tbody>
              {HOURS.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="visit__small">Parking right outside. Call or WhatsApp {SHOP.phoneDisplay}.</p>
        </div>
      </div>
    </section>
  );
}
