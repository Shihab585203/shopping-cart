// get product price amount for sub total price
function getTextElementById(elementId){
    const productTotalElement = document.getElementById(elementId);
    const currentProductTotalString = productTotalElement.innerText;
    const currentProductTotal = parseInt(currentProductTotalString);

    return currentProductTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// calculate sub total amount
function calculateSubTotal(){
    //calculate sub total
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    //calculate Tax Amount
    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    const taxAmountInt = parseFloat(taxAmount);
    setTextElementValueById('tax-amount', taxAmount);

    //calculate Total Amount
    const finalTotal = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal);
}