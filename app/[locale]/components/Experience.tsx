import { getTranslations } from "next-intl/server";
import * as motion from "motion/react-client";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default async function Experience() {
  const t = await getTranslations("Experience");

  const experienceData = [
    {
      id: "applab",
      jobTitle: t("applab.jobTitle"),
      company: t("applab.company"),
      location: t("applab.location"),
      dates: t("applab.dates"),
      achievements: [
        t("applab.achievement1"),
        t("applab.achievement2"),
        t("applab.achievement3"),
        t("applab.achievement4"),
      ],
      color: "border-t-[#ff5c5cda]",
    },
    {
      id: "rour",
      jobTitle: t("rour.jobTitle"),
      company: t("rour.company"),
      location: t("rour.location"),
      dates: t("rour.dates"),
      achievements: [
        t("rour.achievement1"),
        t("rour.achievement2"),
        t("rour.achievement3"),
        t("rour.achievement4"),
      ],
      color: "border-t-[#00ca4d93]",
    },
    {
      id: "dacomp",
      jobTitle: t("dacomp.jobTitle"),
      company: t("dacomp.company"),
      location: t("dacomp.location"),
      dates: t("dacomp.dates"),
      achievements: [
        t("dacomp.achievement1"),
        t("dacomp.achievement2"),
        t("dacomp.achievement3"),
      ],
      color: "border-t-[#4362eeaf]",
    },
    {
      id: "cdc",
      jobTitle: t("cdc.jobTitle"),
      company: t("cdc.company"),
      location: t("cdc.location"),
      dates: t("cdc.dates"),
      achievements: [
        t("cdc.achievement1"),
        t("cdc.achievement2"),
        t("cdc.achievement3"),
      ],
      color: "border-t-[#ffbe44e1]",
    },
  ];

  return (
    <section className="my-container flex flex-col gap-y-8 w-full">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="my-subtitle w-full mt-10"
      >
        <Briefcase className="w-10 h-10 inline-block mr-3" />
        {t("title")}
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex items-stretch ">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.8,
          }}
          className="w-1 border-r-2 border-text-secondary"
        ></motion.div>
        <div className="flex flex-col gap-20">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 relative -top-1`}
            >
              {/* content */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.2,
                }}
                className="px-6 py-4 pt-0 col-span-4 "
              >
                <div className="absolute top-[4px] left-[-11px] w-5 h-5 rounded-full bg-primary"></div>

                <h3 className="my-text text-primary font-bold mb-1">
                  {experience.jobTitle}
                </h3>
                <p className="text-lg font-semibold text-text-primary mb-2">
                  {experience.company}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary flex-wrap">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.dates}</span>
                  </div>
                </div>
              </motion.div>

              <div className="px-6 py-4 col-span-8">
                <h4 className="font-semibold text-text-primary mb-3">
                  {t("keyAchievements")}
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: index * 0.2 + achievementIndex * 0.1,
                          duration: 0.5,
                        }}
                        className="flex items-start gap-2 text-text-secondary"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
