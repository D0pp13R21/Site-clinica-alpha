// Adicione uma classe "ativo" ao link do menu de navegação atual
var links = document.querySelectorAll('nav ul li a');
var currentPath = window.location.pathname;

links.forEach(function(link) {
  if (link.pathname === currentPath) {
    link.classList.add('ativo');
  }
});

// Adicione um evento de clique ao botão de menu responsivo
var menuButton = document.querySelector('.menu-button');
var navList = document.querySelector('nav ul');

menuButton.addEventListener('click', function() {
  navList.classList.toggle('mostrar');
});