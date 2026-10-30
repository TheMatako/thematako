(() => {
  const bar = document.querySelector("[data-scroll-progress]");
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const root = document.documentElement;
    const max = root.scrollHeight - root.clientHeight;
    bar.style.setProperty("--progress", max > 0 ? String(Math.min(1, root.scrollTop / max)) : "0");
    ticking = false;
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
})();
