var TOOLS = [
  { name: 'Счётчик символов', path: 'char-counter/' },
  { name: 'Генератор паролей', path: 'password-gen/' },
  { name: 'Транслитератор', path: 'translit/' },
  { name: 'Base64', path: 'base64/' },
  { name: 'URL Encode', path: 'url-encode/' },
  { name: 'Lorem Ipsum', path: 'lorem-ipsum/' },
  { name: 'Color Picker', path: 'color-picker/' },
  { name: 'Конвертер валют', path: 'currency/' },
  { name: 'Калькулятор дат', path: 'date-calc/' },
  { name: 'Конвертер единиц', path: 'unit-converter/' },
  { name: 'SEO Сниппет', path: 'snippet-gen/' },
  { name: 'Чек-листы', path: 'checklist/' }
];

function initToolsNav(currentPath) {
  var desktopNav = document.getElementById('toolsNav');
  var mobileNav = document.getElementById('toolsNavMobile');
  if (!desktopNav && !mobileNav) return;

  var base = '/tools/';

  TOOLS.forEach(function(t) {
    var isActive = t.path === currentPath;
    var link = document.createElement('a');
    link.href = base + t.path;
    link.textContent = t.name;
    if (isActive) link.className = 'nav-active';

    var li = document.createElement('li');
    li.appendChild(link);

    if (desktopNav) {
      var cloneLi = li.cloneNode(true);
      desktopNav.appendChild(cloneLi);
    }
    if (mobileNav) {
      var cloneLi2 = li.cloneNode(true);
      mobileNav.appendChild(cloneLi2);
    }
  });

  // Re-bind nav toggle after populating
  var navToggle = document.getElementById('navToggle');
  var navOverlay = document.getElementById('navOverlay');
  if (navToggle && navOverlay) {
    navToggle.addEventListener('click', function() {
      navOverlay.classList.toggle('open');
      navToggle.classList.toggle('active');
      document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : '';
    });
    document.querySelectorAll('#toolsNavMobile a').forEach(function(link) {
      link.addEventListener('click', function() {
        navOverlay.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    navOverlay.addEventListener('click', function(e) {
      if (e.target === navOverlay) {
        navOverlay.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}
