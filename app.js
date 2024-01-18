const accordion = document.getElementsByClassName('container');


console.log(accordion[0]);

for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function()
    {
        this.classList.toggle('hk')
        
    })
}