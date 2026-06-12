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
  var base = '/tools/';
  var w = window.innerWidth;

  // Desktop sidebar
  var sidebar = document.getElementById('toolsSidebar');
  if (sidebar && w >= 1024) {
    TOOLS.forEach(function(t) {
      var a = document.createElement('a');
      a.href = base + t.path;
      a.textContent = t.name;
      if (t.path === currentPath) a.className = 'nav-active';
      sidebar.appendChild(a);
    });
  }

  // Tablet pills
  var pillsContainer = document.getElementById('toolsPills');
  if (pillsContainer && w >= 769 && w < 1024) {
    TOOLS.forEach(function(t) {
      var a = document.createElement('a');
      a.href = base + t.path;
      a.textContent = t.name;
      if (t.path === currentPath) a.className = 'nav-active';
      pillsContainer.appendChild(a);
    });
  }

  // Mobile overlay
  var desktopNav = document.getElementById('toolsNav');
  var mobileNav = document.getElementById('toolsNavMobile');

  if (mobileNav) {
    var extraLinks = [
      { name: 'На главную axiiom.ru', href: '/' },
      { name: 'Все инструменты', href: '/tools/' },
      { name: 'New Version →', href: 'https://bestdeejay-design.github.io/agents/' }
    ];
    extraLinks.forEach(function(e) {
      var a = document.createElement('a');
      a.href = e.href;
      a.textContent = e.name;
      var li = document.createElement('li');
      li.className = 'nav-extra-link';
      li.appendChild(a);
      mobileNav.appendChild(li);
    });
    // Separator
    var sep = document.createElement('li');
    sep.className = 'nav-separator';
    mobileNav.appendChild(sep);
  }

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

  // Nav toggle
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
