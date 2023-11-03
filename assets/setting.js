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