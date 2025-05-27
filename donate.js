document.getElementById('donation').addEventListener('click',function(){
    const historyInfo = document.getElementById('history-info')
    historyInfo.classList.add('hidden')
    const cardContainer = document.getElementById('cards-container')
    cardContainer.classList.remove('hidden')
})

document.getElementById('btn-noakhali').addEventListener('click',function(event){
    event.preventDefault()
    const noakhaliDonateNumber = parseFloat(document.getElementById('noakhali-input').value)
    const noakhaliDonation = parseFloat (document.getElementById('noakhali-donation').innerText)
    const update = noakhaliDonateNumber + noakhaliDonation
    document.getElementById('noakhali-donation').innerText = update

    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const updatedBalance = mainBalance - noakhaliDonateNumber

    document.getElementById('main-balance').innerText = updatedBalance

})
document.getElementById('btn-feni').addEventListener('click', function(event){
    event.preventDefault()
    const inputDonate = getInputValue('feni-input')
    const quotaDonation = getTextValue('feni-donation')
    const updatedQoutaDonation = inputDonate + quotaDonation
    const mainBalance = getTextValue('main-balance')
    const updatedMainBalance = mainBalance - inputDonate
    

    document.getElementById('main-balance').innerText = updatedMainBalance
    
    document.getElementById('feni-donation').innerText = updatedQoutaDonation
})
document.getElementById('btn-quota')
.addEventListener('click', function(event){
    event.preventDefault()
    const inputDonate = getInputValue('quota-input')
    const quotaDonation = getTextValue('quota-donation')
    const updatedQoutaDonation = inputDonate + quotaDonation
    const mainBalance = getTextValue('main-balance')
    const updatedMainBalance = mainBalance - inputDonate
    

    document.getElementById('main-balance').innerText = updatedMainBalance
    
    document.getElementById('quota-donation').innerText = updatedQoutaDonation

})