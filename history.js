document.getElementById('history').addEventListener('click',function(){
    console.log()
    const historyInfo = document.getElementById('history-info')
    historyInfo.classList.remove('hidden')
    const cardContainer = document.getElementById('cards-container')
    cardContainer.classList.add('hidden')
})