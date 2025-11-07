import { Button } from "./ui/button";
import { Language } from "@/lib/translations";

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="rounded-full"
      aria-label="Toggle language"
    >
      <span className="text-xs font-medium">{language.toUpperCase()}</span>
    </Button>
  );
};
