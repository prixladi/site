var setupLayout = () => {
  const sideArticle = document.getElementById('side');
  const basicArticle = document.getElementById('basic');
  const projectsSection = document.getElementById('projects');
  const contactForm = document.getElementById('contact-form');

  window.addEventListener('resize', () => {
    const { innerWidth: width } = window;

    if (width < 1400 && sideArticle.childNodes.length > 2) {
      sideArticle.removeChild(projectsSection);
      basicArticle.insertBefore(projectsSection, contactForm);
    } else if (width >= 1400 && sideArticle.childNodes.length === 2) {
      basicArticle.removeChild(projectsSection);
      sideArticle.appendChild(projectsSection);
    }
  });
};
