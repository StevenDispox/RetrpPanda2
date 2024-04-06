
    var fechas = ['Que somos?', 'Nuestras apps ', 'Nuestro futuro'];
    var textos = ['cómo empresa somos unos distribuidores que tratan de salir de lo convencional abriendo las puertas a una mayor variedad en cuanto a estilo y personalidad en una zapatilla, se busca tener un amplio catálogo sobre zapatillas retro y presentar la personalización de zapatillas al gusto del cliente.', 'La aplicación tiene varios apartados y una interfaz bastante intuitiva por lo que no sería algo complicado de entender para nuestros consumidores, se cuenta con un chat directo, un sistema de pedidos, un apartado de personalización y un apartado para comprar y participar en subastas de zapatillas únicas.', 'Finalmente, en el año 2005, "La Cazuela" abre sus puertas al público. Con un menú cuidadosamente seleccionado de platos tradicionales y un ambiente acogedor, el restaurante se convierte en un destino popular para los amantes de la auténtica cocina regional.',];
    var currentIndex = 0;

    function actualizarTexto() {
        document.getElementById("Djobi").innerText = fechas[currentIndex];
        document.getElementById("Djoba").innerText = textos[currentIndex];
    }

    function avanzar() {
        if (currentIndex < fechas.length - 1) {
            currentIndex++;
            actualizarTexto();
        }
    }

    function retroceder() {
        if (currentIndex > 0) {
            currentIndex--;
            actualizarTexto();
        }
    }
    actualizarTexto();