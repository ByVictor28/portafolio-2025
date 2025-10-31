import { getTranslations } from "next-intl/server";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Braces } from "lucide-react";
export default async function Habilities() {
  const t = await getTranslations("Habilities");

  const skillsData = [
    {
      title: t("frontend"),
      skills: [
        {
          name: "HTML5",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "React",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.js",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Bootstrap",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Tailwind",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
      topborder: "border-t-[#ff5c5cda]",
    },
    {
      title: t("backend"),
      skills: [
        {
          name: "Node.js",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Nest.js",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
      ],
      topborder: "border-t-[#00ca4d93]",
    },
    {
      title: t("databases"),
      skills: [
        {
          name: "MongoDB",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Firebase",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
        },
      ],
      topborder: "border-t-[#4362eeaf]",
    },
    {
      title: t("tools"),
      skills: [
        {
          name: "Git",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          svg: "data:image/svg+xml;utf8,<svg width='1024' height='1024' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z' transform='scale(64)' fill='white'/></svg>",
        },
        {
          name: "VSCode",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Postman",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "Netlify",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        },
        {
          name: "npm",
          svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        },
      ],
      topborder: "border-t-[#ffbe44e1]",
    },
  ];

  return (
    <section className="my-container flex flex-col md:flex-row gap-y-8 gap-x-6 w-full flex-wrap">
      {/* skills data */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="my-subtitle w-full mt-10"
      >
        <Braces className="w-10 h-10 inline-block" />
        {`${t("title")}`}
      </motion.h2>
      {Object.entries(skillsData).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ y: -100, x: -100, opacity: 0 }}
          whileInView={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.1 + index * 0.1 }}
          className={`bg-card w-full md:w-1/2 lg:w-1/4 rounded-lg overflow-hidden shadow-2xl flex flex-col grow border-t-3 ${value.topborder}`}
        >
          {/* header */}
          <div className="bg-card-header px-4 py-4 uppercase flex rounded-lg">
            <div className="flex items-center justify-between gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5c5cda]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbe44e1]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00ca4d93]"></div>
            </div>
            <h3 className="my-text mx-auto">{value.title}</h3>
          </div>
          <div className="grid grid-cols-2 gap-8 px-2 py-4">
            {value.skills.map((hability) => (
              <div
                key={hability.name}
                className="flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 "
              >
                <div className="relative w-12 h-12">
                  <Image
                    src={hability.svg}
                    alt={hability.name}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <p className="my-label">{hability.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
