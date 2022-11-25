let hBtn = document.querySelector(".btn")

hBtn.addEventListener("mouseover", (e)=> {
    let x = (e.pageX - hBtn.offsetLeft )
    let y = (e.pageY - hBtn.offsetTop )
    hBtn.style.setProperty("--xPos", x + "px")
    hBtn.style.setProperty("--yPos", y + "px")
})