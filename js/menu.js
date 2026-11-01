// Abre y cierra el menú en el móvil.
document.addEventListener('DOMContentLoaded', function () {
  var boton = document.querySelector('.hamburguesa');
  var menu = document.querySelector('nav.menu');
  if (!boton || !menu) return;
  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
  menu.addEventListener('click', function (ev) {
    if (ev.target.closest('a')) {
      menu.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
    }
  });
});

// Contador "Visto" de las noticias: suma una visita y muestra el total.
// Va a workers.dev (Cloudflare) porque la web también se sirve desde GitHub Pages, que no ejecuta código.
document.addEventListener('DOMContentLoaded', function () {
  var visto = document.querySelector('[data-visto]');
  if (!visto || !window.fetch) return;
  fetch('https://mariatenisclub-web.luis-asesoriaseguros.workers.dev/api/visto/' + visto.getAttribute('data-visto'), { method: 'POST' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (d) visto.textContent = Number(visto.getAttribute('data-base')) + d.n;
    })
    .catch(function () {});
});
