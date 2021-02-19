/*
* Excercise 1
*
*/

/*
* Then write a function that changes the text and the color inside the div
*
*/

const box = document.getElementById("color-block");
const text = document.getElementById("color-name");
box.addEventListener("click", changeColor);

function changeColor(){
    //Write a condition determine what color it should be changed to
 
        //change the background color using JS
        //Change the text of the color using the span id color-name
        const cl = box.getAttribute("id");
        console.log(cl)

        if (cl === "color-block") {
            box.setAttribute("id", "color-block-color2");
            text.innerText = "#F08080";
        } 
        
        else {
            box.setAttribute("id", "color-block");
            text.innerText = "#00FAD4";
        }
          
        //change the background color using JS
        //Change the text of the color using the span id color-name

}

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
let inputnum = document.getElementById("f-input");
let outputans = document.getElementById("c-output");
let submitbtn = document.getElementById("convertbtn");
submitbtn.addEventListener("click", convertTemp);

function convertTemp(){
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    let ftemp = parseFloat(inputnum.value);
    let ctemp = (ftemp - 32) * 5 / 9;
    outputans.innerText = ctemp;

}


