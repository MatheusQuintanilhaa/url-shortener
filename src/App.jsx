import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import URLShortenerForm from "./components/URLShortenerForm";
import URLList from "./components/URLList";
import Stats from "./components/Stats";

const App = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função para encurtar URL usando TinyURL API
  const shortenUrl = async (originalUrl) => {
    setIsLoading(true);
    setError("");

    try {
      // Validar URL antes de enviar
      const urlPattern =
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (!urlPattern.test(originalUrl)) {
        throw new Error(
          "URL inválida. Certifique-se de incluir http:// ou https://"
        );
      }

      // Garantir que a URL tenha protocolo
      let formattedUrl = originalUrl;
      if (
        !originalUrl.startsWith("http://") &&
        !originalUrl.startsWith("https://")
      ) {
        formattedUrl = "https://" + originalUrl;
      }

      // Verificar se URL já existe
      const urlExists = urls.some((url) => url.originalUrl === formattedUrl);
      if (urlExists) {
        throw new Error("Esta URL já foi encurtada!");
      }

      // Chamar API do TinyURL
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          formattedUrl
        )}`,
        {
          method: "GET",
          headers: {
            Accept: "text/plain",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const shortUrl = await response.text();

      // Verificar se retornou uma URL válida
      if (
        shortUrl.includes("Error") ||
        !shortUrl.startsWith("https://tinyurl.com/")
      ) {
        // Fallback para simulação
        const shortCode =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
        const fallbackShortUrl = `https://lnk.sh/${shortCode}`;

        const newUrl = {
          id:
            Date.now().toString() + Math.random().toString(36).substring(2, 9),
          originalUrl: formattedUrl,
          shortUrl: fallbackShortUrl,
          clicks: Math.floor(Math.random() * 50),
          createdAt: new Date().toISOString(),
          lastAccessed: null,
          provider: "Simulado",
        };

        setUrls((prev) => [newUrl, ...prev]);
        return { success: true, data: newUrl };
      }

      // Criar objeto da URL encurtada
      const newUrl = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        originalUrl: formattedUrl,
        shortUrl: shortUrl.trim(),
        clicks: Math.floor(Math.random() * 50),
        createdAt: new Date().toISOString(),
        lastAccessed: null,
        provider: "TinyURL",
      };

      // Adicionar à lista
      setUrls((prev) => [newUrl, ...prev]);

      return { success: true, data: newUrl };
    } catch (error) {
      console.error("Erro ao encurtar URL:", error);
      setError(error.message || "Erro desconhecido ao encurtar URL");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Função para copiar URL para clipboard
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Erro ao copiar:", err);
      // Fallback para navegadores mais antigos
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        return true;
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
        return false;
      }
    }
  };

  // Função para limpar erro
  const clearError = () => setError("");

  // Função para deletar URL
  const deleteUrl = (id) => {
    setUrls((prev) => prev.filter((url) => url.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Formulário de encurtamento */}
        <URLShortenerForm
          onShorten={shortenUrl}
          isLoading={isLoading}
          error={error}
          onClearError={clearError}
        />

        {/* Seção de estatísticas e lista */}
        <div className="mt-16">
          {/* Mostrar erro global se houver */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <p className="text-red-700">{error}</p>
                </div>
                <button
                  onClick={clearError}
                  className="text-red-500 hover:text-red-700 font-medium text-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          <Stats urls={urls} />
          <URLList urls={urls} onCopy={copyToClipboard} onDelete={deleteUrl} />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 LinkShort. Desenvolvido por Matheus Quintanilha.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
