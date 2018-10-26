var backDrop = document.querySelector('.backdrop');
var planButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var hamburger = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');



function closeModal() {

    modal.classList.remove('open');
    backDrop.classList.remove('open');
    mobileNav.classList.remove('mobile-nav__open');
    
    setTimeout(()=>{
        backDrop.style.display = "none";
        modal.style.display = "none";
        mobileNav.style.display = 'none';
    },400);

    

}

for (let plan of planButtons){
    plan.addEventListener('click',function () {


        backDrop.style.display = "block";
        modal.style.display = "block";

        setTimeout(()=>{
            modal.classList.add('open');
            backDrop.classList.add('open');
        },10);
    })
}


backDrop.addEventListener('click',closeModal);
modalNoButton.addEventListener('click',closeModal);


hamburger.addEventListener('click',function () {
   mobileNav.style.display = 'block';
   backDrop.style.display = 'block';
   
   setTimeout(()=>{
        mobileNav.classList.add('mobile-nav__open');
        backDrop.classList.add('open');
    },10);
    
});