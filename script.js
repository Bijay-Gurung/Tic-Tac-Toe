function tabs(){
    const tablinks = document.querySelectorAll('header nav a');
    const tabcontent = document.querySelectorAll('section .main');

    tablinks.forEach(tablink =>{
        tablink.addEventListener('click',(event) => {
            event.preventDefault();

            tablinks.forEach(link =>{
                link.classList.remove('active');
            });

            tablink.classList.add('active');

            tabcontent.forEach(content =>{
                content.style.display = 'none';
            });

            const targetID = tablink.getAttribute('data-toggle');
            const targetcontent = document.getElementById(targetID);
            targetcontent.style.display = 'block';
        });
    });
}
tabs();

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

function music() {
    const audio = document.getElementById('background-music');
    const musicImage = document.getElementById('music-image');

    if(audio.paused){
        audio.play();
        musicImage.src="/images/musical-note.png";
    }
    else{
        audio.pause();
        musicImage.src="/images/silent.png";
    }
}