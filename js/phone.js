function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}


function updatePhoneTotalPrice(phoneNumber){
    const phoneTotalAmount = phoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalAmount;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneNumber = updatePhoneNumber(true);
    
    updatePhoneTotalPrice(phoneNumber);

    calculateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(phoneNumber);

    calculateSubTotal();
})