const clock = document.querySelector("h2#clock")



function getClock() {
    const date = new Date(); // 현재 시간을 알려준다.
    const hours = String(date.getHours()).padStart(2, "0"); // padStart(2, "0") : 2자리 숫자가 아니면 앞에 0을 붙여준다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); 

