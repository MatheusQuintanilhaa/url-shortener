import React from "react";
import { Zap, Shield, BarChart3 } from "lucide-react";

const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Encurte seus links com
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {" "}
          estilo
        </span>
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Transforme URLs longas em links curtos e elegantes. Monitore cliques,
        analise performance e compartilhe com confiança.
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-blue-500" />
          <span>Super rápido</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span>100% seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-purple-500" />
          <span>Analytics detalhados</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
