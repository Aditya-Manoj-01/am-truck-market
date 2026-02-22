"use client";
import { useState, useEffect } from "react";

const languages = [
  { code: "hi", label: "हिंदी", name: "Hindi" },
  { code: "en", label: "English", name: "English" },
  { code: "mr", label: "मराठी", name: "Marathi" },
  { code: "te", label: "తెలుగు", name: "Telugu" },
  { code: "kn", label: "ಕನ್ನಡ", name: "Kannada" },
  { code: "gu", label: "ગુજરાતી", name: "Gujarati" },
  { code: "ur", label: "اردو", name: "Urdu" },
];

export default function LanguageModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("preferred_language");
    if (!saved) setShow(true);
  }, []);

  function selectLanguage(code: string) {
    localStorage.setItem("preferred_language", code);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🚛</div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            अपनी भाषा चुनें
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Choose your preferred language
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-gray-100 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 cursor-pointer group"
            >
              <span className="text-xl font-bold text-gray-800 group-hover:text-orange-500">
                {lang.label}
              </span>
              <span className="text-xs text-gray-400 mt-1">{lang.name}</span>
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          You can change language anytime from the menu
        </p>
      </div>
    </div>
  );
}