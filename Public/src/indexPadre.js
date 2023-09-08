import * as componentens from "./Components/indexHijo.js"

class AppContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML += `
        <nav-contain img="../imgRef/Epidemic Sound.png" starttest="Iniciar Prueba Gratuita"></nav-contain>

        <banner-contain title="La banda sonora perfecta para cada historia"
        text="Suscríbete para acceder a más de 40 000 pistas y 90 000 efectos de sonido, y
         <br>mejora tu contenido sin tener que preocuparte por derechos de autor, regalías ni
         <br>tarifas adicionales."
        start="Iniciar Prueba Gratuita"></banner-contain>

        <subs-contain
        plans="Nuestras suscripciones"
        annual="Pago Anual"
        monthly="Pago Mensual"
        kind="Personal"
        cost="US$9,99"
        month="/mes"
        element1="Publica en cualquier sitio de la web."
        element2="Monetiza 1 canal por plataforma"
        element3="Descargas ilimitadas"
        element4="Acceso a la aplicación móvil de Epidemic Sound"
        invoiced="*Facturado anualmente (US$ 119,88/año)"
        checkin="Registrarse"
        readmore="Leer mas"
        kind2="Comercial"
        cost2="US$ 19,99"
        paragraph="Todo lo incluido en el plan Personal, además de:"
        element5="Monetiza hasta 3 canales por plataforma"
        element6="Publicar contenidos para clientes y empresas"
        element7="Uso ilimitado en anuncios digitales"
        invoiced2="*Facturado anualmente (US$ 239,88/año)"
        kind3="Empresa"
        words="Solicita un presupuesto"
        paragraph2="Todo lo incluido en el plan Comercial, además de lo siguiente:"
        element8="Varias cuentas de usuario"
        element9="Todos los derechos cubiertos para programas de <br>televisión y anuncios"
        element10="Gerente de éxito del cliente y curación de música"
        element11="Condiciones de acuerdo personalizadas"
        communicate="Comunícate con Ventas"></subs-contain>

        <text-contain
        image="https://images.ctfassets.net/js6ap5wzepad/3NJGcIqyMiCqNT9JojOYhN/b75d0a48342c548b68b797eaffbee875/shutterstock_2160065843.jpg?w=875&fm=avif&q=80"
        titlee="Hay un plan para cada persona"
        message="¿Estás dando tus primeros pasos? ¿Quieres convertir los trabajos secundarios en principales? ¿Tienes necesidades más avanzadas, como monetizar varios canales, trabajar con clientes o musicalizar programas de televisión y anuncios? En cualquier caso, tenemos el plan perfecto."
        titlee2="Musicaliza en todas partes"
        message2="La musicalización con Epidemic Sound te permite publicar contenido de forma segura en cualquier parte de la web, incluidas las plataformas más grandes que existen, así como en sitios web, juegos, aplicaciones, pódcast y mucho más. <br><br>

        Mejor aún, el plan Comercial cubre hasta tres canales por plataforma; esto se traduce en menos idas y vueltas mientras editas los canales y más tiempo para concentrarte en contar tu historia. <br><br>

        Si produces contenido para otros, es fácil agregar el contenido publicado en sus canales a una lista segura. Esto significa que esas personas no recibirán reclamaciones de derechos de autor que afecten su derecho a monetizar su contenido.<br><br>

        ¿Necesitas musicalizar transmisiones, eventos en vivo y en persona, o explorar el metaverso? Con nuestro plan Empresarial, puedes obtener condiciones de acuerdo personalizadas."
        image2="https://images.ctfassets.net/js6ap5wzepad/3toBU3vncdErRko42quNxw/f81a89d057d64435379c42ded8f920d5/shutterstock_1914764536.jpg?w=875&fm=avif&q=80"
        ></text-contain>
        `
        }
}

customElements.define("app-container",AppContainer);