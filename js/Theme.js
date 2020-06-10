var setupTheme = () => {
  theme = localStorage.getItem('theme');

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
  toggleSwitch.checked = theme == "dark";
};