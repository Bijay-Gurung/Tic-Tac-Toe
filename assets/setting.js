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

function music(){
    const musicRadio = document.getElementById('musicRadio');
const sfxRadio = document.getElementById('sfxRadio');
const music = document.getElementById('music');
const sfx = document.getElementById('sfx');

musicRadio.addEventListener('change', function(){
    if(musicRadio.checked){
        music.play();
    }
    else{
        music.pause();
    }
});

sfxRadio.addEventListener('change', function(){
    if(sfxRadio.checked){
        sfx.play();
    }
    else{
        sfx.pause();
    }
});
}
music();