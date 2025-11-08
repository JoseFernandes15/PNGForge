import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelect } from "@/components/LanguageSelect";
import { ImageGenerator } from "@/components/ImageGenerator";
import { Language, translations } from "@/lib/translations";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="https://josefernandes.dev"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {t.backToPortfolio}
          </a>
          
          <div className="flex items-center gap-2">
            <LanguageSelect language={language} onChange={setLanguage} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight pb-2">
            {t.title.split(" - ")[0]}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </motion.div>

        <ImageGenerator language={language} />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          https://github.com/JoseFernandes15/PNGForge
        </div>
      </footer>
    </div>
  );
};

export default Index;
