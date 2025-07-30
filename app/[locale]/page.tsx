import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <Link href="/about" className="underline text-blue-600 mt-4 block">
        {t("about")}
      </Link>
    </main>
  );
}
