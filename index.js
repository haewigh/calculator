let a, b, c;

function toAdd(a,b){
    return +a + +b;
}

function toSubtract(a,b){
    return a-b;
}

function toMultiply(a,b){
    return a*b;
}

function toDivide(a,b){
    return (a/b).toFixed(10);
}

function operate(str){
    if (str.includes("+")){
        const str_list = str.split("+")
        return(toAdd(str_list[0],str_list[1]))
    }else if (str.includes("-")){
        const str_list = str.split("-")
        return(toSubtract(str_list[0],str_list[1]))
    }else if (str.includes("*")){
        const str_list = str.split("*")
        return(toMultiply(str_list[0],str_list[1]))
    }else if (str.includes("/")){
        const str_list = str.split("/")
        return(toDivide(str_list[0],str_list[1]))
    }
    
}

const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")
let value1 = ''

function clear(){
    display.textContent=""
    value1 = ""
}

buttons.forEach(button=>{button.addEventListener("click", ()=>{
    const input1 = button.textContent;
    if (input1 =="C"){
        clear()
    }else if (input1 =="="){
        value1 = operate(value1)
        display.textContent=value1;
    }else if (input1=="del"){
        value1=value1.slice(0,-1)
        display.textContent=value1;
    }
    else {
        value1 += input1
        display.textContent=value1;
    }
    })
})