import { getTranslations } from "next-intl/server";
import * as motion from "motion/react-client";
import { FolderOpen } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default async function Projects() {
  const t = await getTranslations("Projects");

  const projectsData = [
    {
      id: "clikealo-campaigns",
      image: "/images/Creativity.webp",
      title: t("clikealoCampaigns.title"),
      description: t("clikealoCampaigns.description"),
      techStack: t("clikealoCampaigns.techStack"),
      color: "border-t-[#ff5c5cda]",
      bgColor:
        "bg-gradient-to-r from-[rgba(138,35,135,0.6)] via-[rgba(233,64,87,0.6)] via-[35%] to-[rgba(242,113,33,0.6)]",
      link: "https://redeem.clikealo.com/creativity",
    },
    {
      id: "clikealo-ecommerce",
      image: "/images/Clikealo.webp",
      title: t("clikealoEcommerce.title"),
      description: t("clikealoEcommerce.description"),
      techStack: t("clikealoEcommerce.techStack"),
      color: "border-t-[#4362eeaf]",
      bgColor:
        "bg-[linear-gradient(190deg,_rgba(138,35,135,0.6)_0%,_rgba(233,64,87,0.6)_35%,_rgba(242,113,33,0.6)_100%)]",
      link: "https://clikealo.com/es",
    },
    {
      id: "nommad",
      image: "/images/NOMMAD.webp",
      title: t("nommad.title"),
      description: t("nommad.description"),
      techStack: t("nommad.techStack"),
      color: "border-t-[#00ca4d93]",
      bgColor:
        "bg-[linear-gradient(312deg,_rgba(138,35,135,0.6)_0%,_rgba(233,64,87,0.6)_35%,_rgba(242,113,33,0.6)_100%)]",
      link: "https://clikealo.com/es",
    },
  ];

  return (
    <section className="my-container flex flex-col gap-y-8 w-full">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="my-subtitle w-full mt-10"
      >
        <FolderOpen className="w-10 h-10 inline-block mr-3" />
        {t("title")}
      </motion.h2>

      {/* Projects Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.2,
              ease: "easeOut",
              duration: 0.8,
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`bg-card rounded-lg overflow-hidden shadow-2xl  cursor-pointer`}
          >
            <Link
              href={project.link}
              target="_blank"
              className="flex flex-col h-full"
            >
              {/* Content */}
              <div className="flex flex-col gap-4 flex-grow">
                <div
                  className={` p-6 rounded-lg ${project.bgColor} rounded-b-none `}
                >
                  <div className="relative w-full aspect-video ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                <div className="p-6 py-4 flex flex-col gap-4 grow">
                  <h3 className="my-text text-primary font-bold text-xl ">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto pt-4 border-t border-text-secondary/20">
                    <p className="text-xs font-semibold text-primary mb-2">
                      {t("techStack")}
                    </p>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {project.techStack}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
