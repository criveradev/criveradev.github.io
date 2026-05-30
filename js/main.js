    // Reveal de elementos al cargar y al hacer scroll
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    // Hero visible de inmediato
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'));

    // Menú hamburguesa móvil
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
      const closeMenu = () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      };
      toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      // Cerrar el menú al tocar un enlace
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    }

    // Menú desplegable "Recursos"
    const dropdown = document.getElementById('recursosDropdown');
    if (dropdown) {
      const dToggle = dropdown.querySelector('.dropdown-toggle');
      dToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle('open');
        dToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      // Cerrar al hacer clic fuera del desplegable
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
          dToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
