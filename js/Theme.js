var setupTheme = () => {
  theme = localStorage.getItem('theme');
  if (!theme) {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
      theme = 'dark';
    else theme = 'light';
  }

  document.documentElement.setAttribute('data-theme', theme);

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  toggleSwitch.addEventListener('change', switchTheme, false);
  toggleSwitch.checked = theme == 'dark';
};
