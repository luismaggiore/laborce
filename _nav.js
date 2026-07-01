// Dropdown de nav "Servicios": abre/cierra con click (no hover)
document.querySelectorAll('.nav-dropdown > a').forEach(function (toggle) {
  var wrap = toggle.parentElement;

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    var isOpen = wrap.classList.contains('open');

    // cierra otros dropdowns abiertos
    document.querySelectorAll('.nav-dropdown.open').forEach(function (openWrap) {
      if (openWrap !== wrap) openWrap.classList.remove('open');
    });

    wrap.classList.toggle('open', !isOpen);
  });
});

// cierra al hacer click afuera
document.addEventListener('click', function (e) {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (openWrap) {
      openWrap.classList.remove('open');
    });
  }
});

// cierra con Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (openWrap) {
      openWrap.classList.remove('open');
    });
  }
});
