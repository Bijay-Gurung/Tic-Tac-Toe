function help(){
    const helpbtn = document.getElementById('help');
    const modal = document.getElementById('helps');
    const closebtn = document.getElementById('close');
    
    helpbtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closebtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
help();

function credit(){
    const creditbtn = document.getElementById('credit');
    const modals = document.getElementById('credits');
    const closedbtn = document.getElementById('close1');

    creditbtn.addEventListener('click',() =>{
        modals.style.display = 'block';
    });

    closedbtn.addEventListener('click', () =>{
        modals.style.display = 'none';
    });
}
credit();