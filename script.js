// alert("Hola este es mi Javascript")

let name = "Daniel";
console.log(name);
const mainTitle = document.getElementById("main-title");
// mainTitle.innerHTML = name

const card = document.querySelector(".card")

// Conditionals

let titleText = mainTitle.innerHTML;

if (titleText === "") {
    mainTitle.innerHTML = name + " is Learning...";
} else {
    console.log("no se cumple");
}

if (titleText === "") {
    const aboutMe = document.getElementById("about-me").querySelector("h2");
    console.log(aboutMe.innerHTML);
    aboutMe.innerHTML = "TESTING..."
}

// Functions

let paragraph = document.getElementById("about-me-paragraph");


function changeText(name, city, hobby) {
    let content = `Mi nombre es ${name}, nací y vivo en ${city} soy programador fullstack tengo 24 años, he trabajado en la industria de la tecnologia programando ya por más de 3 años y actualmente busco fortalecer mis conocimientos previos y conocer más personas apasionadas por el mundo de la tecnología. Me gusta ${hobby}`
    return content;
}
let city = "Bogotá";
let hobby = "escuchar musica electronica y algunas veces ser DJ"

paragraph.innerHTML = changeText(name, city, hobby)

const burgerItem = document.getElementById("check")
const menuItem = document.getElementById("menu").querySelector("ul")
console.log(burgerItem)
burgerItem.onclick = () => {
    menuItem.classList.toggle("active")

}


// form logic

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 2) {
        warnings += `Tu nombre debe contener más de 2 caracteres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});