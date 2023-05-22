function clock(){
    let timetext = document.querySelector(".time");
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");

    timetext.innerHTML = `${hours} : ${minutes}`;
}
setInterval(clock, 1000);