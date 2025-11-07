export const translations = {
  en: {
    title: "PNGForge - AI Image Generator",
    subtitle: "Transform your ideas into stunning images",
    placeholder: "Type your prompt…",
    generate: "Generate",
    generating: "Generating…",
    download: "Download",
    backToPortfolio: "← Back to Portfolio",
    errorTitle: "Generation Failed",
    errorMessage: "Failed to generate image. Please try again.",
  },
  pt: {
    title: "PNGForge - Gerador de Imagens IA",
    subtitle: "Transforma as tuas ideias em imagens incríveis",
    placeholder: "Escreve o teu prompt…",
    generate: "Gerar",
    generating: "A gerar…",
    download: "Descarregar",
    backToPortfolio: "← Voltar ao Portfólio",
    errorTitle: "Falha na Geração",
    errorMessage: "Falha ao gerar imagem. Por favor tenta novamente.",
  },
};

export type Language = keyof typeof translations;
