// Feature-Icons: beim Hovern zur animierten GIF-Version wechseln
document.querySelectorAll('img[data-hover]').forEach((img) => {
  const staticSrc = img.dataset.static;
  const hoverSrc = img.dataset.hover;
  img.addEventListener('mouseenter', () => { img.src = hoverSrc; });
  img.addEventListener('mouseleave', () => { img.src = staticSrc; });
});

// Bilder gegen einfaches Speichern abschrecken (kein echter Schutz, nur Hürde)
document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('contextmenu', (e) => e.preventDefault());
  img.addEventListener('dragstart', (e) => e.preventDefault());
});
