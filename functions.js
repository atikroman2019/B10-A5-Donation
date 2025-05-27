function getInputValue(id){
    const inputDonate = document.getElementById(id).value
    const inputDonateNumber = parseFloat(inputDonate)
    return inputDonateNumber
   
}
function getTextValue(id){
    const donation = document.getElementById(id).innerText
    const donationNumber = parseInt(donation)
    return donationNumber
}