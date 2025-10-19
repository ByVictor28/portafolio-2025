import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LinkedIn from "@/public/icons/LinkedIn";
import Github from "@/public/icons/Github";
import Instagram from "@/public/icons/Instagram";
import * as motion from "motion/react-client";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="min-h-screen my-container flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <h1 className="my-title">Victor Manuel Delfin Santos</h1>
          <p className="my-subtitle text-primary">{t("career")}</p>
          <div>
            <p className="my-text">{t("greeting")}</p>
            <div className="flex gap-2 mt-2">
              <Link href="https://github.com/ByVictor28" target="_blank">
                <Github className="w-10 h-10 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/victordelfin/"
                target="_blank"
              >
                <LinkedIn className="w-10 h-10 text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/victordelfin28/"
                target="_blank"
              >
                <Instagram className="w-10 h-10 text-white" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image
            src="/images/profile.webp"
            alt="Hero"
            width={300}
            height={300}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
