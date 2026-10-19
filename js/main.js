// Calisthenix-Lab — thème clair/sombre uniquement (voir CDC §9.1)
// Le contenu reste lisible sans JavaScript : le thème suit alors le système.
(() => {
  const root = document.documentElement;
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const media = window.matchMedia("(prefers-color-scheme: light)");
  const current = () => root.dataset.theme || (media.matches ? "light" : "dark");

  const sync = () => {
    const isLight = current() === "light";
    button.setAttribute("aria-pressed", String(isLight));
    button.setAttribute("aria-label", isLight ? button.dataset.toDark : button.dataset.toLight);
    button.title = button.getAttribute("aria-label");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isLight ? "#f7f8f9" : "#0b0e12";
  };

  button.addEventListener("click", () => {
    const next = current() === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      /* stockage indisponible : le choix ne survivra pas à la navigation */
    }
    sync();
  });

  media.addEventListener("change", sync);
  sync();
})();
