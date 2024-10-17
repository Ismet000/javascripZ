const defaulResult = 0;
let currentResult = defaulResult ;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator,resultBedoreCalc,calcNumber){
    const calcDescription = `${resultBedoreCalc}  ${operator}  ${calcNumber}`
    outputResult(currentResult,calcDescription)
}

function writeToLog(
    operationIdentifier,
    prevResult,
    opertaionNumber,
    newResult
){
    const logEntry ={
        operation: operationIdentifier,
        prevResult: prevResult,
        number: opertaionNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber
    createAndWriteOutput('+',initialResult,enteredNumber)
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function substract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber
    createAndWriteOutput('-',initialResult,enteredNumber)
    writeToLog('SUBSTRACT',initialResult,enteredNumber,currentResult);

} 

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber
    createAndWriteOutput('*',initialResult,enteredNumber)
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);

}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber
    createAndWriteOutput('/',initialResult,enteredNumber)
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);

}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


/* const defaulResult = 0;
let currentResult = defaulResult;


function add(num1, num2){
    const  result = num1 + num2;
    return result;
}



currentResult =  add(1,2); //(currentResult + 10) * 3 / 2 - 1;

let calaculationdescription = `(${defaulResult} + 10) * 3 / 2 -1` ; 

outputResult(currentResult, calaculationdescription);

 */
