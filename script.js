// Manejo del formulario de cita
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const message = `Hola, soy ${name}. Me gustaría agendar una cita para el ${date} a las ${time}.`;
    const whatsappUrl = `https://wa.me/5545357150?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
});

// Detectar el scroll y aplicar estilo al elemento activo
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Obtener todos los enlaces de la barra de navegación
    var navLinks = document.querySelectorAll('header nav ul li a');

    // Iterar sobre los enlaces para verificar la posición de cada sección
    navLinks.forEach(function(link) {
        var sectionId = link.getAttribute('href').substring(1);
        var section = document.getElementById(sectionId);

        if (
            section.offsetTop <= scrollPosition + 150 &&
            section.offsetTop + section.offsetHeight > scrollPosition + 150
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
