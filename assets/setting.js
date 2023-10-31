const helpbtn = document.getElementById('help');
const modal = document.getElementById('helps');
const closebtn = document.getElementById('close');

helpbtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closebtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
