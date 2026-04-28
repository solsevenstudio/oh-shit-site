// src/PageMeta.jsx
// Sets <title> and <meta name="description"> on each page mount.
// No extra packages required.
import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description — create if missing
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // Open Graph (helps social sharing)
    const setOG = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
  }, [title, description]);

  return null;
}
