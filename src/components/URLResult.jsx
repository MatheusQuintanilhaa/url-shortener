import React, { useState } from "react";
import { Copy, BarChart3, ExternalLink } from "lucide-react";

const URLResult = ({ shortUrl, originalUrl, clicks, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await onCopy(shortUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="text-sm font-medium text-gray-500">
              URL Original:
            </span>
            <p className="text-gray-700 truncate">{originalUrl}</p>
          </div>
          <div className="mb-2">
            <span className="text-sm font-medium text-gray-500">
              URL Encurtada:
            </span>
            <div className="flex items-center gap-2">
              <p className="text-blue-600 font-medium">{shortUrl}</p>
              <button
                onClick={handleCopy}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  copied
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
                title={copied ? "Copiado!" : "Copiar URL"}
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            {copied && (
              <p className="text-green-600 text-sm mt-1">URL copiada!</p>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span>{clicks} cliques</span>
            </div>
            <div className="flex items-center gap-1">
              <ExternalLink className="w-4 h-4" />
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Testar link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLResult;
