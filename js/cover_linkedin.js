

// document.querySelector('#showMore').addEventListener('click', function() {
//     const hiddenText = document.querySelector('.hidden');
//     hiddenText.classList.toggle('hidden');

//     if (hiddenText.classList.contains('hidden')) {
//         this.textContent = 'Show More';
//     } else {
//         this.textContent = 'Show Less';
//     }
// });




document.querySelector('#showMore').addEventListener('click', function() {
    const hiddenText = document.querySelector('.display-type');
    hiddenText.classList.toggle('hidden');

    if (hiddenText.classList.contains('hidden')) {
        this.textContent = 'Show More';
    } else {
        this.textContent = 'Show Less';
    }
});


