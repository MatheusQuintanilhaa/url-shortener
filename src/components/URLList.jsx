import React from "react";
import { Globe } from "lucide-react";
import URLResult from "./URLResult";

const URLList = ({ urls, onCopy, onDelete }) => {
  if (urls.length === 0) {
    return (
      <div className="text-center py-12">
        <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">
          Nenhuma URL encurtada ainda. Comece encurtando uma URL acima!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        URLs Encurtadas ({urls.length})
      </h2>
      {urls.map((url) => (
        <div key={url.id} className="relative">
          <URLResult
            shortUrl={url.shortUrl}
            originalUrl={url.originalUrl}
            clicks={url.clicks}
            onCopy={onCopy}
          />
          {onDelete && (
            <button
              onClick={() => onDelete(url.id)}
              className="absolute top-4 right-4 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition-colors z-10"
              title="Deletar URL"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default URLList;
