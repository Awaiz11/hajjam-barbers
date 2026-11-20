"use client";

import { useEffect, useMemo, useState } from "react";
import { BARBERS, OPEN, SERVICES, SHOP } from "./data";

type Day = { key: string; date: Date; label: string; sub: string };

const pad = (n: number) => String(n).padStart(2, "0");
const fmtTime = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${pad(m)} ${h < 12 ? "am" : "pm"}`;
};

export default function Booking() {
  const [days, setDays] = useState<Day[]>([]);
  const [now, setNow] = useState<Date | null>(null);
  const [dayKey, setDayKey] = useState<string>("");
  const [slot, setSlot] = useState<number | null>(null);
  const [service, setService] = useState(SERVICES[0].name);
  const [barber, setBarber] = useState(BARBERS[0]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Dates are built in the browser so they match the visitor's clock.
  useEffect(() => {
    const t = new Date();
    const list: Day[] = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(t.getFullYear(), t.getMonth(), t.getDate() + i);
      return {
        key: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
        date: d,
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-GB", { weekday: "short" }),
        sub: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      };
    });
    setNow(t);
    setDays(list);
    setDayKey(list[0].key);
  }, []);

  const day = days.find((d) => d.key === dayKey);

  const slots = useMemo(() => {
    if (!day || !now) return [];
    const { from, to } = OPEN[day.date.getDay()];
    const isToday = day.key === days[0]?.key;
    const earliest = isToday ? now.getHours() * 60 + now.getMinutes() + 30 : 0;
    const list: number[] = [];
    for (let m = from * 60; m <= to * 60 - 30; m += 30) {
      if (m >= earliest) list.push(m);
    }
    return list;
  }, [day, now, days]);

  useEffect(() => setSlot(null), [dayKey]);

  const send = () => {
    if (!name.trim()) return setError("Add your name so the barber knows who's coming.");
    if (slot === null || !day) return setError("Pick a time slot.");
    setError("");
    const when = `${day.date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short" })}, ${fmtTime(slot)}`;
    const msg =
      `Assalam o alaikum, I'd like to book at ${SHOP.full}.\n` +
      `Name: ${name.trim()}\nService: ${service}\nBarber: ${barber}\nTime: ${when}`;
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="book" className="booking section" aria-labelledby="book-title">
      <div className="wrap">
        <h2 id="book-title" className="h2 booking__title">
          Book a chair
        </h2>
        <p className="booking__lede">
          Choose what you need, who you want and when. We&apos;ll confirm on WhatsApp in a few minutes.
        </p>

        <div className="booking__card">
          <div className="booking__fields">
            <div className="field">
              <label htmlFor="service">Service</label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
                {SERVICES.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name} (Rs {s.price})
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="barber">Barber</label>
              <select id="barber" value={barber} onChange={(e) => setBarber(e.target.value)}>
                {BARBERS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="bname">Your name</label>
              <input id="bname" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </div>
          </div>

          <fieldset className="picker">
            <legend>Day</legend>
            <div className="days" role="radiogroup" aria-label="Day">
              {days.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  role="radio"
                  aria-checked={d.key === dayKey}
                  className="day"
                  onClick={() => setDayKey(d.key)}
                >
                  <span>{d.label}</span>
                  <small>{d.sub}</small>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="picker">
            <legend>Time</legend>
            {slots.length === 0 && now ? (
              <p className="slots__empty">We&apos;re closed for the rest of today. Pick another day.</p>
            ) : (
              <div className="slots" role="radiogroup" aria-label="Time">
                {slots.map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    aria-checked={slot === m}
                    className="slot"
                    onClick={() => setSlot(m)}
                  >
                    {fmtTime(m)}
                  </button>
                ))}
              </div>
            )}
          </fieldset>

          <div className="booking__foot">
            <p className="booking__summary" aria-live="polite">
              {slot !== null && day
                ? `${service}, ${barber.toLowerCase()}, ${day.label} ${day.sub} at ${fmtTime(slot)}`
                : "Pick a day and time"}
            </p>
            <button type="button" className="btn btn--red" onClick={send}>
              Send booking on WhatsApp
            </button>
          </div>
          {error && (
            <p className="booking__error" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
