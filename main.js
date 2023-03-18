
$(document).ready(function() {
  $('nav ul.navbar-nav li.nav-item a').click(function(e) {
    e.preventDefault(); // Evita que el enlace navegue a la página
    if (!$(this).hasClass('current')) { // Comprueba si el enlace clicado no tiene la clase "current"
      $('nav ul.navbar-nav li.nav-item a.current').removeClass('current'); // Quita la clase "current" del enlace actual
      $(this).addClass('current'); // Agrega la clase "current" al enlace clicado
      window.location.href = $(this).attr('href'); // Navega a la página indicada en el atributo href
    }
    else {
      // Si el enlace clicado ya tiene la clase "current", no es necesario hacer nada
    }
  });
});


const navToggle = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

navToggle.addEventListener('click', function() {
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
  } else {
    navMenu.classList.add('show');
  }
});






