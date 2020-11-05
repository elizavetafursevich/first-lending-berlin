window.addEventListener('scroll', function (e) {
    let nav = document.getElementById('header');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('header-colored');
        nav.classList.remove('header-transparent');
    }else {
        nav.classList.add('header-transparent');
        nav.classList.remove('header-colored');
    }
});

function fun1(){
    let pl = document.getElementById('video-block');
    pl.classList.remove('video-block');
    pl.classList.add('video-block-active');
}


document.getElementById("vid").addEventListener("click", function(e){

    if (document.getElementsByTagName('video')[0].paused) {  // если видео остановлено, запускаем
        document.getElementById('video-block').classList.add('video-block-active');
        document.getElementsByTagName('video')[0].play();
    } else {
        document.getElementsByTagName('video')[0].pause();
    }
}, false);



const planButtums = document.querySelectorAll(".toggle-button");
for (let i=0; i<planButtums.length;i++){

    planButtums[i].addEventListener("click",function (e){
        const choosePlan =e.target.getAttribute('data-target');
        const offerBlock=document.querySelector(".${choosePlan}");
        planButtums[i].classList.remove("toggle-active");
        offerBlock.classList.remove("business-block_active");

        for(let j=0; j<planButtums.length;j++){
            this.add("toggle-active");

            offerBlock.classList.add("business-block_active");
        }

    });

}
