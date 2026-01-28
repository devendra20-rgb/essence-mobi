"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,zh-CN,hi,ar,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 🔥 FORCE OPEN DROPDOWN
  const openTranslateMenu = () => {
    const el = document.querySelector(
      ".goog-te-gadget-simple",
    ) as HTMLElement | null;

    if (el) {
      el.click();
    }
  };

  return (
    <div
      onClick={openTranslateMenu}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      {/* Visible custom UI */}
      <span className="text-slate-800 font-extrabold text-sm">Language</span>

      {/* Hidden Google Element */}
      <div
        id="google_translate_element"
        className="absolute opacity-0 pointer-events-none"
      />
    </div>
  );
}
