import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Language } from "@/lib/translations";

interface LanguageSelectProps {
  language: Language;
  onChange: (lang: Language) => void;
}

export const LanguageSelect = ({ language, onChange }: LanguageSelectProps) => {
  return (
    <Select value={language} onValueChange={(value) => onChange(value as Language)}>
      <SelectTrigger className="rounded-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none">
        <SelectValue placeholder="Lang" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="pt">PT</SelectItem>
        <SelectItem value="it">IT</SelectItem>
        <SelectItem value="es">ES</SelectItem>
        <SelectItem value="fr">FR</SelectItem>
        <SelectItem value="de">DE</SelectItem>
        <SelectItem value="zh">ZH</SelectItem>
        <SelectItem value="ja">JA</SelectItem>
        <SelectItem value="ru">RU</SelectItem>
      </SelectContent>
    </Select>
  );
};
