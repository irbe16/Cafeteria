/*const vermas_btn = document.getElementById ("verMas_btn")
const verMas = document.getElementById ("verMas")



vermas_btn.addEventListener("click" , toggleText)

function toggleText(){
    verMas.classList.toggle("ulcard")

    if( verMas.classList.contains("ulcard")){
        vermas_btn.innerHTML = "VER MAS"
    }

    else{
        vermas_btn.innerHTML = "VER MENOS" 
    }
}
*/

document.querySelectorAll(".verMas_btn").forEach(button => {
    button.addEventListener("click", toggleText);
});

function toggleText(event) {
    const button = event.currentTarget;
    const targetId = button.getAttribute("data-target");
    const content = document.getElementById(`verMas_${targetId}`);

    content.classList.toggle("d-none");

    if (content.classList.contains("d-none")) {
        button.innerHTML = "LEER MAS";
    } else {
        button.innerHTML = "LEER MENOS";
    }
}


