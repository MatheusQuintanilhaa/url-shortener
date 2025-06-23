import React from "react";
import { Link2 } from "lucide-react";

const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Link2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LinkShort
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Analytics
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            API
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
