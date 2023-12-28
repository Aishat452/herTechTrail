const textChanges = document.querySelectorAll('p');
textChanges.forEach((changeTextStyle) => {
    changeTextStyle.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'aqua';
        e.target.style.color = 'brown';
        changeTextStyle.innerHTML = 'You\'ve Clicked. Kindly double click to clear';
    })
})


const change_back = document.querySelectorAll('p');
change_back.forEach((return_back)=>{
    return_back.addEventListener('dblclick', (e)=>{
        return_back.innerHTML = 'Cleared';
        e.target.style.color = 'white';
        e.target.style.backgroundColor = 'black';
    })
})
