const resultados = document.getElementById("resultados");
const removeResults = () => {
    while (resultados.firstChild) {
        resultados.removeChild(resultados.lastChild);
    }
}


// document.getElementById("methods").selectedIndex = -1;

// ########## HIDE AND SHOW FORMS FROM DROPDOWN WINDOW #########

const menst = document.getElementById("menst");
const ultra = document.getElementById("ultrasound");
const calc = document.getElementById("calcular");
const options = document.getElementById("options")
const radio = document.querySelectorAll("input[type='radio']")

HidebothForm()

radio.forEach(element => {
    element.checked = false
})

console.log(menst.checked)
let method = 0

options.addEventListener("click", (evento) => {
    console.log(evento)

    if (evento.target.classList == "menstr") {
        method = 1
        ultra.style.visibility = "hidden";
        menst.style.visibility = "visible";
        calc.style.visibility = "visible";
        removeResults()
    } else if (evento.target.classList == "ultrasounds") {
        method = 2
        ultra.style.visibility = "visible";
        menst.style.visibility = "hidden";
        calc.style.visibility = "visible";
        removeResults()
    } else {
        HidebothForm();
    }
})


function HidebothForm() {
    menst.style.visibility = "hidden";
    ultra.style.visibility = "hidden";
    calc.style.visibility = "hidden";
}




calc.addEventListener("click", () => {
    calculate();
});

// ########### TAKE INPUT DATA INTO CALCULATION ##############
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
function calculate() {
    // const yourSelect = document.getElementById("methods");
    const today = new Date().toUTCString(); //gets today's date and transforms into milliseconds
    const todayAbs = Math.abs(new Date(today).getTime());

    if (method === 1) {
        const inputMenstDate = document.getElementById("dateMenst").value; //get input from html
        const dateMenst = new Date(inputMenstDate).toUTCString(); //transform input into midnight on the day picked
        const utcInput = new Date(dateMenst).getTime(); //transforms date into milliseconds
        diffDays = Math.floor((todayAbs - utcInput) / oneDay); // get the difference between milliseconds and transforms to days
    } else if (method === 2) {
        const inputUltraDate = document.getElementById("dateUltra").value;
        const dateUltra = new Date(inputUltraDate).toUTCString();
        const utcInput = new Date(dateUltra).getTime();
        const weekAdd =
            parseInt(document.getElementById("weeks").value) * (7 * 24 * 60 * 60 * 1000);
        const dayAdd = document.getElementById("days").value * 24 * 60 * 60 * 1000;
        diffDays = Math.floor((todayAbs - utcInput + (weekAdd + dayAdd)) / oneDay);
    }
    if (isNaN(diffDays) == true) {} else {
        weeksAge = Math.floor(diffDays / 7);
        daysAge = diffDays % 7;

        const expectDays = new Date();
        expectDays.setDate(expectDays.getDate() + (280 - diffDays))
        const utcDays = expectDays.toUTCString().slice(4, 16)

        removeResults()

        const idadeGestacional = document.createElement("p");
        idadeGestacional.classList.add("dpp");

        const tituloIdade = document.createElement("strong")
        tituloIdade.innerHTML = "Idade gestacional: ";
        idadeGestacional.appendChild(tituloIdade)

        idadeGestacional.innerHTML += `${weeksAge} semanas e ${daysAge} dias `;
        resultados.appendChild(idadeGestacional);

        const expectDate = document.createElement("p");
        expectDate.classList.add("expDate");
        const tituloExpDate = document.createElement("strong")
        tituloExpDate.innerHTML = "Data provável do parto: ";
        expectDate.appendChild(tituloExpDate)
        expectDate.innerHTML += `${utcDays }`;
        resultados.appendChild(expectDate);
    }

    // alert(`    A idade gestacional é de $ { weeksAge }    semanas e $ { daysAge }    dias `)
}