document.getElementById('donation').addEventListener('click', function () {
  const historyInfo = document.getElementById('history-info')
  historyInfo.classList.add('hidden')
  const cardContainer = document.getElementById('cards-container')
  cardContainer.classList.remove('hidden')
  const donationButton = document.getElementById('donation')
  donationButton.classList.add('bg-[#B4F461]')
  const historyButton = document.getElementById('history')
  historyButton.classList.remove('bg-[#B4F461]')
})

document.getElementById('btn-noakhali').addEventListener('click', function (event) {
  event.preventDefault()
  const inputDonate = getInputValue('noakhali-input')
  const donationBalance = getTextValue('noakhali-donation')
  const updatedDonation = inputDonate + donationBalance
  const mainBalance = getTextValue('main-balance')
  const updatedMainBalance = mainBalance - inputDonate
  const inputField = document.getElementById('noakhali-input')

  if (isNaN(inputDonate) || inputDonate <= 0 || inputDonate > mainBalance || !inputField.value) {
    alert('Please Input valid Number')
    return



  }

  const heading = document.getElementById('noakhali-heading')
    

  const p = document.createElement('p')
  p.classList.add('font-bold','border','p-4','lg:w-1/2','w-5/6', 'mb-2', 'mx-auto','rounded-lg',)

  p.innerText = `${inputDonate} Taka is Donated for "${heading.innerText}"`


const timeP = document.createElement('p');
timeP.classList.add('font-mono','mb-4','w-5/6','mx-auto')

const now = new Date();
const dateTimeString = now.toLocaleString('en-BD', {
  weekday: 'short',
  timeZone: 'Asia/Dhaka',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZoneName: 'short'
  });


  timeP.innerText = `Date: ${dateTimeString}`;
  document.getElementById('history-info').appendChild(p)
  document.getElementById('history-info').appendChild(timeP)




  document.getElementById('main-balance').innerText = updatedMainBalance

  document.getElementById('noakhali-donation').innerText = updatedDonation

  const modal = document.getElementById("my_modal_1");
  modal.showModal();

  document.getElementById('closeModalBtn').addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('my_modal_1').close();
  });


})






document.getElementById('btn-feni').addEventListener('click', function (event) {
  event.preventDefault()
  const inputDonate = getInputValue('feni-input')
  const donationBalance = getTextValue('feni-donation')
  const updatedDonation = inputDonate + donationBalance
  const mainBalance = getTextValue('main-balance')
  const updatedMainBalance = mainBalance - inputDonate
  const inputField = document.getElementById('feni-input')


  if (isNaN(inputDonate) || inputDonate <= 0 || inputDonate > mainBalance || !inputField.value) {
    alert('Please Input valid Number')
    return

  }

    const heading = document.getElementById('feni-heading')
    
    
  const p = document.createElement('p')
  p.classList.add('font-bold','border','p-4','lg:w-1/2', 'mb-2', 'w-5/6', 'mx-auto','rounded-lg')
  p.innerText = `${inputDonate} Taka is Donated for "${heading.innerText}"`

const timeP = document.createElement('p');
timeP.classList.add('font-mono','mb-4','w-5/6','mx-auto')

const now = new Date();
const dateTimeString = now.toLocaleString('en-BD', {
  weekday: 'short',
  timeZone: 'Asia/Dhaka',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZoneName: 'short'
  });


  timeP.innerText = `Date: ${dateTimeString}`;
  document.getElementById('history-info').appendChild(p)
  document.getElementById('history-info').appendChild(timeP)



  document.getElementById('main-balance').innerText = updatedMainBalance

  document.getElementById('feni-donation').innerText = updatedDonation


  const modal = document.getElementById('my_modal_2');
  modal.showModal();

  document.getElementById('closeModalBtn2').addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('my_modal_2').close();
  });
})
document.getElementById('btn-quota')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const inputDonate = getInputValue('quota-input')
    const donationBalance = getTextValue('quota-donation')
    const updatedDonation = inputDonate + donationBalance
    const mainBalance = getTextValue('main-balance')
    const updatedMainBalance = mainBalance - inputDonate
    const inputField = document.getElementById('quota-input')


    if (isNaN(inputDonate) || inputDonate <= 0 || inputDonate > mainBalance || !inputField.value) {
      alert('Please Input valid Number')
      return
    }

  const heading = document.getElementById('quota-heading')
    
    
  const p = document.createElement('p')
  p.classList.add('font-bold','border','p-4','lg:w-1/2','mb-2', 'w-5/6', 'mx-auto','rounded-lg')

  p.innerText = `${inputDonate} Taka is Donated for "${heading.innerText}"`

  const timeP = document.createElement('p');
timeP.classList.add('font-mono','mb-4','w-5/6','mx-auto')

const now = new Date();
const dateTimeString = now.toLocaleString('en-BD', {
  timeZone: 'Asia/Dhaka',
  weekday: 'short',       
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  timeZoneName: 'short'
});


  timeP.innerText = `Date: ${dateTimeString}`;
  document.getElementById('history-info').appendChild(p)
  document.getElementById('history-info').appendChild(timeP)


    document.getElementById('main-balance').innerText = updatedMainBalance

    document.getElementById('quota-donation').innerText = updatedDonation



    const modal = document.getElementById("my_modal_3");
    modal.showModal();

    document.getElementById('closeModalBtn3').addEventListener('click', function (event) {
      event.preventDefault()
      document.getElementById('my_modal_3').close();
    });

  })