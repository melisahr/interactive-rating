const nums = document.querySelectorAll('.nums li');
const submit = document.querySelector('.submit');
const selected = document.getElementById('rate');
const rating = document.querySelector('.rating');
const feedback = document.querySelector('.feedback');

let rate= null;

nums.forEach((nums) => {
    nums.addEventListener('click', (e) =>{
        const active = document.querySelector('.checked');
    if(active){
        active.classList.remove('checked')
    }
    const card = e.target;
    card.classList.add('checked');
    rate = e.target.innerText;
    })
})

submit.addEventListener('click', () => {
    if (rate){
       selected.innerText = rate;
       rating.classList.add('hidden');
       feedback.classList.remove('hidden');
    }
})