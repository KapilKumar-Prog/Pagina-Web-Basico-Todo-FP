const reveals = document.querySelectorAll('.reveal');         /* Selecciona todos los elementos con la clase 'reveal' */

function revealOnScroll() {                                   /* Función que se ejecuta al hacer scroll para revelar elementos */
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(element => {                                /* Recorre cada elemento con la clase 'reveal' */
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {                             /* Si la parte superior del elemento está por debajo del punto de activación, agrega la clase 'active' */
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);            /* Agrega un evento de scroll que llama a la función revealOnScroll */
revealOnScroll();

const menuToggle = document.getElementById('menu-toggle');    /* Selecciona el elemento con el id 'menu-toggle' */
const nav = document.getElementById('nav');                   /* Selecciona el elemento con el id 'nav' */      

if (menuToggle && nav) {                                      /* Verifica que ambos elementos existan antes de agregar el evento de clic */
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

const btnTop = document.getElementById('btn-top');            /* Selecciona el elemento con el id 'btn-top' */

window.addEventListener('scroll', () => {                     /* Agrega un evento de scroll que llama a la función animateCounters */
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

if (btnTop) {                                                 /* Verifica que el elemento btnTop exista antes de agregar el evento de clic */
  btnTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

const counters = document.querySelectorAll('.counter');       /* Selecciona todos los elementos con la clase 'counter' */

function animateCounters() {                                  /* Función que anima los contadores incrementando su valor hasta el objetivo definido en el atributo 'data-target' */
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (current < target) {                                   /* Si el valor actual es menor que el objetivo, incrementa el valor del contador y llama a la función nuevamente después de un breve retraso */
      counter.innerText = current + increment;
      setTimeout(animateCounters, 30);
    } else {
      counter.innerText = target;
    }
  });
}

animateCounters();                                            /* Llama a la función animateCounters para iniciar la animación de los contadores al cargar la página */