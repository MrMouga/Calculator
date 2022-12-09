//.js file for calculator
//1. listen to all buttons and display them on screen when clicked -> buttonListener();displayOperation()
//2. save numbers and operators in variables -> num1, num2, operator
//3. when equals button or operator is clicked and num1, num2, operator are not null, the total is calculated and displayed on screen -> calculate(); getTotal()
//4. when user clicks on an operator after the total has been calculated, it can continue the equation with the total as num1 -> continueCalculation()



allSelectors();
buttonListener();
hoverButton();
hoverOffButton();
let num1='';
let num2='';
let operator='';
let total=''
let isDecimal=false;
const equation=document.querySelector(".equation");


//listeners for all buttons
function allSelectors(){
    result=document.querySelector(".result");
    allClear=document.querySelector("#allClear");
    equals=document.querySelector("#equals");
    decimal=document.querySelector("#decimal");
    percent=document.querySelector("#percent");
    divide=document.querySelector("#divide");
    multiply=document.querySelector("#multiply");
    subtract=document.querySelector("#subtract");
    add=document.querySelector("#add");
    digit0=document.querySelector("#digit-0");
    digit1=document.querySelector("#digit-1");
    digit2=document.querySelector("#digit-2");
    digit3=document.querySelector("#digit-3");
    digit4=document.querySelector("#digit-4");
    digit5=document.querySelector("#digit-5");
    digit6=document.querySelector("#digit-6");
    digit7=document.querySelector("#digit-7");
    digit8=document.querySelector("#digit-8");
    digit9=document.querySelector("#digit-9");
}

  //function to style button on hover
function hoverButton() {
    const buttons=document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", function(){
            button.style.backgroundColor="#acac9a";
            button.style.transform="scale(1.05)";
        })
    })
}

//function to style button on hover off
function hoverOffButton (){
    const buttons=document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mouseout", function(){
            button.style.backgroundColor="#2A2D38";
            button.style.transform="scale(1)";
        })
    })
    }

// function that takes in two numbers and an operator
function calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "×":
        return num1 * num2;
      case "÷":
        return num1 / num2;
      case "%":
        return num1 % num2;
      default:
        return null;
    }
  }


// Define a function that takes in a number or operator and displays it
function displayOperation(input) {

    saveNums(input);

    if (equation.firstChild.textContent=='0'){
        equation.removeChild(equation.firstChild)
    }

    let textNode=document.createTextNode(input)
    equation.appendChild(textNode);
}

