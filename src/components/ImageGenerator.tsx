import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Language, translations } from "@/lib/translations";

interface ImageGeneratorProps {
  language: Language;
}

export const ImageGenerator = ({ language }: ImageGeneratorProps) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { toast } = useToast();
  const t = translations[language];

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const response = await fetch(
        `https://gen-i.zepedrofernandessampaio.workers.dev/?${encodeURIComponent(prompt)}`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        variant: "destructive",
        title: t.errorTitle,
        description: t.errorMessage,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `pngforge-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <Textarea
          placeholder={t.placeholder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] resize-none text-lg"
          disabled={isGenerating}
        />
        
        <Button
          onClick={generateImage}
          disabled={isGenerating || !prompt.trim()}
          className="w-full text-lg h-14"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              {t.generating}
            </>
          ) : (
            t.generate
          )}
        </Button>
      </motion.div>

      <AnimatePresence mode="wait">
        {isGenerating && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-shimmer-start via-shimmer-end to-shimmer-start animate-shimmer" />
          </motion.div>
        )}

        {generatedImage && !isGenerating && (
          <motion.div
            key="image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-auto"
              />
            </div>
            
            <Button
              onClick={downloadImage}
              variant="secondary"
              className="w-full text-lg h-14"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.download}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
