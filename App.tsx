import React, { useState, useEffect } from 'react';
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Results from './pages/Results';
import Contact from './pages/Contact';
import AILoader from './components/AILoader';
import { PageView, GenerationConfig, ThumbnailData } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedThumbnails, setGeneratedThumbnails] = useState<ThumbnailData[]>([]);
  const [lastConfig, setLastConfig] = useState<GenerationConfig | null>(null);
  
  // State to sync Animation and API Data
  const [isDataReady, setIsDataReady] = useState(false);

  const extractTitleFromPrompt = (prompt: string): string => {
    const quotedMatch = prompt.match(/["']([^"']+)["']/);
    if (quotedMatch && quotedMatch[1]) {
        return quotedMatch[1].toUpperCase();
    }
    return prompt.split(' ').slice(0, 4).join(' ').toUpperCase();
  };

  const getRandomFont = () => {
    const fonts = ['font-impact', 'font-comic', 'font-fun', 'font-marker', 'font-display'];
    return fonts[Math.floor(Math.random() * fonts.length)];
  };

  const constructEnhancedPrompt = (userPrompt: string, style: string) => {
    let styleSpecifics = "Hyper-realistic photorealism, 8k resolution, Unreal Engine 5 render style.";
    let lightingAndMood = "Masterful cinematic lighting, soft bokeh, professional studio contrast.";
    
    let textInstruction = "Do not render overlay text. Focus on the raw visual subject.";
    const hasQuotedText = /["']([^"']+)["']/.test(userPrompt);
    if (hasQuotedText) {
        textInstruction = "Incorporate the text from the prompt quotes into the scene contextually (e.g. on a glowing screen or as physical 3D text in the room).";
    }

    // Enhanced Accuracy Injection for Hardware
    let hardwarePriority = "";
    const lowerPrompt = userPrompt.toLowerCase();
    if (lowerPrompt.includes("iphone")) {
        hardwarePriority = `
        HARDWARE ACCURACY OVERRIDE: 
        - Device: Modern high-end iPhone (iPhone 17 Pro Max style).
        - Details: Sleek titanium/glass body, razor-thin bezels, accurate 'Dynamic Island' on front. 
        - Camera: Large triple-lens camera bump on the back with sapphire glass textures. 
        - Finish: Metallic sheen, reflective surfaces, impeccable build quality.
        - DO NOT provide a generic or off-brand phone. Must be a 100% accurate iPhone representation.
        `;
    }

    if (style.includes("Anime")) {
        styleSpecifics = "High-budget anime film style, Studio MAPPA aesthetic, intricate detail, 4k digital art.";
        lightingAndMood = "Dynamic volumetric lighting, vibrant saturation, high contrast.";
    } else if (style.includes("3D")) {
        styleSpecifics = "C4D / Octane Render, Pixar-grade textures, soft subsurface scattering, clean geometry.";
    }

    return `ACT AS A MASSIVE AI VISUAL AGENT.
    
    GOAL: Create a viral, high-CTR YouTube thumbnail of the highest professional quality.
    
    PRIMARY SUBJECT: ${userPrompt}
    ${hardwarePriority}
    STYLE PREFERENCE: ${style}
    
    MANDATORY EXECUTION STANDARDS:
    - PRODUCT ACCURACY: All brands and specific items must be 100% accurate to real-world design language.
    - COMPOSITION: Central subject must dominate the frame, conveying intense emotion or curiosity.
    - VISUAL HIERARCHY: Clear focal point, complementary color palette (e.g. Electric Blue vs Warm Orange).
    - DETAIL: ${styleSpecifics}
    - LIGHTING: ${lightingAndMood}
    - TEXT HANDLING: ${textInstruction}
    - HUMAN ELEMENTS: If a person is shown, facial expressions must be extremely vivid (shock, awe, fear, joy) with perfect anatomical accuracy.
    `;
  };

  const handleGenerate = async (config: GenerationConfig) => {
    setLastConfig(config);
    setIsGenerating(true);
    setIsDataReady(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = constructEnhancedPrompt(config.prompt, config.style);
      
      const safetySettings = [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
      ];

      const promises = Array.from({ length: 4 }).map(async (_, index) => {
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: [{ text: prompt + `\n\nVARIATION_SEED_${index + 1}: Alternate camera angle and unique environmental lighting.` }]
                },
                config: {
                    safetySettings: safetySettings,
                    imageConfig: {
                        aspectRatio: "16:9"
                    }
                }
            });

            let imageUrl = '';
            if (response.candidates?.[0]?.content?.parts) {
                for (const part of response.candidates[0].content.parts) {
                    if (part.inlineData && part.inlineData.data) {
                        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
                        break;
                    }
                }
            }

            if (!imageUrl) throw new Error("Null Frame");

            return {
                id: `agent-out-${Date.now()}-${index}`,
                imageUrl: imageUrl,
                title: extractTitleFromPrompt(config.prompt),
                style: config.style,
                score: 0.90 + (Math.random() * 0.08),
                font: getRandomFont()
            };

        } catch (error) {
            console.error(`Node ${index} error:`, error);
            return {
                id: `err-${index}`,
                imageUrl: `https://picsum.photos/seed/${index + Date.now()}/1280/720`,
                title: "RETRY REQUIRED",
                style: config.style,
                score: 0.0,
                font: 'font-sans'
            };
        }
      });

      const results = await Promise.all(promises);
      setGeneratedThumbnails(results);
      setIsDataReady(true);

    } catch (error) {
        setIsGenerating(false);
        alert("Agent connection failed. Check neural link (API Key).");
    }
  };

  const onLoaderFinished = () => {
    setIsGenerating(false);
    setCurrentPage('results');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'generate': return <Generate onGenerate={handleGenerate} />;
      case 'results': return <Results thumbnails={generatedThumbnails} onBack={() => setCurrentPage('generate')} onRegenerate={() => lastConfig && handleGenerate(lastConfig)} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-violet-500/30">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {isGenerating && <AILoader isDataReady={isDataReady} onAnimationComplete={onLoaderFinished} />}
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;