// function that listens to all buttons and calls displayOperation function when clicked
function buttonListener(){

    digit0.addEventListener("click", function(){

        if (num1 != '' && num2 != '' && operator != '' && total == '') {

            const input = +digit0.textContent
            displayOperation(input)
        }
    })
     

    digit1.addEventListener("click", function(){

        if (total == '') {

            const input = +digit1.textContent
            displayOperation(input)
        }
    })

    digit2.addEventListener("click", function(){

        if (total == '') {
            const input = +digit2.textContent
            displayOperation(input)
        }     
    })

    digit3.addEventListener("click", function(){
        if (total == '') {
            const input = +digit3.textContent
            displayOperation(input)
        }
    })

    digit4.addEventListener("click", function(){
        if (total == '') {
            const input = +digit4.textContent
            displayOperation(input)
        }
    })

    digit5.addEventListener("click", function(){
        if (total == '') {
            const input = +digit5.textContent
            displayOperation(input)
        }
    })

    digit6.addEventListener("click", function(){
        if (total == '') {
            const input = +digit6.textContent
            displayOperation(input)
        }
    })

    digit7.addEventListener("click", function(){

        if (total == '') {

            const input = +digit7.textContent
            displayOperation(input)
        }

    })

    digit8.addEventListener("click", function(){

        if (total == '') {

            const input = +digit8.textContent
            displayOperation(input)
        }
    })

    digit9.addEventListener("click", function(){

        if (total == '') {

            const input = +digit9.textContent
            displayOperation(input)
        }
    })

    divide.addEventListener("click", function(){
        if(total!=''){
            operator='÷';
            continueCalculation(operator)
            result.textContent=num1;
        }

        else {

            if (operator==''){ 
                const input = divide.textContent
                displayOperation(input)
            }
            getTotal();
            operator='÷';
            continueCalculation(operator);
            result.textContent=num1;
        }

    })

    multiply.addEventListener("click", function(){

        
        if(total!=''){
            operator='×';
            continueCalculation(operator)
            result.textContent=num1;
        }

        else {

            if (operator==''){ 
                const input = multiply.textContent
                displayOperation(input)
            }
            getTotal();
            operator='×';
            continueCalculation(operator);
            result.textContent=num1;
        }
    })

    subtract.addEventListener("click", function(){
        
        if(total!=''){
            operator='-';
            continueCalculation(operator)
            result.textContent=num1;
        }

        else {

            if (operator==''){ 
                const input = subtract.textContent
                displayOperation(input)
            }
            getTotal();
            operator='-';
            continueCalculation(operator);
            result.textContent=num1;
        }
    })

    add.addEventListener("click", function(){

        if(total!=''){
            operator='+';
            continueCalculation(operator)
            result.textContent=num1;
        }

        else {

            if (operator==''){ 
                const input = add.textContent
                displayOperation(input)
            }
            getTotal();
            operator='+';
            continueCalculation(operator);
            result.textContent=num1;
        }

     
    })

    percent.addEventListener("click", function(){
        

        if(total!=''){
            operator='%';
            continueCalculation(operator)
            result.textContent=num1;
        }

        else {

            if (operator==''){ 
                const input = percent.textContent
                displayOperation(input)
            }
            getTotal();
            operator='%';
            continueCalculation(operator);
            result.textContent=num1;
        }
    })

    decimal.addEventListener("click", function(){

    if (equation.lastChild.textContent!='.' && Number.isInteger(num1) || Number.isInteger(num2)){
        
        const input = decimal.textContent   
        isDecimal=true;
        displayOperation(input)
    }

    })

    allClear.addEventListener("click", function(){
        clearDisplay();
    })

    equals.addEventListener("click", function(){
        getTotal();
    })
}


// function that clears the display
function clearDisplay() {
    equation.textContent = "0";
    result.textContent = "";
    num1='';
    num2='';
    operator='';
    total=''
  }

//function to save num1, num2 and operator from display

function saveNums(input){
    if (!isNaN(input)) {
        if (num1 ==''|| operator==''){
             num1 = +(''+ num1 + input)
            }
    
        else {
            num2 = +(''+ num2 + input)
        }
        }

    else if(isDecimal==true && num2==''){
        num1= num1+'.';
        isDecimal=false;
    }

    else if(isDecimal==true){
        num2= num2+'.';
        isDecimal=false;
    }
    
    else {
    operator=input;
    }
}    

//function to calculate the equation and get the total
function getTotal(){

    if (num1!=''&& num2!=''&& operator!=''&& total==''){
        total=calculate(num1, operator, num2);
        result.textContent=total;
        num1=total;
    }
}

//function to pursue the calculation after the total has been calculated
function continueCalculation(operator){
    if (num1!=''&& num2!=''&& operator!=''&& total!=''){

        equation.textContent = '0';
        result.textContent = "";
        num1=total;
        displayOperation(num1);
        displayOperation(operator);
        num2='';
        total='';
    }
}

// listeners for keyboard input
document.addEventListener('keydown', (event) => {
	
	let getOperators = {
		'/': 'divide',
		'x': 'multiply',
		'*': 'multiply',
		'%': 'percent',
		'+': 'add',
		'-': 'subtract'
	}

	if(!isNaN(event.key) && event.key !== ' '){
		document.getElementById(`digit-${event.key}`).click();
	}
	if (['/', 'x', '+', '-', '*', '%'].includes(event.key)) {
		document.getElementById(getOperators[event.key]).click();
	}
	if (event.key === 'Backspace' || event.key ==='c' || event.key === 'C') {
		document.getElementById('allClear').click();	
	}
	if (event.key === '=' || event.key === 'Enter') {
		document.getElementById('equals').click();	
	}
	if (event.key === '.') {
		document.getElementById('decimal').click();	
	}
});


///


