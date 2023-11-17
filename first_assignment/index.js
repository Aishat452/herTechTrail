const textChanges = document.querySelectorAll('p');

textChanges.forEach((changeTextStyle) => {
    changeTextStyle.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'aqua';
        e.target.style.color = 'brown';
        changeTextStyle.innerHTML = 'You\'ve Clicked';
    })
})

