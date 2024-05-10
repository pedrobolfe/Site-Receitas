const ratingInputs = document.querySelectorAll('.rating input');

ratingInputs.forEach(input => {
    input.addEventListener('click', () => {
        document.querySelector('.rating-value').textContent = input.value + " estrela(s)";
    });
});
