import React from "react";
import { Link2, TrendingUp, BarChart3 } from "lucide-react";

const Stats = ({ urls }) => {
  const totalUrls = urls.length;
  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);
  const avgClicks = totalUrls > 0 ? Math.round(totalClicks / totalUrls) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Link2 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">URLs Encurtadas</p>
            <p className="text-2xl font-bold text-gray-900">{totalUrls}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center">
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">
              Total de Cliques
            </p>
            <p className="text-2xl font-bold text-gray-900">{totalClicks}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center">
          <div className="bg-purple-100 p-3 rounded-lg">
            <BarChart3 className="w-6 h-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">
              Média de Cliques
            </p>
            <p className="text-2xl font-bold text-gray-900">{avgClicks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
