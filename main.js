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

// ########### TAKE INPUT DATA INTO CALCULATION ##############
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
function calculate(){
    var yourSelect = document.getElementById( "methods" );
    if(yourSelect.options[ yourSelect.selectedIndex ].value == "menst"){
        let inputMenstDate = document.getElementById('dateMenst').value
        let dateMenst = new Date.UTC(inputMenstDate)
        const today = new Date.UTC()
        // diffDays =((today - dateMenst));
        alert(today)
    }
}