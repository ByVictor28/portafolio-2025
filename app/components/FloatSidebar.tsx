"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Home, Code, Briefcase, Mail, Languages, Menu, X } from "lucide-react";
import * as motion from "motion/react-client";

interface FloatSidebarProps {
  locale: string;
}

export default function FloatSidebar({ locale }: FloatSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const t = useTranslations("Navigation");
  const router = useRouter();
  const pathname = usePathname();

  const sections = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "habilities", icon: Code, label: t("services") },
    { id: "experience", icon: Briefcase, label: t("work") },
    { id: "contact", icon: Mail, label: t("contact") },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "habilities", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-card p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
      >
        {/* Language Toggle */}
        <div className="bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="bg-card p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group"
            title={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
          >
            <Languages className=" text-primary group-hover:text-white transition-colors" />
          </motion.button>
        </div>

        {/* Section Navigation */}
        <div className="bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 last:mb-0 transition-all duration-200 group relative ${
                  isActive
                    ? "bg-primary text-black shadow-lg"
                    : "text-primary hover:bg-primary/20 hover:text-white"
                }`}
                title={section.label}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 right-0 h-full w-80 bg-card shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-primary">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-primary/20 transition-colors"
            >
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Language Toggle */}
          <div className="mb-8">
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-primary/20 transition-colors group"
            >
              <Languages className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              <span className="text-primary group-hover:text-white transition-colors">
                {locale === "en" ? "Español" : "English"}
              </span>
            </button>
          </div>

          {/* Section Navigation */}
          <div className="space-y-2">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;

              return (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-black shadow-lg"
                      : "text-primary hover:bg-primary/20 hover:text-white"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-medium">{section.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
