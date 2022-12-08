let calculationArray = [];
let firstOperand=0;
let secondOperand;
// let calculationNumber= 0;
let total = 0;
let lastOperator="";
const buttons=document.querySelectorAll(".button");

hoverButton();
hoverOffButton();
allSelectors();
buttonClick();
// operate();
// getLastOperator();




// function getLastOperator(){

//     // for each button, if it is an operator, set lastOperator to the operator
//     buttons.forEach((button) => {
//         button.addEventListener("click", function(){
//             if (operation.lastChild.textContent =="+" || operation.lastChild.textContent =="-" || operation.lastChild.textContent =="*" || operation.lastChild.textContent =="/"){
//                 lastOperator=operation.lastChild.textContent;
//             }
//         })
//     })
// }





//function to style button on hover
function hoverButton() {

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



//listeners for all buttons
function allSelectors(){
    operation=document.querySelector(".operation");
    result=document.querySelector(".result");
    allClear=document.querySelector("#allClear");
    clear=document.querySelector("#clear");
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

// function to display numbers on screen and push to array when clicked
function buttonClick(){

    digit0.addEventListener("click", function(){
        if (operation.firstChild.textContent != "0"){
        let textNode=document.createTextNode("0")
        operation.appendChild(textNode);
        calculationArray.push(0);
        }

    });

    digit1.addEventListener("click", function(){

        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);

        }

            let textNode=document.createTextNode("1")
            operation.appendChild(textNode);
            calculationArray.push(1); 
        
    })

    digit2.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("2")
        operation.appendChild(textNode) 
        calculationArray.push(2);
           
    })

    digit3.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("3")
        operation.appendChild(textNode)
        calculationArray.push(3);

     
        
    })

    digit4.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("4")
        operation.appendChild(textNode)
        calculationArray.push(4); 

    })

    digit5.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("5")
        operation.appendChild(textNode)
        calculationArray.push(5);
    })

    digit6.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("6")
        operation.appendChild(textNode)   
        calculationArray.push(6);   
    })

    digit7.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("7")
        operation.appendChild(textNode) 
        calculationArray.push(7);

           
    
    })

    digit8.addEventListener("click", function(){
        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("8")
        operation.appendChild(textNode)   
        calculationArray.push(8);   
    })

    digit9.addEventListener("click", function(){

        if (operation.firstChild.textContent=="0" && operation.lastChild.textContent=="0"){
            operation.removeChild(operation.firstChild);
        }

        let textNode=document.createTextNode("9")
        operation.appendChild(textNode)
        calculationArray.push(9);    
    })

    clear.addEventListener("click", function(){

        operation.removeChild(operation.lastChild);
        calculationArray.pop();

        if (operation.firstChild == null){
            let textNode=document.createTextNode("0")
            operation.appendChild(textNode) 
        }

        
    })

    allClear.addEventListener("click", function(){
        while (operation.hasChildNodes()) {
            operation.removeChild(operation.firstChild);
          }

        calculationArray = [];

        if (operation.firstChild == null){
            let textNode=document.createTextNode("0")
            operation.appendChild(textNode) 
        }
        
    })



    divide.addEventListener("click", function(){
        if (operation.lastChild.textContent != "+" && operation.lastChild.textContent != "-" && operation.lastChild.textContent != "*" & operation.lastChild.textContent != "/" && operation.lastChild.textContent != "%"&& operation.lastChild.textContent != ".") {   
        
        let textNode=document.createTextNode("/")
        operation.appendChild(textNode)
        calculationArray.push("/")
    }
    })

    multiply.addEventListener("click", function(){
        if (operation.lastChild.textContent != "+" && operation.lastChild.textContent != "-" && operation.lastChild.textContent != "*" && operation.lastChild.textContent != "/" && operation.lastChild.textContent != "%"&& operation.lastChild.textContent != ".") {   
        
        let textNode=document.createTextNode("*")
        operation.appendChild(textNode) 
        calculationArray.push("*")

        } 
    })

    subtract.addEventListener("click", function(){
        if (operation.lastChild.textContent != "+" && operation.lastChild.textContent != "-" && operation.lastChild.textContent != "*" && operation.lastChild.textContent != "/" && operation.lastChild.textContent != "%"&& operation.lastChild.textContent != ".") {   
        
        let textNode=document.createTextNode("-")
        operation.appendChild(textNode) 
        calculationArray.push("-")
        
        }
    })

    add.addEventListener("click", function(){
        if (operation.lastChild.textContent != "+" && operation.lastChild.textContent != "-" && operation.lastChild.textContent != "*" && operation.lastChild.textContent != "/" && operation.lastChild.textContent != "%"&& operation.lastChild.textContent != ".") {   
        
        let textNode=document.createTextNode("+")
        operation.appendChild(textNode) 
        calculationArray.push("+")

        } 
    })

    percent.addEventListener("click", function(){
        if (operation.lastChild.textContent != "+" && operation.lastChild.textContent != "-" && operation.lastChild.textContent != "*" && operation.lastChild.textContent != "/" && operation.lastChild.textContent != "%"&& operation.lastChild.textContent != ".") {   
        
        let textNode=document.createTextNode("%")
        operation.appendChild(textNode) 
        calculationArray.push("%")
        } 
    })
    
    decimal.addEventListener("click", function(){
        if (operation.lastChild.textContent != "+" && operation.lastChild.textContent != "-" && operation.lastChild.textContent != "*" && operation.lastChild.textContent != "/" && operation.lastChild.textContent != "%"&& operation.lastChild.textContent != ".") {   
        
        let textNode=document.createTextNode(".")
        operation.appendChild(textNode)
        calculationArray.push(".")
        }
    })

}

//    equals.addEventListener("click", function(){
 
//     })



// rajouter puissance + cas particulier avec -





// function operate(){



// percent.addEventListener("click", function(){
//     calculationNumber= +calculationArray.join("")
//     calculationArray=[];

// })

// add.addEventListener("click", function(){
//     calculationNumber= +calculationArray.join("")
//     calculationArray=[];
//     total += calculationNumber;


// })


// subtract.addEventListener("click", function(){
//     calculationNumber= +calculationArray.join("")
//     calculationArray=[];
//     total -= calculationNumber;

// })


// multiply.addEventListener("click", function(){
//     calculationNumber= +calculationArray.join("")
//     calculationArray=[];


// })

// divide.addEventListener("click", function(){
//     calculationNumber= +calculationArray.join("")
//     calculationArray=[];

// })

// equals.addEventListener("click", function(){

//     if (result.firstChild != null){
//     result.removeChild(result.firstChild);
//     }

//     calculationNumber= +calculationArray.join("");
//     calculationArray=[];

//     if (lastOperator=="+"){
//         total += calculationNumber;
//         }
    
//         else if (lastOperator=="-"){
//         total -= calculationNumber;
//         }


//     textNode=document.createTextNode(total);
//     result.appendChild(textNode) 
//     calculationNumber=0;

// })

// }


// buttons.forEach((button) => {
//         button.addEventListener("click", function(){






var mathFunction = {
    '+': function(a, b) {
            return a + b;
        },
     '*': function(a, b) {
            return a * b;
        },
    '-': function(a, b) {
            return a - b;
        },
    '/': function(a, b) {
            return a / b;
        },
    '%': function(a, b) {
            return a % b;
        },
    '^': function(a, b) {
            return a ^ b;
        }
    }