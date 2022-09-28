document.getElementById("methods").selectedIndex = -1;

// ########## HIDE AND SHOW FORMS FROM DROPDOWN WINDOW #########

const menst =  document.getElementById("menst")
const ultra =  document.getElementById("ultrasound")
const calc =  document.getElementById("calcular")

function HidebothForm(){
           menst.style.visibility = "hidden"; 
           ultra.style.visibility = "hidden";
           calc.style.visibility = "hidden"; 
}
function fun1() {

    const e = document.getElementById('methods');
    const selectedOption = e.options[e.selectedIndex].value;
    if(selectedOption == "menst")
          {
           ultra.style.visibility = "hidden";
           menst.style.visibility = "visible";
           calc.style.visibility = "visible";
            }

         else if(selectedOption == "ultrasound")
          {
           ultra.style.visibility = "visible";
           menst.style.visibility = "hidden";
           calc.style.visibility = "visible"; 
            }
else
{
HidebothForm();
}
}

// ########### TAKE INPUT DATA INTO CALCULATION ##############
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
function calculate(){
    const yourSelect = document.getElementById( "methods" );
    const today = new Date().toUTCString() //gets today's date and transforms into milliseconds
    const todayAbs = Math.abs(new Date(today).getTime())

    if(yourSelect.options[ yourSelect.selectedIndex ].value == "menst"){
        const inputMenstDate = document.getElementById('dateMenst').value //get input from html
        const dateMenst = new Date(inputMenstDate).toUTCString() //transform input into midnight on the day picked
        const utcInput = new Date(dateMenst).getTime()//transforms date into milliseconds 
        diffDays = Math.floor(((todayAbs - utcInput)/oneDay));// get the difference between milliseconds and transforms to days 
    }
    else if(yourSelect.options[ yourSelect.selectedIndex ].value == "ultrasound"){
        const inputUltraDate = document.getElementById('dateUltra').value
        const dateUltra = new Date(inputUltraDate).toUTCString()
        const utcInput = new Date(dateUltra).getTime()
        const weekAdd = parseInt(document.getElementById('weeks').value)*7*24 * 60 * 60 * 1000
        const dayAdd = (document.getElementById('days').value)*24 * 60 * 60 * 1000
        diffDays = Math.floor(((todayAbs - utcInput)+(weekAdd + dayAdd))/oneDay);
    }

    weeksAge = Math.floor(diffDays/7)
    daysAge = (diffDays%7)
    alert(`A idade gestacional é de ${weeksAge} semanas e ${daysAge} dias`)
}