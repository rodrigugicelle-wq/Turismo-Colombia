//--------------------------
// mensaje personalizado
//--------------------------
function mensajeBienvenida() {
    const mensaje = document.getElementById("mensaje-bienvenida");
    const hora = new Date().getHours();
    const idioma = document.getElementById("idioma").value;

    let texto = "";

    if (hora < 12) {
        texto = idioma == "es" ? "Buenos dias, bienvenido a Colombia" 
                               : "Good morning, welcome to Colombia";
    }
    else if (hora < 18) {
        texto = idioma == "es" ? "Buenas tardes, disfruta tu visita" 
                               : "Good afternoon, enjoy your visit";
    }
    else {
        texto = idioma == "es"  ? "Buenas noches, gracias por visitarnos" 
                                : "Good evening, thanks for visiting";
    }

    mensaje.textContent = texto;
}

document.getElementById("idioma").addEventListener("change", mensajeBienvenida);
mensajeBienvenida();


//------------------------
// Botones "Ver mas"
//------------------------
document.querySelectorAll(".btn-ver-mas").forEach(btn => {
    btn.addEventListener("click", () => {
        const info = btn.parentElement.querySelector(".info-adicional");
        info.classList.toggle("visible");
        btn.textContent = info.classList.contains("visible") 
        ? "Ver menos" 
        : "Ver mas";
    });
});


//------------------------
// Slider automatico y manual
//-------------------------
let indice = 0;
const slides = document.querySelectorAll(".slide");


function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

// Boton siguiente
document.getElementById("next").onclick = () => {
    indice= (indice + 1) % slides.length;
    mostrarSlide(indice);
};

// Boton anterior
document.getElementById("prev").onclick = () => {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarSlide(indice);
};


// Automatico
setInterval(() => {
    indice = (indice +1) % slides.length;
    mostrarSlide(indice);
}, 4000);

// Mostrar primero 
mostrarSlide(0);
