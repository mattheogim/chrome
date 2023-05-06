const title = document.querySelector(".hello h1");


console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";

}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";

}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.onclick = handleTitleClick;

title.onmouseenter = handleMouseEnter;

title.addEventListener("mouseleave", handleMouseLeave);