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
      <Hero />
      <Habilities />
      <Experience />
      <ContactForm />
    </main>
  );
}
