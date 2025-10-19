import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Hero from "./components/Hero";
import Habilities from "./components/Habilities";
import Experience from "./components/Experience";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Hero />
      <Habilities />
      <Experience />
      <div className="my-container min-h-screen">
        <h2 className="my-title">Services</h2>
      </div>
    </main>
  );
}
