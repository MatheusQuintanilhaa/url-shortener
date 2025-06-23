import React, { useState } from "react";
import { Link, Loader2 } from "lucide-react";

const URLShortenerForm = ({ onShorten, isLoading, error, onClearError }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (onClearError) onClearError();

    if (!url.trim()) {
      return;
    }

    await onShorten(url.trim());
    setUrl("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Encurte sua URL agora
          </h2>
          <p className="text-gray-600">
            Cole sua URL longa abaixo e receba um link curto em segundos
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Cole sua URL aqui (ex: google.com ou https://google.com)"
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                disabled={isLoading}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 ml-2">{error}</p>
              )}
            </div>
            <button
              onClick={handleSubmit}
              disabled={isLoading || !url.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Encurtando...
                </>
              ) : (
                <>
                  <Link className="w-5 h-5" />
                  Encurtar URL
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default URLShortenerForm;
