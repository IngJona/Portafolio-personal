// Animación suave al desplazarse por la página

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});



// Mensaje de bienvenida en consola

console.log(
    "🚀 Portafolio de Jhonatan C cargado correctamente"
);



// Animación cuando aparecen las tarjetas

const tarjetas = document.querySelectorAll(".card");


const observador = new IntersectionObserver((entradas)=>{


    entradas.forEach(entrada=>{


        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }


    });


});



tarjetas.forEach(tarjeta=>{

    observador.observe(tarjeta);

});
