document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAAtribute('href')).scrollintoView({
            behavior:'smooth'
        });
    });
});