//Até a data de entrega foi implementado corretamente apenas o voice input. Ainda requer implementar as entradas via button para operações básicas e científicas.
const opCallback = opName => () => {
    let currentVal = parseFloat($input.value);

    if(opName === "percent"){
        currentVal *= 0.01;
        $input.value = currentVal;
    }
    else{
        if(display && display.length){
            display.push({value: currentVal });
            const result = evaluate(display);

            display.push({value: result });
            display.push({value: opName});

            $input.value = "";
        }

        else{ 
             display.push({value: currentVal});
             display.push({value: opName});

             $input.value = "";
        }
    }
}
//Atribui o primeiro valor clicado, o operador clicado e o segundo valor clicado
const evaluate = display => {
    const secondOperand = display.pop().value;
    const operator = display.pop().value;
    const firstOperand = display.pop().value;


//Casos referentes ao operador clicado
switch (operator){
    case "add":
        return firstOperand + secondOperand;
        break;
    case "subtract":
        return firstOperand - secondOperand;
        break;
    case "divide":
        return Math.floor(firstOperand / secondOperand);
        break;
    case "multiply":
        return firstOperand * secondOperand;
        break;
    default:
        return secodeOperand;
    }
};
for (const opName of [ "add", "subtract", "multiply", "divide", "percent" ]){
    document.querySelector(`.op__key[op=${opName}]`).onclick = opCallback(opName);

}

document.querySelector(".eq__key").onclick = 
() => {
    if(display &&display.length) {
        display.push({value: parseFloat($input.value)
        });
        $input.value = evaluate(display);
    }
}


document.querySelector(".op__key[op=clear]")
.onclick = () => {
    $input.value = 0;
    display.length = 0;
};

document.querySelector(".op__key[op=negate]")
.onclick = () =>
($input.value = -parseFloat($input.value));

//Definir display
const display = [];

