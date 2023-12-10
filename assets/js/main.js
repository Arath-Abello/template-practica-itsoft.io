
window.addEventListener('load', function () {
    const spinner = document.querySelector('.spinner-contenedor');
    spinner.style.opacity = '0';

    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);

});

//*pageYOffset devuelve el número de píxeles que el documento se ha desplazado verticalmente.
//*Por ejemplo, si el valor de pageYOffset es 100, significa que el usuario ha desplazado el documento hacia abajo 100 píxeles desde la parte superior del área visible del navegador.
const fondo_nav_color = document.getElementById('mi-nav');
const logo_rojo = document.getElementById('img-logo1');
const logo_blanco = document.getElementById('img-logo2');

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 20) {
        fondo_nav_color.classList.add("fondo-rojo"); //* cambia a color de fondo rojo
        fondo_nav_color.classList.remove("fondo-blanco"); //* elimina color de fondo blanco
        logo_rojo.style.display = 'none'; //* quito el logo rojo si baja más de 100px
        logo_blanco.style.display = 'block'; //*y muestro el logo blanco para que sea vea junto al fondo rojo del nav

    } else {
        fondo_nav_color.classList.add("fondo-blanco"); //* cambia a color de fondo blanco
        fondo_nav_color.classList.remove("fondo-rojo"); //* elimina color de fondo rojo
        logo_rojo.style.display = 'block';
        logo_blanco.style.display = 'none';

    }

});