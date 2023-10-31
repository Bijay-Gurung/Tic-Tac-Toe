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