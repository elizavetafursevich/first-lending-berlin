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




document.getElementById("vid").addEventListener("click", function(e){

    if (document.getElementsByTagName('video')[0].paused) {  // если видео остановлено, запускаем
        document.querySelector('.video-block').classList.add('video-block-active');
        document.getElementsByTagName('video')[0].play();
        console.log(1)
    } else {
        document.getElementsByTagName('video')[0].pause();
    }
}, false);





const planButtums = document.querySelectorAll(".switch");
for (let i=0; i<planButtums.length;i++){
    planButtums[i].addEventListener("click",function (e){
        const chooosePlan =document.querySelector(".${data-target}");
        for(let j=0; j<planButtums.length;j++){
                this.add("#toggle-active");
        }



        // const choosePlan =e.target.getAttribute('data-target');
        // const offerBlock=document.querySelector(".${data-target}");
        // planButtums[i].classList.remove("toggle-active");
        // offerBlock.classList.remove("business-block_active");
        // for(let j=0; j<planButtums.length;j++){
        //     this.add("toggle-active");
        //     offerBlock.classList.add("business-block_active");
        // }

    });

}

let allValuts;
fetch("https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates?currencyCode")
    .then(response => response.json())
    .then(currentExchange => {
        allValuts = currentExchange;
        const valuta = {
            usd: {},
            eur: {},
            rub: {}
        };
        console.log("allValuts", allValuts);
        valuta.usd = allValuts.rates.find((rate) => rate.iso === "USD");
        valuta.eur = allValuts.rates.find((rate) => rate.iso === "EUR");
        valuta.rub = allValuts.rates.find((rate) => rate.iso === "RUB");
        document.querySelector(('.curency-usd')).innerHTML = valuta.usd.rate;
        document.querySelector(('.curency-eur')).innerHTML = valuta.eur.rate;
        document.querySelector(('.curency-rub')).innerHTML = valuta.rub.rate;
        console.log(valuta);
    })