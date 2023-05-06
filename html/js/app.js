const h1 = document.querySelector(".hello h1");


console.dir(h1);

function handleH1Click() {
    h1.style.color = "blue";

}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";

}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

h1.onclick = handleH1Click;

h1.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);


function handleWindowCopy() {
    alert("copier!");
}

window.addEventListener("copy", handleWindowCopy);