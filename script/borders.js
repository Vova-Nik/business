
function rend() {
    [].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
}

document.addEventListener('DOMContentLoaded', function () {
    let bBtn = document.createElement("div");
    bBtn.innerHTML = "Get Borders";
    document.body.appendChild(bBtn);
    console.log("Created", bBtn)
    bBtn.style.backgroundColor = "tomato";
    bBtn.style.width = "160px";
    bBtn.style.height = "32px"
    bBtn.style.padding = "0 12px";
    bBtn.style.fontSize = "24px";
    bBtn.style.position = "fixed";
    bBtn.style.top = "256px";
    bBtn.style.lef = "16px";
    bBtn.style.cursor = "pointer";
    bBtn.style.borderRadius = "6px";
    bBtn.onclick = rend;
});
