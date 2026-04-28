import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
