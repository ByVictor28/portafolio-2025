import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Hero from "./components/Hero";
import Habilities from "./components/Habilities";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="habilities">
        <Habilities />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  );
}
