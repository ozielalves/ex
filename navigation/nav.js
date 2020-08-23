const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')
  
  burguer.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach( (navLink, index) => {
      if(navLink.style.animation){
        navLink.style.animation = '';
      } else {
        navLink.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burguer Animation
    burguer.classList.toggle('toggle');
  });
}  

navSlide();