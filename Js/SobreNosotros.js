
    var fechas = ['Que somos?', 'Nuestras apps ', 'Nuestro futuro'];
    var textos = ['cómo empresa somos unos distribuidores que tratan de salir de lo convencional abriendo las puertas a una mayor variedad en cuanto a estilo y personalidad en una zapatilla, se busca tener un amplio catálogo sobre zapatillas retro y presentar la personalización de zapatillas al gusto del cliente.', 'La aplicación tiene varios apartados y una interfaz bastante intuitiva por lo que no sería algo complicado de entender para nuestros consumidores, se cuenta con un chat directo, un sistema de pedidos, un apartado de personalización y un apartado para comprar y participar en subastas de zapatillas únicas.', 'Cómo desarrolladores queremos dejar nuestra huella en lo que sería este proyecto ya que es algo nuevo e innovador para la empresa de zapatillas y queremos dar un toque moderno y sencillo a la aplicación y página web',];
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