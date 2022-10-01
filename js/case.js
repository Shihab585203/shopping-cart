function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber -1;
    }
    
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(caseNumber) {
    const caseTotalAmount = caseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalAmount;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(caseNumber);

    calculateSubTotal();
    

})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(caseNumber);

    calculateSubTotal();
})