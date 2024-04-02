
var platos = ['Dale una oportunidad a RetroPanda', 'Dale una oportunidad a RetroPanda', 'Dale una oportunidad a RetroPanda', 'Dale una oportunidad a RetroPanda', 'Dale una oportunidad a RetroPanda', 'Dale una oportunidad a RetroPanda', 'Dale una oportunidad a RetroPanda'];
var textos = ['Entendemos que tus zapatos no son solo accesorios, son una expresión única de tu personalidad y estilo. Nos enorgullece ofrecer una experiencia exclusiva en el mundo de los zapatos retro, combinando la nostalgia de los diseños clásicos con la moderna ventaja de la personalización', 'Entendemos que tus zapatos no son solo accesorios, son una expresión única de tu personalidad y estilo. Nos enorgullece ofrecer una experiencia exclusiva en el mundo de los zapatos retro, combinando la nostalgia de los diseños clásicos con la moderna ventaja de la personalización.', 'La pizza gigante es una versión masiva de este clásico plato italiano, ofreciendo una experiencia de sabor abrumadora y perfecta para grandes reuniones.', 'Los tacos de cazuela son tacos con carne cocinada lentamente en salsa, servidos con ingredientes frescos.', 'Las tortas al pastor son sándwiches mexicanos rellenos de carne de cerdo marinada y asada, usualmente acompañados de piña, cebolla, cilantro y salsa.', 'Una parrillada familiar es una comida al aire libre donde se cocinan carnes y vegetales en una parrilla, perfecta para disfrutar en compañía.', 'La sopa de frijoles es un plato reconfortante hecho con frijoles cocidos en caldo sazonado, a menudo acompañado de cebolla, ajo y especias, perfecto para calentar el cuerpo en días fríos.'];
var imagenes = ['Img/1.png', 'Img/2.png', 'Img/3.png', 'Img/4.png', 'Img/5.png', 'Img/6.png', 'Img/7.png'];
var currentIndex;

function cambiarTexto() {
    var fecha = new Date();
    currentIndex = fecha.getDay() - 1; // Restamos 1 porque los días de la semana se indexan desde 0
    if (currentIndex < 0) currentIndex = 6; // Si el día es domingo, currentIndex será -1, lo ajustamos a 6 (Domingo)
    document.getElementById("Djobi").innerText = platos[currentIndex];
    document.getElementById("Djoba").innerText = textos[currentIndex];
    document.getElementById("Djobe").src = imagenes[currentIndex];
}

window.onload = function () {
    cambiarTexto(); // Llamar a la función al cargar la página
    setInterval(cambiarTexto, 1000 * 60 * 60 * 24); // Cambiar cada 24 horas
};