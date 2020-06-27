document.addEventListener('DOMContentLoaded', (e) => {
  // intialize with light theme
  document.documentElement.setAttribute('data-theme', 'light');

  // grab button
  const themeSwitcher = document.getElementById('theme-switcher');

  themeSwitcher.addEventListener('click', () => {
    // select current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // switch theme
    const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // change attribute
    document.documentElement.setAttribute('data-theme', switchToTheme);
  });
});