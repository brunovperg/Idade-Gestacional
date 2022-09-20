document.getElementById("methods").selectedIndex = -1;

// ########## HIDE AND SHOW FORMS FROM DROPDOWN WINDOW #########

function HidebothForm(){
document.getElementById("menst").style.visibility = "hidden"; 
           document.getElementById("ultrasound").style.visibility = "hidden";
           document.getElementById("calcular").style.visibility = "hidden"; 
}
function fun1() {

    var e = document.getElementById('methods');
    var selectedOption = e.options[e.selectedIndex].value;
    if(selectedOption == "menst")
          {
           document.getElementById("ultrasound").style.visibility = "hidden";
           document.getElementById("menst").style.visibility = "visible";
            }

         else if(selectedOption == "ultrasound")
          {
           document.getElementById("ultrasound").style.visibility = "visible";
           document.getElementById("menst").style.visibility = "hidden"; 
            }
else
{
HidebothForm();
}
}

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

// ########### TAKE INPUT DATA INTO CALCULATION ##############
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
function calculate(){
    const yourSelect = document.getElementById( "methods" );
    if(yourSelect.options[ yourSelect.selectedIndex ].value == "menst"){
        const inputMenstDate = document.getElementById('dateMenst').value
        const dateMenst = new Date(inputMenstDate)
        const utcDate1 = Math.abs(Date.UTC(inputMenstDate.slice(2,4),inputMenstDate.slice(5,7),inputMenstDate.slice(8,10)));

        const today = new Date().getTime()
        const todayAbs = Math.abs(today)
        diffDays = Math.floor((((todayAbs) - (dateMenst))/oneDay)-1);
        weeksAge = Math.floor(diffDays/7)
        daysAge = (diffDays%7)
        alert(`A idade gestacional é de ${weeksAge} semanas e ${daysAge} dias`)
    }
    else if(yourSelect.options[ yourSelect.selectedIndex ].value == "ultrasound"){
        const inputUltraDate = document.getElementById('dateUltra').value
        const dateUltra = new Date(inputUltraDate)
        const utcDate1 = Math.abs(Date.UTC(inputUltraDate.slice(2,4),inputUltraDate.slice(5,7),inputUltraDate.slice(8,10)));
        const weekAdd = parseInt(document.getElementById('weeks').value)*7*24 * 60 * 60 * 1000
        const dayAdd = (document.getElementById('days').value)*24 * 60 * 60 * 1000
        const today = new Date().getTime()
        const todayAbs = Math.abs(today)
        diffDays = Math.floor((((todayAbs - dateUltra)+(weekAdd + dayAdd))/oneDay)-1);
        weeksAge = Math.floor(diffDays/7)
        daysAge = (diffDays%7)
        alert(`A idade gestacional é de ${weeksAge} semanas e ${daysAge} dias`)
    }
}