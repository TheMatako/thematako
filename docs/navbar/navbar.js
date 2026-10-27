/**
 * Dynamic Navbar Loader & Event Manager
 */
document.addEventListener('DOMContentLoaded', async () => {
  const placeholder = document.getElementById('navbar-placeholder');

  if (!placeholder) return;

  try {
    const response = await fetch('navbar/navbar.html');
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    
    placeholder.innerHTML = await response.text();

    initNavbarFeatures();
  } catch (error) {
    console.error('Error while loading navbar :', error);
  }
});

function initNavbarFeatures() {
  const scrollIndicator = document.getElementById('scrollIndicator');
  const langToggle = document.getElementById('langToggle');
  const langText = document.getElementById('langText');
  const menuToggle = document.getElementById('menuToggle');

  const updateScrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0 && scrollIndicator) {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const progressPercent = (currentScroll / totalHeight) * 100;
      scrollIndicator.style.width = `${progressPercent}%`;
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  if (langToggle && langText) {
    langToggle.addEventListener('click', () => {
      const currentLang = langText.textContent.trim();
      const newLang = currentLang === 'EN' ? 'FR' : 'EN';
      langText.textContent = newLang;
    });
  }

}