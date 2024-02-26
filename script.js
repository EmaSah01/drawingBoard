
const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d");

canvas.style.border = "1px solid black";


const broj = document.getElementById("text");
const crtajButton = document.getElementById("crtaj");
const ocistiButton = document.getElementById("ocisti");

const colorSelect = document.getElementById("colorSelect");
const shapeSelect = document.getElementById("shapeSelect");

function crtaj() {

    const selectedColor = colorSelect.value;
    context.strokeStyle = selectedColor;

    if ( shapeSelect.value === "kruznica") {
        for(let i = 0 ; i < broj.value ; i++) {
            const x1 = Math.random() * 400;
            const x2 = Math.random() * 400;
            const radius = Math.random() * 100;

            context.beginPath();
            context.arc(x1,x2, radius,0, Math.PI * 2);
            context.stroke();
        }
    }

    else if (shapeSelect.value === "trougao") {
        for(let i = 0 ; i < broj.value ; i++) {

            const x1 = Math.random() * 400;
            const x2 = Math.random() * 400;
            const y1 = Math.random() * 400;
            const y2 = Math.random() * 400;
            const x3 = Math.random() * 400;
            const y3 = Math.random() * 400;
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2,y2);
            context.lineTo(x3,y3);
            context.closePath();
            context.stroke();
        }
    }

}

function ocisti() {
    context.clearRect(0,0,400,400);
}


crtajButton.addEventListener("click" , crtaj);
ocistiButton.addEventListener("click" , ocisti);