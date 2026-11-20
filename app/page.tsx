import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Checker from "@/components/Checker";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Dulha from "@/components/Dulha";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Checker />
        <Services />
        <Booking />
        <Dulha />
        <Visit />
      </main>
      <Checker />
      <Footer />
    </>
  );
}
