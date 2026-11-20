import { SHOP } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__name">{SHOP.full}</p>
          <p className="footer__small">{SHOP.area}</p>
        </div>
        <p className="footer__small">
          Hajjam is a concept barbershop. Website designed and built by{" "}
          <a href="https://nexaflow-brown.vercel.app/" target="_blank" rel="noopener noreferrer">
            NexaFlow
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
